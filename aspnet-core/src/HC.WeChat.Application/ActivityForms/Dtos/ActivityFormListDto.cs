using System;
using Abp.Application.Services.Dto;
using HC.WeChat.ActivityForms.Dtos.LTMAutoMapper;
using HC.WeChat.ActivityForms;
using HC.WeChat.WechatEnums;

namespace HC.WeChat.ActivityForms.Dtos
{
    public class ActivityFormListDto : EntityDto<Guid>
    {
        public string FormCode { get; set; }
        public Guid ActivityId { get; set; }
        public Guid? RetailerId { get; set; }
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

        public string StatusType
        {
            get
            {
                switch (Status)
                {
                    case FormStatusEnum.提交申请:
                        return "error";
                    case FormStatusEnum.初审通过:
                        return "processing";
                    case FormStatusEnum.拒绝:
                        return "default";
                    case FormStatusEnum.资料回传已审核:
                        return "success";
                    case FormStatusEnum.营销中心已审核:
                        return "success";
                    case FormStatusEnum.取消:
                        return "default";
                    default: return "default";
                }
            }
        }

        public DateTime CreationTime { get; set; }

        public string ActivityName { get; set; }

        public string RetailerName { get; set; }

        public string ManagerName { get; set; }

        public string CreationUser { get; set; }
    }
}