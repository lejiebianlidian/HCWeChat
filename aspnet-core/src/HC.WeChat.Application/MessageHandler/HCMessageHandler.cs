using Abp.Domain.Repositories;
using Abp.WeChat.Senparc.MessageHandlers;
using HC.WeChat.WechatAppConfigs;
using HC.WeChat.WechatMessages;
using HC.WeChat.WechatSubscribes;
using Senparc.Weixin.MP.Entities;
using Senparc.Weixin.MP.Entities.Request;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace HC.WeChat.MessageHandler
{
    public class HCMessageHandler : AbpMessageHandler
    {
        private readonly IRepository<WechatMessage, Guid> _wechatmessageRepository;
        private readonly IRepository<WechatSubscribe, Guid> _wechatsubscribeRepository;
        private int? _tenantId = 0;

        public HCMessageHandler(IRepository<WechatMessage, Guid> wechatmessageRepository, 
            IRepository<WechatSubscribe, Guid> wechatsubscribeRepository,
            int? tenantId, Stream inputStream, 
            PostModel postModel, 
            int maxRecordCount = 0) : base(inputStream, postModel, maxRecordCount)
        {
            _wechatmessageRepository = wechatmessageRepository;
            _wechatsubscribeRepository = wechatsubscribeRepository;
            _tenantId = tenantId;
        }

        private WechatSubscribe GetWechatSubscribe()
        {
            return _wechatsubscribeRepository.GetAll().Where(w => w.TenantId == _tenantId).FirstOrDefault();
        }

        private List<WechatMessage> GetWechatMessageList()
        {
            //先处理文字消息
            return _wechatmessageRepository.GetAll().Where(w => w.TenantId == _tenantId && w.MsgType == WechatEnums.MsgTypeEnum.文字消息).ToList();
        }

        public override void ConfigurationMessageInfo(RequestMessageText requestMessage)
        {
            MessageInfo = new AbpMessageInfo();
            MessageInfo.KeyWords = new Dictionary<string, string>();
            var keyWordList = GetWechatMessageList();
            if (keyWordList.Count > 0)
            {
                MessageInfo.KeyWords = keyWordList.ToDictionary(key => key.KeyWord, value => value.Content);
            }

            var sinfo = GetWechatSubscribe();
            if (sinfo != null)
            {
                switch (sinfo.MsgType)
                {
                    case WechatEnums.MsgTypeEnum.文字消息:
                        {
                            MessageInfo.SubscribeMsg = sinfo.Content;
                        }
                        break;
                    case WechatEnums.MsgTypeEnum.图文消息:
                        break;
                    default:
                        break;
                }
                
            }

            //if (requestMessage.ToUserName == "gh_d0a6ae751285")
            //{
            //    MessageInfo.SubscribeMsg = "欢迎关注订阅号";
            //    MessageInfo.KeyWords = new Dictionary<string, string>();
            //    MessageInfo.KeyWords.Add("默认", "来自订阅号");
            //}
            //else
            //{
            //    MessageInfo.SubscribeMsg = "欢迎测试号";
            //    MessageInfo.KeyWords = new Dictionary<string, string>();
            //    MessageInfo.KeyWords.Add("默认", "来自测试号");
            //}
        }

        public override void Unsubscribe(RequestMessageEvent_Unsubscribe requestMessage)
        {
            //throw new NotImplementedException();
        }

    }
}
