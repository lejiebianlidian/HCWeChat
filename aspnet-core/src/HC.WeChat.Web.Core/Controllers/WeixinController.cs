using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Senparc.Weixin.Entities;
using Senparc.Weixin.MP;
using Senparc.Weixin.MP.Entities.Request;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Senparc.Weixin.MP.MvcExtension;
using Senparc.Weixin;
using Newtonsoft.Json.Linq;
using HC.WeChat.MessageHandler;
using HC.WeChat.Web;

namespace HC.WeChat.Controllers
{
    [Route("[controller]/[action]")]
    public class WeixinController : WeChatControllerBase
    {
        readonly Func<string> _getRandomFileName = () => DateTime.Now.ToString("yyyyMMdd-HHmmss") + Guid.NewGuid().ToString("n").Substring(0, 6);

        private string appId;
        private string appSecret;
        private string token;
        private string encodingAESKey;

        SenparcWeixinSetting _senparcWeixinSetting;
        IMessageHandlerAppServer _messageHandlerAppServer;

        public WeixinController(IOptions<SenparcWeixinSetting> senparcWeixinSetting, IMessageHandlerAppServer messageHandlerAppServer)
        {
            _senparcWeixinSetting = senparcWeixinSetting.Value;
            appId = _senparcWeixinSetting.WeixinAppId;
            appSecret = _senparcWeixinSetting.WeixinAppSecret;
            token = _senparcWeixinSetting.Token;
            encodingAESKey = _senparcWeixinSetting.EncodingAESKey;
            _messageHandlerAppServer = messageHandlerAppServer;
        }

        /// <summary>
        /// 微信后台验证地址（使用Get），微信后台的“接口配置信息”的Url填写如：http://sdk.weixin.senparc.com/weixin
        /// </summary>
        [HttpGet]
        [ActionName("Index")]
        public ActionResult Get(PostModel postModel, string echostr)
        {
            //Logger.Info("get:" + JObject.FromObject(postModel).ToString() + "token:" + token);
            if (CheckSignature.Check(postModel.Signature, postModel.Timestamp, postModel.Nonce, token))
            {
                return Content(echostr); //返回随机字符串则表示验证通过
            }
            else
            {
                return Content("failed:" + postModel.Signature + "," + Senparc.Weixin.MP.CheckSignature.GetSignature(postModel.Timestamp, postModel.Nonce, token) + "。" +
                    "如果你在浏览器中看到这句话，说明此地址可以被作为微信公众账号后台的Url，请注意保持Token一致。");
            }
        }

        /// <summary>
        /// 用户发送消息后，微信平台自动Post一个请求到这里，并等待响应XML。
        /// PS：此方法为简化方法，效果与OldPost一致。
        /// v0.8之后的版本可以结合Senparc.Weixin.MP.MvcExtension扩展包，使用WeixinResult，见MiniPost方法。
        /// </summary>
        [HttpPost]
        [ActionName("Index")]
        public ActionResult Post(PostModel postModel)
        {
            //Logger.Info("post:" + JObject.FromObject(postModel).ToString() + "token:" + token);
            if (!CheckSignature.Check(postModel.Signature, postModel.Timestamp, postModel.Nonce, token))
            {
                return Content("参数错误！");
            }

            #region 打包 PostModel 信息

            postModel.Token = token;//根据自己后台的设置保持一致
            postModel.EncodingAESKey = encodingAESKey;//根据自己后台的设置保持一致
            postModel.AppId = appId;//根据自己后台的设置保持一致

            #endregion

            var tenantId = 2;

            var returnMsg = _messageHandlerAppServer.MessageHandler(postModel, Request.Body, tenantId).Result;
            return Content(returnMsg);
        }
    }
}
