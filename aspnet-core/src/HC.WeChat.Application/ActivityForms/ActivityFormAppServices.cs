using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;

using System.Linq.Dynamic.Core;
using Microsoft.EntityFrameworkCore;
using HC.WeChat.ActivityForms.Authorization;
using HC.WeChat.ActivityForms.Dtos;
using HC.WeChat.ActivityForms.DomainServices;
using HC.WeChat.ActivityForms;
using System;
using System.Linq;
using HC.WeChat.Authorization;
using HC.WeChat.Dto;
using HC.WeChat.ActivityDeliveryInfos;
using HC.WeChat.WeChatUsers.DomainServices;
using HC.WeChat.Retailers;
using HC.WeChat.WechatEnums;
using HC.WeChat.ActivityFormLogs;
using HC.WeChat.Activities;
using HC.WeChat.Authorization.Users;

namespace HC.WeChat.ActivityForms
{
    /// <summary>
    /// ActivityForm应用层服务的接口实现方法
    /// </summary>
    //[AbpAuthorize(ActivityFormAppPermissions.ActivityForm)]
    //[AbpAuthorize(AppPermissions.Pages)]
    public class ActivityFormAppService : WeChatAppServiceBase, IActivityFormAppService
    {
        private readonly IRepository<ActivityForm, Guid> _activityformRepository;
        private readonly IActivityFormManager _activityformManager;
        private readonly IWeChatUserManager _wechatuserManager;
        private readonly IRetailerAppService _retailerAppService;
        private readonly IRepository<ActivityDeliveryInfo, Guid> _activitydeliveryinfoRepository;
        private readonly IRepository<ActivityFormLog, Guid> _activityFormLogRepository;
        private readonly IRepository<Activity, Guid> _activityRepository;
        private readonly IRepository<User, long> _userRepository;

        /// <summary>
        /// 构造函数
        /// </summary>
        public ActivityFormAppService(IRepository<ActivityForm, Guid> activityformRepository
      , IActivityFormManager activityformManager
            , IWeChatUserManager wechatuserManager
            , IRetailerAppService retailerAppService
            , IRepository<ActivityDeliveryInfo, Guid> activitydeliveryinfoRepository
            , IRepository<ActivityFormLog, Guid> activityFormLogRepository
            , IRepository<Activity, Guid> activityRepository
            , IRepository<User, long> userRepository
        )
        {
            _activityformRepository = activityformRepository;
            _activityformManager = activityformManager;
            _wechatuserManager = wechatuserManager;
            _retailerAppService = retailerAppService;
            _activitydeliveryinfoRepository = activitydeliveryinfoRepository;
            _activityFormLogRepository = activityFormLogRepository;
            _activityRepository = activityRepository;
            _userRepository = userRepository;
        }

        /// <summary>
        /// 获取ActivityForm的分页列表信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PagedResultDto<ActivityFormListDto>> GetPagedActivityForms(GetActivityFormsInput input)
        {

            var query = _activityformRepository.GetAll()
                .WhereIf(!string.IsNullOrEmpty(input.FormCode), q => q.FormCode == input.FormCode)
                .WhereIf(input.BeginDate.HasValue, q => q.CreationTime >= input.BeginDate)
                .WhereIf(input.EndDate.HasValue, q => q.CreationTime < input.EndDateOne)
                .WhereIf(input.Status.HasValue, q => q.Status == input.Status)
                .WhereIf(!string.IsNullOrEmpty(input.Filter), q => q.ActivityName.Contains(input.Filter) 
                || q.RetailerName.Contains(input.Filter) || q.ManagerName.Contains(input.Filter));
            //TODO:根据传入的参数添加过滤条件
            var activityformCount = await query.CountAsync();

            var activityforms = await query
                .OrderByDescending(q => q.CreationTime)
                .PageBy(input)
                .ToListAsync();

            //var activityformListDtos = ObjectMapper.Map<List <ActivityFormListDto>>(activityforms);
            var activityformListDtos = activityforms.MapTo<List<ActivityFormListDto>>();

            return new PagedResultDto<ActivityFormListDto>(
                activityformCount,
                activityformListDtos
                );

        }

        /// <summary>
        /// 通过指定id获取ActivityFormListDto信息
        /// </summary>
        public async Task<ActivityFormListDto> GetActivityFormByIdAsync(EntityDto<Guid> input)
        {
            var entity = await _activityformRepository.GetAsync(input.Id);

            return entity.MapTo<ActivityFormListDto>();
        }

        /// <summary>
        /// 导出ActivityForm为excel表
        /// </summary>
        /// <returns></returns>
        //public async Task<FileDto> GetActivityFormsToExcel(){
        //var users = await UserManager.Users.ToListAsync();
        //var userListDtos = ObjectMapper.Map<List<UserListDto>>(users);
        //await FillRoleNames(userListDtos);
        //return _userListExcelExporter.ExportToFile(userListDtos);
        //}
        /// <summary>
        /// MPA版本才会用到的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<GetActivityFormForEditOutput> GetActivityFormForEdit(NullableIdDto<Guid> input)
        {
            var output = new GetActivityFormForEditOutput();
            ActivityFormEditDto activityformEditDto;

            if (input.Id.HasValue)
            {
                var entity = await _activityformRepository.GetAsync(input.Id.Value);

                activityformEditDto = entity.MapTo<ActivityFormEditDto>();

                //activityformEditDto = ObjectMapper.Map<List <activityformEditDto>>(entity);
            }
            else
            {
                activityformEditDto = new ActivityFormEditDto();
            }

            output.ActivityForm = activityformEditDto;
            return output;

        }

