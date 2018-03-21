using Abp.WeChat.Senparc.MessageHandlers;
using Senparc.Weixin.MP.Entities;
using Senparc.Weixin.MP.Entities.Request;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace HC.WeChat.MessageHandler
{
    public class HCMessageHandler : AbpMessageHandler
    {
        public HCMessageHandler(Stream inputStream, PostModel postModel, int maxRecordCount = 0) : base(inputStream, postModel, maxRecordCount)
        {

        }

        public override void ConfigurationMessageInfo(RequestMessageText requestMessage)
        {
            MessageInfo = new AbpMessageInfo();
            if (requestMessage.ToUserName == "gh_d0a6ae751285")
            {
                MessageInfo.SubscribeMsg = "欢迎关注订阅号";
                MessageInfo.KeyWords = new Dictionary<string, string>();
                MessageInfo.KeyWords.Add("默认", "来自订阅号");
            }
            else
            {
                MessageInfo.SubscribeMsg = "欢迎测试号";
                MessageInfo.KeyWords = new Dictionary<string, string>();
                MessageInfo.KeyWords.Add("默认", "来自测试号");
            }
        }

        public override void Unsubscribe(RequestMessageEvent_Unsubscribe requestMessage)
        {
            //throw new NotImplementedException();
        }
    }
}
