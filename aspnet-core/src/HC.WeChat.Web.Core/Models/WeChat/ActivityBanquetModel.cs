using HC.WeChat.ActivityBanquets.Dtos;
using Senparc.Weixin.MP.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.Models.WeChat
{
    public class ActivityBanquetModel
    {
        private string host { get; set; }
        public JsSdkUiPackage JsSdkApiConfig { get; set; }

        public ActivityBanquetWeChatDto BanquetWeChat { get; set; }

        public List<string> PhotoUrls
        {
            get
            {
                if (BanquetWeChat != null && BanquetWeChat.PhotoUrl != null)
                {

                }
                return new List<string>();
            }
        }
    }
}
