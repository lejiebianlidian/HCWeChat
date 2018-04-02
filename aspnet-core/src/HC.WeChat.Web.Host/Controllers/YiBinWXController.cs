using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HC.WeChat.Authorization.WeChatOAuth;
using HC.WeChat.Configuration;
using HC.WeChat.Controllers;
using HC.WeChat.MessageHandler;
using HC.WeChat.Models.WeChat;
using HC.WeChat.WechatAppConfigs;
using HC.WeChat.WechatEnums;
using HC.WeChat.WeChatUsers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace HC.WeChat.Web.Host.Controllers
{
    public class YiBinWXController : WeChatMessageHandlerControllerBase
    {
        IWeChatOAuthAppService _weChatOAuthAppService;
        IWeChatUserAppService _weChatUserAppService;
        private readonly IConfigurationRoot _appConfiguration;
        private WeChatTenantSetting _settings;

        private int? tenantId;
        public YiBinWXController(IMessageHandlerAppServer messageHandlerAppServer,
           IWechatAppConfigAppService wechatAppConfigAppService,
           IOptions<WeChatTenantSetting> settings,
           IWeChatOAuthAppService weChatOAuthAppService,
           IWeChatUserAppService weChatUserAppService,
           IHostingEnvironment env) : base(messageHandlerAppServer, wechatAppConfigAppService)
        {
            _settings = settings.Value;
            tenantId = _settings.YiBin;
            InitAppConfigSetting();

            _weChatOAuthAppService = weChatOAuthAppService;
            _weChatUserAppService = weChatUserAppService;
            _weChatOAuthAppService.WechatAppConfig = WechatAppConfig;//注入配置
            _appConfiguration = env.GetAppConfiguration();

        }

        protected override int? GetTenantId()
        {
            return tenantId;
        }

        /// <summary>
        /// 用户绑定
        /// </summary>
        public async Task<ActionResult> BindUser(string code, string state)
        {
            Logger.InfoFormat("code:{0} state:{1}", code, state);
            var oauth = await _weChatOAuthAppService.GetAccessTokenAsync(code);
            var tenantId = GetTenantId();
            var user = await _weChatUserAppService.GetWeChatUserAsync(oauth.openid, tenantId);
            var wuser = await _weChatOAuthAppService.GetUserInfoAsync(oauth.access_token, oauth.openid);
            user.NickName = wuser.nickname;
            user.HeadImgUrl = wuser.headimgurl;
            if (user.UserType == UserTypeEnum.零售客户 || user.UserType == UserTypeEnum.客户经理)
            {
                return View("UserIndex", user);
            }

            ViewBag.NickName = user.NickName;
            //ViewBag.HeadImgUrl = user.HeadImgUrl;
            ViewBag.OpenId = oauth.openid;
            ViewBag.TenantId = tenantId;
            var url = _appConfiguration["App:ServerRootAddress"] + "YiBinWX/BindUser";
            ViewBag.Url = _weChatOAuthAppService.GetAuthorizeUrl(url, tenantId.ToString(), Senparc.Weixin.MP.OAuthScope.snsapi_base);
            Logger.InfoFormat("Url:{0}", ViewBag.Url);
            return View();
        }

        /// <summary>
        /// 用户个人中心
        /// </summary>
        public IActionResult UserIndex()
        {
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