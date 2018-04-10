using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Authorization;
using HC.WeChat.Activities;
using HC.WeChat.ActivityGoodses;
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
    [AbpAllowAnonymous]
    public class YiBinWXController : WeChatWebControllerBase
    {
        IWeChatOAuthAppService _weChatOAuthAppService;
        IWeChatUserAppService _weChatUserAppService;
        private readonly IConfigurationRoot _appConfiguration;
        private WeChatTenantSetting _settings;
        IActivityAppService _activityAppService;
        IActivityGoodsAppService _activityGoodsAppService;

        private int? tenantId;
        public YiBinWXController(IWechatAppConfigAppService wechatAppConfigAppService,
           IOptions<WeChatTenantSetting> settings,
           IWeChatOAuthAppService weChatOAuthAppService,
           IWeChatUserAppService weChatUserAppService,
           IActivityAppService activityAppService,
           IActivityGoodsAppService activityGoodsAppService,
           IHostingEnvironment env) : base(wechatAppConfigAppService)
        {
            _settings = settings.Value;
            tenantId = _settings.YiBin;
            InitAppConfigSetting();

            _weChatOAuthAppService = weChatOAuthAppService;
            _weChatUserAppService = weChatUserAppService;
            _activityAppService = activityAppService;
            _activityGoodsAppService = activityGoodsAppService;
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
        public IActionResult BindUser(string code, string state)
        {
            Logger.InfoFormat("code:{0} state:{1}", code, state);
            var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
            var tenantId = GetTenantId();
            //var openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            var user = _weChatUserAppService.GetWeChatUserAsync(oauth.openid, tenantId).Result;
            //var wuser = _weChatOAuthAppService.GetUserInfoAsync(oauth.access_token, oauth.openid).Result;
            user.NickName = user.NickName;
            user.HeadImgUrl = "";// wuser.headimgurl;
            if (user.UserType == UserTypeEnum.零售客户 || user.UserType == UserTypeEnum.客户经理)
            {
                return View("UserIndex", user);
            }

            ViewBag.NickName = user.NickName;
            ViewBag.OpenId = oauth.openid;
            ViewBag.TenantId = tenantId;
            var root = _appConfiguration["App:ServerRootAddress"];
            ViewBag.ServerRootAddress = root;
            //var url = root + "YiBinWX/BindUser";
            //ViewBag.Url = _weChatOAuthAppService.GetAuthorizeUrl(url, tenantId.ToString(), Senparc.Weixin.MP.OAuthScope.snsapi_base);
            //Logger.InfoFormat("Url:{0}", ViewBag.Url);
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
        public IActionResult AdviseBack(string code, string stat)
        {
            var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
            //var openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            ViewBag.OpenId = oauth.openid;
            ViewBag.TenantId = tenantId;
            var root = _appConfiguration["App:ServerRootAddress"];
            ViewBag.ServerRootAddress = root;
            return View();
        }

        /// <summary>
        /// 问卷调查
        /// </summary>
        public IActionResult Question(string code, string state)
        {
            var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
            //var openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            ViewBag.OpenId = oauth.openid;
            ViewBag.TenantId = tenantId;
            var root = _appConfiguration["App:ServerRootAddress"];
            ViewBag.ServerRootAddress = root;
            return View();
        }

        /// <summary>
        /// 营销活动
        /// </summary>
        public IActionResult Activity()
        {
            var activity = _activityAppService.GetTenantWeChatActivityAsync(tenantId).Result;
            if (activity == null)
            {
                return View("NoActivity");
            }
            var url = _appConfiguration["App:ServerRootAddress"] + "/YiBinWX/ActivityForm";
            ViewBag.FormUrl = _weChatOAuthAppService.GetAuthorizeUrl(url, activity.Id.ToString(), Senparc.Weixin.MP.OAuthScope.snsapi_base);
            //ViewBag.FormUrl = url + "?state=" + activity.Id;
            ViewBag.FlowUrl = Url.Action("ActivityFlow");
            return View();
        }

        /// <summary>
        /// 没有上线的活动
        /// </summary>
        public IActionResult NoActivity()
        {
            return View();
        }

        /// <summary>
        /// 活动流程
        /// </summary>
        public IActionResult ActivityFlow()
        {
            return View();
        }

        /// <summary>
        /// 活动表单
        /// </summary>
        public IActionResult ActivityForm(string code, string state)
        {
            state = "BD889174-D22A-4F2E-8C8F-08D599CF4F79";
            var activityId = Guid.Parse(state);
            //var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
            var tenantId = GetTenantId();
            //var user = _weChatUserAppService.GetWeChatUserAsync(oauth.openid, tenantId).Result;
            var openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            var user = _weChatUserAppService.GetWeChatUserAsync(openid, tenantId).Result;
            ViewBag.UserType = (int)user.UserType;
            var root = _appConfiguration["App:ServerRootAddress"];
            var url = root + "/YiBinWX/BindUser";
            ViewBag.Url = _weChatOAuthAppService.GetAuthorizeUrl(url, tenantId.ToString(), Senparc.Weixin.MP.OAuthScope.snsapi_base);
            var goodsList = _activityGoodsAppService.GetActivityGoodsByActivityId(activityId).Result;
            ViewBag.GoodsList = goodsList;
            ViewBag.ServerRootAddress = root;
            ViewBag.OpenId = openid;
            ViewBag.TenantId = tenantId;
            ViewBag.ActivityId = activityId;
            ViewBag.JumpUrl = Url.Action("Activity");
            return View();
        }

        /// <summary>
        /// 活动宴席
        /// </summary>
        public IActionResult ActivityBanquet(string code, string state)
        {
            
            return View();
        }
    }
}