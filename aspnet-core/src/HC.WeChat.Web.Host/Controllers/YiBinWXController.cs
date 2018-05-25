using System;
using System.Linq;
using Abp.Authorization;
using HC.WeChat.Activities;
using HC.WeChat.ActivityGoodses;
using HC.WeChat.Authorization.WeChatOAuth;
using HC.WeChat.Configuration;
using HC.WeChat.Controllers;
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
using HC.WeChat.ActivityBanquets;
using HC.WeChat.ActivityDeliveryInfos;
using Senparc.Weixin.MP.Helpers;
using Microsoft.AspNetCore.Http;
using HC.WeChat.ActivityFormLogs;
using Abp.Application.Services.Dto;

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
        IActivityDeliveryInfoAppService _activityDeliveryInfoAppService;
        IActivityFormLogAppService _activityFormLogAppService;

        private string UserOpenId
        {
            get
            {
                if (HttpContext.Session.GetString("UserOpenId") == null)
                {
                    return string.Empty;
                }
                return HttpContext.Session.GetString("UserOpenId");
            }
            set
            {
                value = value ?? string.Empty;
                HttpContext.Session.SetString("UserOpenId", value);
            }
        }

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
           IActivityFormLogAppService activityFormLogAppService,
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
            _activityFormLogAppService = activityFormLogAppService;
        }

        protected override int? GetTenantId()
        {
            return tenantId;
        }

        private void SetUserOpenId(string code)
        {
            if (string.IsNullOrEmpty(code))
            {
                return;
            }
            //如果userId为null 则需要通过code重新获取
            if (string.IsNullOrEmpty(UserOpenId))
            {
                try
                {
                    var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
                    UserOpenId = oauth.openid;
                }
                catch (Exception ex)
                {
                    Logger.ErrorFormat("GetAccessTokenAsync Exception:{0}", ex.Message);
                }
                //UserOpenId = code;
            }
        }

        /// <summary>
        /// 用户绑定
        /// </summary>
        public IActionResult BindUser(string code, string state)
        {
            //Logger.InfoFormat("code:{0} state:{1}", code, state);
            //var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
            UserOpenId = "o5Cto1SDboPrAwY9UyCTktFVpKBc";//客户经理
            //UserOpenId = "o5Cto1d1Vv-s-ytAZyCkWBQRvsBo";//零售客户

            //存储openId 避免重复提交
            SetUserOpenId(code);

            var tenantId = GetTenantId();
            //var openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            var user = _weChatUserAppService.GetWeChatUserAsync(UserOpenId, tenantId).Result;
            if (user == null)
            {
                user = new WeChatUserListDto();
            }
            //var wuser = _weChatOAuthAppService.GetUserInfoAsync(oauth.access_token, oauth.openid).Result;
            user.NickName = user.NickName;
            //user.HeadImgUrl = wuser.headimgurl;
            if (user.UserType == UserTypeEnum.零售客户 || user.UserType == UserTypeEnum.公司员工)
            {
                var formCount = _activityFormAppService.GetActivityFormCountByUserAsync(user).Result;
                //ViewBag.OutstandingCount = formCount.OutstandingCount;
                //ViewBag.CompletedCount = formCount.CompletedCount;
                ViewBag.FormCount = formCount.TotalCount;
                ViewBag.UserLevel = formCount.UserLevel;
                ViewBag.PendingCount = formCount.PendingCount;
                user.HeadImgUrl = user.HeadImgUrl ?? "static/img/index/timg-4.jpeg";
                return View("UserIndex", user);
            }

            ViewBag.NickName = user.NickName;
            ViewBag.OpenId = UserOpenId;
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
            var user = _wechatuserRepository.GetAll().Where(r => r.TenantId == AbpSession.TenantId).FirstOrDefault();
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
            //var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
            //var openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            //存储openId 避免重复提交
            SetUserOpenId(code);

            ViewBag.OpenId = UserOpenId;
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
            //var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
            //var openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            //存储openId 避免重复提交
            SetUserOpenId(code);

            ViewBag.OpenId = UserOpenId;
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
            //state = "BD752041-8734-4CDC-CA88-08D599656A10";
            //UserOpenId = "o5Cto1SDboPrAwY9UyCTktFVpKBc";
            //UserOpenId = "o5Cto1d1Vv-s-ytAZyCkWBQRvsBo";//零售客户

            var activityId = Guid.Parse(state);
            //var oauth = _weChatOAuthAppService.GetAccessTokenAsync(code).Result;
            //存储openId 避免重复提交
            SetUserOpenId(code);

            var tenantId = GetTenantId();
            //var user = _weChatUserAppService.GetWeChatUserAsync(oauth.openid, tenantId).Result;
            //var openid = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            var user = _weChatUserAppService.GetWeChatUserAsync(UserOpenId, tenantId).Result;
            ViewBag.UserType = (int)user.UserType;
            var root = _appConfiguration["App:ServerRootAddress"];
            var url = root + "/YiBinWX/BindUser";
            ViewBag.Url = _weChatOAuthAppService.GetAuthorizeUrl(url, tenantId.ToString(), Senparc.Weixin.MP.OAuthScope.snsapi_base);
            var goodsList = _activityGoodsAppService.GetActivityGoodsByActivityId(activityId).Result;
            ViewBag.GoodsList = goodsList;
            ViewBag.ServerRootAddress = root;
            ViewBag.OpenId = UserOpenId;
            ViewBag.TenantId = tenantId;
            ViewBag.ActivityId = activityId;
            ViewBag.JumpUrl = Url.Action("Activity");
            //简化流程追加信息 2018-5-23
            var jsApiConfig = JSSDKHelper.GetJsSdkUiPackageAsync(WechatAppConfig.AppId, WechatAppConfig.AppSecret, url).Result;
            ActivityBanquetModel model = new ActivityBanquetModel();
            model.JsSdkApiConfig = jsApiConfig;
            return View(model);
        }

        /// 活动申请单
        /// </summary>
        /// <returns></returns>
        public IActionResult ActivityFromApply(bool check, string openId)
        {
            var tenantId = GetTenantId();
            //openId = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            var result = _activityFormAppService.GetActivityFormList(check, openId, tenantId).Result;
            result.OpenId = openId;
            return View(result);
        }

        /// <summary>
        /// 待审核活动申请
        /// </summary>
        public IActionResult ActivityFromPendingApply(string openId)
        {
            var tenantId = GetTenantId();
            var result = new ActivityFromModel();
            result.ActivityFormList = _activityFormAppService.GetActivityFormPendingList(openId, tenantId).Result;
            result.OpenId = openId;
            return View(result);
        }

        /// <summary>
        /// 活动申请单详细
        /// </summary>
        public IActionResult ActivityFromApplyDetail(Guid id, string openId)
        {
            var entity = _activityFormAppService.GetSingleFormDto(id);
            //openId = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            var tenantId = GetTenantId();
            var user = _weChatUserAppService.GetWeChatUserAsync(openId, tenantId).Result;
            var banquent = _activityBanquetAppService.GetActivityBanquetByFormIdWechatAsync(entity.Id).Result;
            var formLog = _activityFormLogAppService.GetActivityFormLogByFormIdAsync(entity.Id).Result;
            if (formLog == null)
            {
                ViewBag.CompleteTime = null;
            }
            else
            {
                ViewBag.CompleteTime = formLog.ActionTime.ToString("yyyy-MM-dd");
            }
            ViewBag.IsBanquent = banquent == null ? false : true;
            //ViewBag.DeliveryId = delivery == null ? Guid.Empty : delivery.Id;
            ViewBag.UserType = (int)user.UserType;
            ViewBag.Status = (int)entity.Status;
            ViewBag.OpenId = openId;
            ViewBag.TenantId = tenantId;
            var root = _appConfiguration["App:ServerRootAddress"];
            ViewBag.ServerRootAddress = root;
            return View(entity);
        }

        /// <summary>
        /// v1.2 活动详情 流程简化修改 2018-5-25
        /// </summary>
        public IActionResult ActivityFromDetail(Guid id, string openId, bool isApproval = false)
        {
            ActivityFromDetailModel fromDetail = new ActivityFromDetailModel();
            fromDetail.ActivityForm = _activityFormAppService.GetSingleFormDto(id);
            var tenantId = GetTenantId();
            fromDetail.WeChatUser = _weChatUserAppService.GetWeChatUserAsync(openId, tenantId).Result;
            fromDetail.Banquet = _activityBanquetAppService.GetActivityBanquetByFormIdWechatAsync(id).Result;
            var deliveryList = _activityDeliveryInfoAppService.GetActivityDeliveryInfoByFormIdAsync(new EntityDto<Guid>() { Id = id }).Result;
            fromDetail.UserDelivery = deliveryList.Where(d => d.Type == DeliveryUserTypeEnum.消费者).FirstOrDefault();
            fromDetail.RefereeDelivery = deliveryList.Where(d => d.Type == DeliveryUserTypeEnum.推荐人).FirstOrDefault();
            fromDetail.IsApproval = isApproval;
            var root = _appConfiguration["App:ServerRootAddress"];
            ViewBag.ServerRootAddress = root;
            fromDetail.SetPhotoUrl(root);
            return View(fromDetail);
        }

        /// <summary>   
        /// 活动宴席
        /// </summary>
        /// <returns></returns>
        public IActionResult ActivityBanquet(string actFormId, int? actFormStatus, string openid, int? userType)
        {
            //actFormId = "E6200916-552A-44A4-FFD4-08D59A3C0EB3";
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

        public IActionResult Authorization(AuthorizationPageEnum page, string type)
        {
            var host = _appConfiguration["App:ServerRootAddress"];
            //UserOpenId = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            switch (page)
            {
                case AuthorizationPageEnum.BindUser:
                    {
                        if (!string.IsNullOrEmpty(UserOpenId))//如果userOpenId 不为空 直接跳转
                        {
                            return RedirectToAction("BindUser");
                        }
                        var url = host + "/YiBinWX/BindUser";
                        ViewBag.PageUrl = _weChatOAuthAppService.GetAuthorizeUrl(url, "123", Senparc.Weixin.MP.OAuthScope.snsapi_base);
                    }
                    break;
                case AuthorizationPageEnum.Question:
                    {
                        if (!string.IsNullOrEmpty(UserOpenId))//如果userOpenId 不为空 直接跳转
                        {
                            return RedirectToAction("Question");
                        }
                        var url = host + "/YiBinWX/Question";
                        ViewBag.PageUrl = _weChatOAuthAppService.GetAuthorizeUrl(url, "123", Senparc.Weixin.MP.OAuthScope.snsapi_base);
                    }
                    break;
                case AuthorizationPageEnum.AdviseBack:
                    {
                        if (!string.IsNullOrEmpty(UserOpenId))//如果userOpenId 不为空 直接跳转
                        {
                            return RedirectToAction("AdviseBack");
                        }
                        var url = host + "/YiBinWX/AdviseBack";
                        ViewBag.PageUrl = _weChatOAuthAppService.GetAuthorizeUrl(url, "123", Senparc.Weixin.MP.OAuthScope.snsapi_base);
                    }
                    break;
                case AuthorizationPageEnum.FileDownload:
                    {
                        if (!string.IsNullOrEmpty(UserOpenId))//如果userOpenId 不为空 直接跳转
                        {
                            return RedirectToAction("FileDownload", new { state = type });
                        }
                        var url = host + "/YiBinWX/FileDownload";
                        ViewBag.PageUrl = _weChatOAuthAppService.GetAuthorizeUrl(url, type, Senparc.Weixin.MP.OAuthScope.snsapi_base);
                    }
                    break;
                default:
                    break;
            }
            return View();
        }

        public IActionResult FileDownload(string code, string state)
        {
            //UserOpenId = "C9E6F8A3-6A08-418A-A258-0ABCBEC17573";
            //存储openId 避免重复提交
            SetUserOpenId(code);
            var tenantId = GetTenantId();
            var user = _weChatUserAppService.GetWeChatUserAsync(UserOpenId, tenantId).Result;
            var root = _appConfiguration["App:ServerRootAddress"];
            if (state == "1")//货源公布 零售客户 和 营销人员
            {
                if (user.UserType != UserTypeEnum.公司员工 && user.UserType != UserTypeEnum.零售客户)
                {
                    return View("NoAuthority");
                }

                ViewBag.FileUrl = root + "/upload/files/货源公布.xlsx";
            }
            else if (state == "2")//投放方式 营销人员
            {
                if (user.UserType != UserTypeEnum.公司员工)
                {
                    return View("NoAuthority");
                }

                ViewBag.FileUrl = root + "/upload/files/投放方式.xlsx";
            }
            else if (state == "3")//进度查询 营销人员
            {
                if (user.UserType != UserTypeEnum.公司员工)
                {
                    return View("NoAuthority");
                }
                ViewBag.ImgUrl1 = root + "/upload/files/progress-total.jpg";
                ViewBag.ImgUrl2 = root + "/upload/files/progress-profit.jpg";
                ViewBag.ImgUrl3 = root + "/upload/files/progress-three.jpg";
            }
            else
            {
                return View("NoAuthority");
            }
            ViewBag.FileType = state;
            return View();
        }
    }

    public enum AuthorizationPageEnum
    {
        BindUser = 1,
        Question = 2,
        AdviseBack = 3,
        FileDownload = 4
    }


}