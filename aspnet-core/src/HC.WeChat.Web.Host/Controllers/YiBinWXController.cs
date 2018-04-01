using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HC.WeChat.Controllers;
using HC.WeChat.MessageHandler;
using HC.WeChat.Models.WeChat;
using HC.WeChat.WechatAppConfigs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace HC.WeChat.Web.Host.Controllers
{
    public class YiBinWXController : YiBinWeChatController
    {
        public YiBinWXController(IMessageHandlerAppServer messageHandlerAppServer,
           IWechatAppConfigAppService wechatAppConfigAppService,
           IOptions<WeChatTenantSetting> settings) : base(messageHandlerAppServer, wechatAppConfigAppService, settings)
        {
        }

        public override IActionResult BindUser()
        {
            ViewBag.UserName = "Donald";
            ViewBag.TenantId = this.GetTenantId();
            return View();
        }

        /// <summary>
        /// 关于我们
        /// </summary>
        public IActionResult About()
        {
            return Redirect("/YiBinWX/company_info.html");
        }

        /// <summary>
        /// 客户热线
        /// </summary>
        public IActionResult CustomerServer()
        {
            return Redirect("/YiBinWX/service.html");
        }

        /// <summary>
        /// 附近店铺
        /// </summary>
        public IActionResult NearShop()
        {
            return View();
        }

        /// <summary>
        /// 专卖许可
        /// </summary>
        public IActionResult License()
        {
            return Redirect("/YiBinWX/process.html");
        }

        /// <summary>
        /// 意见反馈
        /// </summary>
        public IActionResult AdviseBack()
        {
            return View();
        }

        /// <summary>
        /// 问卷调查
        /// </summary>
        public IActionResult Question()
        {
            return View();
        }
    }
}