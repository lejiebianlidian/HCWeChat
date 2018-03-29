using System;
using Abp.Application.Services.Dto;
using HC.WeChat.ActivityForms.Dtos.LTMAutoMapper;
using HC.WeChat.ActivityForms;
using HC.WeChat.WechatEnums;

namespace HC.WeChat.ActivityForms.Dtos
{
    public class ActivityFormListDto : EntityDto<Guid>
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public string FormCode { get; set; }
        public Guid ActivityId { get; set; }
        public Guid RetailerId { get; set; }
        public Guid ActivityGoodsId { get; set; }
        public string GoodsSpecification { get; set; }
        public int Num { get; set; }
        public string Reason { get; set; }
        public FormStatusEnum Status { get; set; }

        public string StatusName
        {
            get
            {
                return Status.ToString();
            }
        }

        public DateTime CreationTime { get; set; }

        public string ActivityName { get; set; }

        public string RetailerName { get; set; }

        public string ManagerName { get; set; }
    }
}