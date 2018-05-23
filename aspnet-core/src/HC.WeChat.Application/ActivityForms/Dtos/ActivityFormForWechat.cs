using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.ActivityForms.Dtos
{
  public  class ActivityFormForWechat
  {
        public ActivityFormForWechat()
        {
            ActivityFormListDtos = new List<ActivityFormListDto>();
            ActivityFormSendOutList = new List<ActivityFormListDto>();
            ActivityFormNoSendList = new List<ActivityFormListDto>();
        }
        /// <summary>
        /// 活动申请单列表
        /// </summary>
        public List<ActivityFormListDto> ActivityFormListDtos { get; set; }

        public List<ActivityFormListDto> ActivityFormSendOutList { get; set; }

        public List<ActivityFormListDto> ActivityFormNoSendList { get; set; }

        /// <summary>
        ///单数
        /// </summary>
        public int Count { get; set; }
        /// <summary>
        /// OpenId
        /// </summary>
        public string OpenId { get; set; }
    }
}
