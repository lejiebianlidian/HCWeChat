using System;
using System.Collections.Generic;
using System.Linq;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using HC.WeChat.WeChatUsers;

namespace HC.WeChat.WeChatUsers.DomainServices
{
    /// <summary>
    /// WeChatUser领域层的业务管理
    /// </summary>
    public class WeChatUserManager : WeChatDomainServiceBase, IWeChatUserManager
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        private readonly IRepository<WeChatUser, Guid> _wechatuserRepository;
        /// <summary>
        /// WeChatUser的构造方法
        /// </summary>
        public WeChatUserManager(IRepository<WeChatUser, Guid> wechatuserRepository)
        {
            _wechatuserRepository = wechatuserRepository;
        }

        //TODO:编写领域业务代码
        /// <summary>
        ///     初始化
        /// </summary>
        public void InitWeChatUser()
        {
            throw new NotImplementedException();
        }

    }

}
