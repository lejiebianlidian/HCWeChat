using HC.WeChat.ActivityBanquets.Dtos;
using HC.WeChat.ActivityDeliveryInfos.Dtos;
using HC.WeChat.ActivityForms.Dtos;
using HC.WeChat.WeChatUsers.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.Models.WeChat
{
    public class ActivityFromDetailModel
    {
        /// <summary>
        /// 表单信息
        /// </summary>
        public ActivityFormListDto ActivityForm { get; set; }
        /// <summary>
        /// 用户信息
        /// </summary>
        public WeChatUserListDto WeChatUser { get; set; }
        /// <summary>
        /// 宴席信息
        /// </summary>
        public ActivityBanquetListDto Banquet { get; set; }
        /// <summary>
        /// 用户邮寄信息
        /// </summary>
        public ActivityDeliveryInfoListDto UserDelivery { get; set; }
        /// <summary>
        /// 推荐人信息
        /// </summary>
        public ActivityDeliveryInfoListDto RefereeDelivery { get; set; }

        public bool IsApproval { get; set; }

        public string[] PhotoUrls { get; set; }

        public void SetPhotoUrl(string host)
        {
            if (Banquet != null && !string.IsNullOrEmpty(Banquet.PhotoUrl))
            {
                PhotoUrls = Banquet.PhotoUrl.Split(',');
                for (int i = 0; i < PhotoUrls.Length; i++)
                {
                    PhotoUrls[i] = host + PhotoUrls[i].Substring(0, PhotoUrls[i].IndexOf(';'));
                }
            }
        }
    }
}
