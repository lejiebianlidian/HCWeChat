using HC.WeChat.MessageHandler;
using HC.WeChat.WechatAppConfigs;
using HC.WeChat.WechatAppConfigs.Dtos;
using Microsoft.AspNetCore.Mvc;
using Senparc.Weixin.MP;
using Senparc.Weixin.MP.Entities.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.Controllers
{
    [Route("[controller]/[action]")]
    public class YiBinWeChatController : WeChatMessageHandlerControllerBase
    {
        protected override string TenantConfigName => "YiBin";

        public YiBinWeChatController(IMessageHandlerAppServer messageHandlerAppServer, 
            IWechatAppConfigAppService wechatAppConfigAppService) : base(messageHandlerAppServer, wechatAppConfigAppService)
        {

        }
    }
}
