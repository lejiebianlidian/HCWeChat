using HC.WeChat.MessageHandler;
using HC.WeChat.WechatAppConfigs;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.Controllers
{
    [Route("[controller]/[action]")]
    public class GuangAnWeChatController : WeChatMessageHandlerControllerBase
    {
        protected override string TenantConfigName => "GuangAn";

        public GuangAnWeChatController(IMessageHandlerAppServer messageHandlerAppServer,
           IWechatAppConfigAppService wechatAppConfigAppService) : base(messageHandlerAppServer, wechatAppConfigAppService)
        {

        }
    }

   
}
