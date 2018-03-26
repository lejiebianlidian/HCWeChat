using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;

using System.Linq.Dynamic.Core;
using Microsoft.EntityFrameworkCore;
using HC.WeChat.WeChatUsers.Authorization;
using HC.WeChat.WeChatUsers.Dtos;
using HC.WeChat.WeChatUsers.DomainServices;
using HC.WeChat.WeChatUsers;
using System;

namespace HC.WeChat.WeChatUsers
{
    /// <summary>
    /// WeChatUser应用层服务的接口实现方法
    /// </summary>
    [AbpAuthorize(WeChatUserAppPermissions.WeChatUser)]
    public class WeChatUserAppService : WeChatAppServiceBase, IWeChatUserAppService
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        private readonly IRepository<WeChatUser, Guid> _wechatuserRepository;
        private readonly IWeChatUserManager _wechatuserManager;

        /// <summary>
        /// 构造函数
        /// </summary>
        public WeChatUserAppService(IRepository<WeChatUser, Guid> wechatuserRepository
      , IWeChatUserManager wechatuserManager
        )
        {
            _wechatuserRepository = wechatuserRepository;
            _wechatuserManager = wechatuserManager;
        }

        /// <summary>
        /// 获取WeChatUser的分页列表信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PagedResultDto<WeChatUserListDto>> GetPagedWeChatUsers(GetWeChatUsersInput input)
        {

            var query = _wechatuserRepository.GetAll();
            //TODO:根据传入的参数添加过滤条件
            var wechatuserCount = await query.CountAsync();

            var wechatusers = await query
                .OrderBy(input.Sorting)
                .PageBy(input)
                .ToListAsync();

            //var wechatuserListDtos = ObjectMapper.Map<List <WeChatUserListDto>>(wechatusers);
            var wechatuserListDtos = wechatusers.MapTo<List<WeChatUserListDto>>();

            return new PagedResultDto<WeChatUserListDto>(
                wechatuserCount,
                wechatuserListDtos
                );

        }

        /// <summary>
        /// 通过指定id获取WeChatUserListDto信息
        /// </summary>
        public async Task<WeChatUserListDto> GetWeChatUserByIdAsync(EntityDto<Guid> input)
        {
            var entity = await _wechatuserRepository.GetAsync(input.Id);

            return entity.MapTo<WeChatUserListDto>();
        }

        /// <summary>
        /// 导出WeChatUser为excel表
        /// </summary>
        /// <returns></returns>
        //public async Task<FileDto> GetWeChatUsersToExcel(){
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
        public async Task<GetWeChatUserForEditOutput> GetWeChatUserForEdit(NullableIdDto<Guid> input)
        {
            var output = new GetWeChatUserForEditOutput();
            WeChatUserEditDto wechatuserEditDto;

            if (input.Id.HasValue)
            {
                var entity = await _wechatuserRepository.GetAsync(input.Id.Value);

                wechatuserEditDto = entity.MapTo<WeChatUserEditDto>();

                //wechatuserEditDto = ObjectMapper.Map<List <wechatuserEditDto>>(entity);
            }
            else
            {
                wechatuserEditDto = new WeChatUserEditDto();
            }

            output.WeChatUser = wechatuserEditDto;
            return output;

        }

        /// <summary>
        /// 添加或者修改WeChatUser的公共方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task CreateOrUpdateWeChatUser(CreateOrUpdateWeChatUserInput input)
        {

            if (input.WeChatUser.Id.HasValue)
            {
                await UpdateWeChatUserAsync(input.WeChatUser);
            }
            else
            {
                await CreateWeChatUserAsync(input.WeChatUser);
            }
        }

        /// <summary>
        /// 新增WeChatUser
        /// </summary>
        [AbpAuthorize(WeChatUserAppPermissions.WeChatUser_CreateWeChatUser)]
        protected virtual async Task<WeChatUserEditDto> CreateWeChatUserAsync(WeChatUserEditDto input)
        {
            //TODO:新增前的逻辑判断，是否允许新增
            var entity = ObjectMapper.Map<WeChatUser>(input);

            entity = await _wechatuserRepository.InsertAsync(entity);
            return entity.MapTo<WeChatUserEditDto>();
        }

        /// <summary>
        /// 编辑WeChatUser
        /// </summary>
        [AbpAuthorize(WeChatUserAppPermissions.WeChatUser_EditWeChatUser)]
        protected virtual async Task UpdateWeChatUserAsync(WeChatUserEditDto input)
        {
            //TODO:更新前的逻辑判断，是否允许更新
            var entity = await _wechatuserRepository.GetAsync(input.Id.Value);
            input.MapTo(entity);

            // ObjectMapper.Map(input, entity);
            await _wechatuserRepository.UpdateAsync(entity);
        }

        /// <summary>
        /// 删除WeChatUser信息的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [AbpAuthorize(WeChatUserAppPermissions.WeChatUser_DeleteWeChatUser)]
        public async Task DeleteWeChatUser(EntityDto<Guid> input)
        {

            //TODO:删除前的逻辑判断，是否允许删除
            await _wechatuserRepository.DeleteAsync(input.Id);
        }

        /// <summary>
        /// 批量删除WeChatUser的方法
        /// </summary>
        [AbpAuthorize(WeChatUserAppPermissions.WeChatUser_BatchDeleteWeChatUsers)]
        public async Task BatchDeleteWeChatUsersAsync(List<Guid> input)
        {
            //TODO:批量删除前的逻辑判断，是否允许删除
            await _wechatuserRepository.DeleteAsync(s => input.Contains(s.Id));
        }

    }
}