        /// <summary>
        /// 添加或者修改ActivityForm的公共方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task CreateOrUpdateActivityForm(CreateOrUpdateActivityFormInput input)
        {

            if (input.ActivityForm.Id.HasValue)
            {
                await UpdateActivityFormAsync(input.ActivityForm);
            }
            else
            {
                await CreateActivityFormAsync(input.ActivityForm);
            }
        }

        /// <summary>
        /// 新增ActivityForm
        /// </summary>
        //[AbpAuthorize(ActivityFormAppPermissions.ActivityForm_CreateActivityForm)]
        protected virtual async Task<ActivityFormEditDto> CreateActivityFormAsync(ActivityFormEditDto input)
        {
            //TODO:新增前的逻辑判断，是否允许新增
            var entity = ObjectMapper.Map<ActivityForm>(input);

            entity = await _activityformRepository.InsertAsync(entity);
            return entity.MapTo<ActivityFormEditDto>();
        }

        /// <summary>
        /// 编辑ActivityForm
        /// </summary>
        //[AbpAuthorize(ActivityFormAppPermissions.ActivityForm_EditActivityForm)]
        protected virtual async Task UpdateActivityFormAsync(ActivityFormEditDto input)
        {
            //TODO:更新前的逻辑判断，是否允许更新
            var entity = await _activityformRepository.GetAsync(input.Id.Value);
            input.MapTo(entity);

            // ObjectMapper.Map(input, entity);
            await _activityformRepository.UpdateAsync(entity);
        }

        /// <summary>
        /// 删除ActivityForm信息的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        //[AbpAuthorize(ActivityFormAppPermissions.ActivityForm_DeleteActivityForm)]
        public async Task DeleteActivityForm(EntityDto<Guid> input)
        {

            //TODO:删除前的逻辑判断，是否允许删除
            await _activityformRepository.DeleteAsync(input.Id);
        }

        /// <summary>
        /// 批量删除ActivityForm的方法
        /// </summary>
        //[AbpAuthorize(ActivityFormAppPermissions.ActivityForm_BatchDeleteActivityForms)]
        public async Task BatchDeleteActivityFormsAsync(List<Guid> input)
        {
            //TODO:批量删除前的逻辑判断，是否允许删除
            await _activityformRepository.DeleteAsync(s => input.Contains(s.Id));
        }

        public async Task<APIResultDto> SubmitActivityFormAsync(ActivityFormInputDto input)
        {
            var form = input.MapTo<ActivityForm>();//表单信息
            var delivery = input.MapTo<ActivityDeliveryInfo>();//收货信息

            var user = await _wechatuserManager.GetWeChatUserAsync(input.OpenId, input.TenantId);

            if (user == null)
            {
                return new APIResultDto() { Code = 701, Msg = "当前用户无效" };
            }

            if (user.UserType != UserTypeEnum.零售客户 && user.UserType != UserTypeEnum.客户经理)
            {
                return new APIResultDto() { Code = 702, Msg = "当前用户类型不支持" };
            }

            form.CreationUser = user.UserName;
            if (user.UserType == UserTypeEnum.零售客户)
            {
                form.RetailerId = user.UserId.Value;
                form.RetailerName = user.UserName;
                var retailer = await _retailerAppService.GetRetailerByIdAsync(new EntityDto<Guid> { Id = user.UserId.Value });
                form.ManagerName = retailer.Manager;
            }
            else if (user.UserType == UserTypeEnum.客户经理)
            {
                form.ManagerName = user.UserName;
            }

            form.FormCode = GetFormCode();
            form.Status = FormStatusEnum.提交申请;
            var activity = await _activityRepository.GetAsync(input.ActivityId);
            form.ActivityName = activity.Name;
            //1、保存表单
            var formId = await _activityformRepository.InsertAndGetIdAsync(form);
            await CurrentUnitOfWork.SaveChangesAsync();//获取保存的Form ID
            delivery.ActivityFormId = formId;
            //2、保存邮寄信息
            await _activitydeliveryinfoRepository.InsertAsync(delivery);

            //3、保存记录日志
            var log = new ActivityFormLog();
            log.ActionTime = DateTime.Now;
            log.ActivityFormId = formId;
            log.Opinion = "提交申请";
            log.Status = FormStatusEnum.提交申请;
            log.StatusName = log.Status.ToString();
            log.UserId = user.UserId.Value;
            log.UserName = user.UserName;
            log.UserType = user.UserType;

            await _activityFormLogRepository.InsertAsync(log);

            return new APIResultDto() { Code = 0, Msg = "活动申请成功，待客户经理审核" };
        }

        private string GetFormCode()
        {
            GenerateCode gserver = new GenerateCode(0, 0);
            string code = "YA" + gserver.nextId().ToString();
            return code;
        }

        public async Task<APIResultDto> ChangeActivityFormStatusAsync(ActivityFormStatusDto input)
        {
            var form = await _activityformRepository.GetAsync(input.Id);
            var user = await _userRepository.GetAsync(AbpSession.UserId.Value);
            //更新状态
            form.Status = input.Status;
            //更新日志
            var log = new ActivityFormLog();
            log.ActionTime = DateTime.Now;
            log.ActivityFormId = form.Id;
            log.Opinion = input.Opinion;
            log.Status = input.Status;
            log.StatusName = input.Status.ToString();
            log.UserId = user.EmployeeId;
            log.UserName = user.UserName;
            log.UserType = user.EmployeeId.HasValue ? UserTypeEnum.客户经理 : UserTypeEnum.后台;

            await _activityformRepository.UpdateAsync(form);
            await _activityFormLogRepository.InsertAsync(log);

            return new APIResultDto() { Code = 0, Msg = "操作成功" };
        }
    }
}

