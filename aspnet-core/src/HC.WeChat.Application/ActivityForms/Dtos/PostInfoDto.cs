using Abp.Application.Services.Dto;
using HC.WeChat.ActivityDeliveryInfos.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.ActivityForms.Dtos
{
  public  class PostInfoDto:  ActivityDeliveryInfoListDto
    {
        /// <summary>
        /// 单号
        /// </summary>
        public string FormCode { get; set; }
        /// <summary>
        /// 区、县
        /// </summary>
        public string Area { get; set; }

        /// <summary>
        /// 申请商品规格 快照
        /// </summary>
        public string GoodsSpecification { get; set; }

        /// <summary>
        /// 申请数量（需要做最大最小限制）
        /// </summary>
        public int Num { get; set; }

        /// <summary>
        /// 活动申请单申请时间
        /// </summary>
        public DateTime ApplyTime { get; set; }

        /// <summary>
        /// 用户类型中文显示
        /// </summary>
        public string TypeName
        {
            get
            {
                return Type.ToString();
            }
        }
    }
}
