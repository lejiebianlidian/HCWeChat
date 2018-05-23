using System;
using System.Threading.Tasks;
using Abp;
using Abp.Domain.Services;
using HC.WeChat.ActivityDeliveryInfos;
using HC.WeChat.ActivityForms;
using HC.WeChat.WeChatUsers;

namespace HC.WeChat.ActivityForms.DomainServices
{
    public interface IActivityFormManager : IDomainService
    {

        /// <summary>
        /// 初始化方法
        /// </summary>
        void InitActivityForm();

        Task<ActivityForm> SubmitActivityFormAsync(ActivityForm form, ActivityDeliveryInfo delivery, WeChatUser user);

    }
}
