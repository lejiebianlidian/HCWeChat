using HC.WeChat.ActivityBanquets.Dtos;
using Senparc.Weixin.MP.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.Models.WeChat
{
    public class ActivityBanquetModel
    {
        public JsSdkUiPackage JsSdkApiConfig { get; set; }

        public ActivityBanquetWeChatDto BanquetWeChat { get; set; }
    }
}
