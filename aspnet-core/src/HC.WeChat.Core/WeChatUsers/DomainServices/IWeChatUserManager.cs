using System;
using System.Threading.Tasks;
using Abp;
using Abp.Domain.Services;
using HC.WeChat.WeChatUsers;

namespace HC.WeChat.WeChatUsers.DomainServices
{
    public interface IWeChatUserManager : IDomainService
    {

        /// <summary>
        /// 初始化方法
        /// </summary>
        void InitWeChatUser();

    }
}
