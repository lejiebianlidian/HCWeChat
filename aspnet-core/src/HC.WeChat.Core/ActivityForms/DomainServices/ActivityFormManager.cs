using System;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using HC.WeChat.Activities;
using HC.WeChat.ActivityDeliveryInfos;
using HC.WeChat.ActivityFormLogs;
using HC.WeChat.ActivityForms;
using HC.WeChat.WechatEnums;
using HC.WeChat.WeChatUsers;
using HC.WeChat.WeChatUsers.DomainServices;

namespace HC.WeChat.ActivityForms.DomainServices
{
    /// <summary>
    /// ActivityForm领域层的业务管理
    /// </summary>
    public class ActivityFormManager : WeChatDomainServiceBase, IActivityFormManager
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        private readonly IRepository<ActivityForm, Guid> _activityformRepository;
        private readonly IRepository<Activity, Guid> _activityRepository;
        private readonly IRepository<ActivityDeliveryInfo, Guid> _activitydeliveryinfoRepository;
        private readonly IRepository<ActivityFormLog, Guid> _activityFormLogRepository;
        /// <summary>
        /// ActivityForm的构造方法
        /// </summary>
        public ActivityFormManager(IRepository<ActivityForm, Guid> activityformRepository
             , IRepository<Activity, Guid> activityRepository
             , IRepository<ActivityDeliveryInfo, Guid> activitydeliveryinfoRepository
             , IRepository<ActivityFormLog, Guid> activityFormLogRepository)
        {
            _activityformRepository = activityformRepository;
            _activityRepository = activityRepository;
            _activitydeliveryinfoRepository = activitydeliveryinfoRepository;
            _activityFormLogRepository = activityFormLogRepository;
        }

        //TODO:编写领域业务代码
        /// <summary>
        ///     初始化
        /// </summary>
        public void InitActivityForm()
        {

        }

        public async Task<ActivityForm> SubmitActivityFormAsync(ActivityForm form, ActivityDeliveryInfo delivery, WeChatUser user)
        {
            form.CreationUser = user.UserName;
            form.CreationId = user.UserId;
            var activity = await _activityRepository.GetAsync(form.ActivityId);
            form.ActivityName = activity.Name;
            //1、保存表单
            form.Id = await _activityformRepository.InsertAndGetIdAsync(form);
            
            await CurrentUnitOfWork.SaveChangesAsync();//获取保存的Form ID
            delivery.ActivityFormId = form.Id;
            delivery.CreationTime = DateTime.Now;
            delivery.Type = DeliveryUserTypeEnum.消费者;
            //2、保存邮寄信息
            await _activitydeliveryinfoRepository.InsertAsync(delivery);

            //3、保存记录日志
            var log = new ActivityFormLog();
            log.ActionTime = DateTime.Now;
            log.ActivityFormId = form.Id;
            log.Opinion = "提交申请";
            log.Status = FormStatusEnum.提交申请;
            log.StatusName = log.Status.ToString();
            log.UserId = user.UserId;
            log.UserName = user.UserName;
            log.UserType = user.UserType;

            await _activityFormLogRepository.InsertAsync(log);

            //如果是客户经理提交 为初审通过 2018-4-10
            if (form.Status == FormStatusEnum.初审通过)
            {
                var log2 = new ActivityFormLog();
                log2.ActionTime = DateTime.Now.AddSeconds(5);
                log2.ActivityFormId = form.Id;
                log2.Opinion = "初审通过";
                log2.Status = FormStatusEnum.初审通过;
                log2.StatusName = log2.Status.ToString();
                log2.UserId = user.UserId.Value;
                log2.UserName = user.UserName;
                log2.UserType = user.UserType;

                await _activityFormLogRepository.InsertAsync(log2);
            }
            return form;
        }
       
    }

}
