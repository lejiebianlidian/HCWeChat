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
using Abp.Domain.Repositories;
using Abp.AutoMapper;
using HC.WeChat.WeChatUsers.Dtos;
using HC.WeChat.ActivityForms;
using HC.WeChat.ActivityForms.Dtos;
using HC.WeChat.ActivityBanquets;
using HC.WeChat.ActivityDeliveryInfos;
using Abp.Application.Services.Dto;
using HC.WeChat.ActivityDeliveryInfos.Dtos;
using Senparc.Weixin.MP.Helpers;
using Microsoft.AspNetCore.Http;
using HC.WeChat.ActivityBanquets;

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
        private readonly IRepository<WeChatUser, Guid> _wechatuserRepository;
        IActivityFormAppService _activityFormAppService;
        IActivityBanquetAppService _activityBanquetAppService;
        private int? tenantId;
        IActivityBanquetAppService _activityBanquetAppService;
        IActivityDeliveryInfoAppService _activityDeliveryInfoAppService;
        public YiBinWXController(IWechatAppConfigAppService wechatAppConfigAppService,
           IOptions<WeChatTenantSetting> settings,
           IWeChatOAuthAppService weChatOAuthAppService,
           IWeChatUserAppService weChatUserAppService,
           IActivityAppService activityAppService,
           IActivityGoodsAppService activityGoodsAppService,
           IRepository<WeChatUser, Guid> wechatuserRepository,
           IActivityFormAppService activityFormAppService,
           IActivityBanquetAppService activityBanquetAppService,
           IActivityDeliveryInfoAppService activityDeliveryInfoAppService,
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
            _wechatuserRepository = wechatuserRepository;
            _activityFormAppService = activityFormAppService;
            _activityBanquetAppService = activityBanquetAppService;
            _activityDeliveryInfoAppService = activityDeliveryInfoAppService;

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
            var user = _wechatuserRepository.GetAll().Where(r=>r.TenantId== AbpSession.TenantId).FirstOrDefault();
            return View(user.MapTo<WeChatUserListDto>());
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
            //state = "BD889174-D22A-4F2E-8C8F-08D599CF4F79";
            var activityId = Guid.Parse(state);
            var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
            var tenantId = GetTenantId();
            //var user = _weChatUserAppService.GetWeChatUserAsync(oauth.openid, tenantId).Result;
            //var openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            var user = _weChatUserAppService.GetWeChatUserAsync(oauth.openid, tenantId).Result;
            ViewBag.UserType = (int)user.UserType;
            var root = _appConfiguration["App:ServerRootAddress"];
            var url = root + "/YiBinWX/BindUser";
            ViewBag.Url = _weChatOAuthAppService.GetAuthorizeUrl(url, tenantId.ToString(), Senparc.Weixin.MP.OAuthScope.snsapi_base);
            var goodsList = _activityGoodsAppService.GetActivityGoodsByActivityId(activityId).Result;
            ViewBag.GoodsList = goodsList;
            ViewBag.ServerRootAddress = root;
            ViewBag.OpenId = oauth.openid;
            ViewBag.TenantId = tenantId;
            ViewBag.ActivityId = activityId;
            ViewBag.JumpUrl = Url.Action("Activity");
            return View();
        }

        /// 活动申请单
        /// </summary>
        /// <returns></returns>
        public IActionResult ActivityFromApply(bool check,string openId)
        {
            var tenantId = GetTenantId();
            openId = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            var user = _weChatUserAppService.GetWeChatUserAsync(openId, tenantId).Result;
            var result =  _activityFormAppService.GetActivityFormList(check,user,tenantId); 
            if (check) {
                ViewBag.activityTitle = "未完结办事用烟列表";
            }
            else {
                ViewBag.activityTitle = "已完结办事用烟列表";
            }
            result.OpenId = openId;
            return View(result);
        }

        /// <summary>
        /// 活动申请单详细
        /// </summary>
        /// <param name="entity">活动申请单实体</param>
        /// <param name="openId">openId</param>
        /// <returns></returns>
        public IActionResult ActivityFromApplyDetail(Guid id,string openId)
        {
            var entity = _activityFormAppService.GetSingleFormDto(id);
            openId = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            var tenantId = GetTenantId();
            var user = _weChatUserAppService.GetWeChatUserAsync(openId, tenantId).Result;
            //var ids = entity.MapTo<EntityDto<Guid>>();
            EntityDto<Guid> ids=new EntityDto<Guid>{ Id= entity.Id};
            var banquent =_activityBanquetAppService.GetActivityBanquetByFormIdAsync(ids).Result;
            var deliveryList = _activityDeliveryInfoAppService.GetActivityDeliveryInfoByFormIdAsync(ids).Result;
            ActivityDeliveryInfoListDto delivery = new ActivityDeliveryInfoListDto();
            if (deliveryList!= null)
            {
                foreach (var item in deliveryList)
                {
                    if (item.Type == DeliveryUserTypeEnum.推荐人)
                    {
                        delivery = item;
                    }
                }
            }
            ViewBag.BanquentId = banquent== null ? Guid.Empty : banquent.Id;
            ViewBag.DeliveryId = delivery == null ? Guid.Empty : delivery.Id;
            ViewBag.UserType = user.UserType;
            ViewBag.OpenId = openId;
            ViewBag.TenantId = tenantId;
            var root = _appConfiguration["App:ServerRootAddress"];
            ViewBag.ServerRootAddress = root;
            return View(entity);
        }

        /// <summary>   
        /// 活动宴席
        /// </summary>
        /// <returns></returns>
        public IActionResult ActivityBanquet(string actFormId, int? actFormStatus, string openid, int? userType)
        {
            //actId = "E6200916-552A-44A4-FFD4-08D59A3C0EB3";
            //actFormId = "73DF4187-AF25-422D-5601-08D59EB66341";
            //openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            //actFormStatus = 2;
            //userType = 2;
            var tenantId = GetTenantId();
            //var user = _weChatUserAppService.GetWeChatUserAsync(openid, tenantId).Result;
            var activityBanquet = _activityBanquetAppService.GetActivityBanquetWeChatByFormIdAsync(Guid.Parse(actFormId), tenantId).Result;
            if (activityBanquet == null)
            {
                activityBanquet = new ActivityBanquets.Dtos.ActivityBanquetWeChatDto();
            }
            var url = Request.GetAbsoluteUri();
            var jsApiConfig = JSSDKHelper.GetJsSdkUiPackageAsync(WechatAppConfig.AppId, WechatAppConfig.AppSecret, url).Result;
            ViewBag.OpenId = openid;
            ViewBag.TenantId = tenantId;
            ViewBag.ActivityFormId = actFormId;
            ViewBag.UserType = userType;
            ViewBag.ActivityFormStatus = actFormStatus;
            var root = _appConfiguration["App:ServerRootAddress"];
            ViewBag.ServerRootAddress = root; 
            
            ActivityBanquetModel model = new ActivityBanquetModel();
            model.JsSdkApiConfig = jsApiConfig;
            model.BanquetWeChat = activityBanquet;
            return View(model);
        }
        /// <summary>
        /// 商品修改页面
        /// </summary>
        /// <param name="id">活动申请单id</param>
        /// <returns></returns>
        public IActionResult ActivityGoods(Guid id)
        {
            var entity = _activityFormAppService.GetSingleFormDto(id);
            var goodsList = _activityGoodsAppService.GetActivityGoodsByActivityId(entity.ActivityId).Result;
            ViewBag.GoodsList = goodsList;
            return View();
        }

        /// <summary>
        /// 取消，初审通过
        /// </summary>
        /// <param name="input">状态，审批意见，申请单id</param>
        /// <param name="openId">openId</param>
        /// <returns></returns>
        public IActionResult SaveStatus(ActivityFormStatusDto input,string openId )
        {
            var tenantId = GetTenantId();
            var user = _weChatUserAppService.GetWeChatUserAsync(openId, tenantId).Result;

            return View();
        }
    }
}