using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using HC.WeChat.WechatAppConfigs.Dtos;
using HC.WeChat.WechatAppConfigs;

namespace HC.WeChat.WechatAppConfigs
{
    /// <summary>
    /// WechatAppConfig应用层服务的接口方法
    /// </summary>
    public interface IWechatAppConfigAppService : IApplicationService
    {
        /// <summary>
        /// 获取WechatAppConfig的分页列表信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<PagedResultDto<WechatAppConfigListDto>> GetPagedWechatAppConfigs(GetWechatAppConfigsInput input);

        /// <summary>
        /// 通过指定id获取WechatAppConfigListDto信息
        /// </summary>
        Task<WechatAppConfigListDto> GetWechatAppConfigByIdAsync(EntityDto<int> input);

        /// <summary>
        /// 导出WechatAppConfig为excel表
        /// </summary>
        /// <returns></returns>
        //  Task<FileDto> GetWechatAppConfigsToExcel();
        /// <summary>
        /// MPA版本才会用到的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<GetWechatAppConfigForEditOutput> GetWechatAppConfigForEdit(NullableIdDto<int> input);

        //todo:缺少Dto的生成GetWechatAppConfigForEditOutput
        /// <summary>
        /// 添加或者修改WechatAppConfig的公共方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task CreateOrUpdateWechatAppConfig(CreateOrUpdateWechatAppConfigInput input);

        /// <summary>
        /// 删除WechatAppConfig信息的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task DeleteWechatAppConfig(EntityDto<int> input);

        /// <summary>
        /// 批量删除WechatAppConfig
        /// </summary>
        Task BatchDeleteWechatAppConfigsAsync(List<int> input);
    }
}
