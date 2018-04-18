using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using HC.WeChat.ActivityDeliveryInfos.Dtos;
using HC.WeChat.WechatEnums;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.ActivityForms.Dtos
{
  public  class PostInfoDto
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
        public DateTime ApplyTime { get { return CreationTime;  } }

        public DateTime CreationTime { get; set; }

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
        public Guid Id { get; set; }
        public Guid ActivityFormId { get; set; }
        public string UserName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        /// <summary>
        /// 收货人类型（枚举：消费者、推荐人）
        /// </summary>
        public DeliveryUserTypeEnum? Type { get; set; }
        /// <summary>
        /// 发件时间
        /// </summary>
        public DateTime? SendTime { get; set; }
        public bool IsSend { get; set; }
    }
    [AutoMapFrom(typeof(PostInfoDto))]
    public class PostInfoDtoToExcel : PostInfoDto
    {
        public Guid TId { get; set; }
        public string TUserName { get; set; }
        public string TPhone { get; set; }
        public string TAddress { get; set; }
        /// <summary>
        /// 收货人类型（推荐人）
        /// </summary>
        public DeliveryUserTypeEnum? TType { get; set; }
        public bool TIsSend { get; set; }
        public string TIsSendName { get { return TIsSend == true ? "是" : "否"; } }
        public string IsSendName { get { return IsSend == true ? "是" : "否"; } }

        //活动申请单信息
        public Guid ActivityId { get; set; }
        public Guid? RetailerId { get; set; }
        public Guid? ActivityGoodsId { get; set; }
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

        public string ActivityName { get; set; }

        public string RetailerName { get; set; }

        public string ManagerName { get; set; }

        public Guid? ManagerId { get; set; }

        public string CreationUser { get; set; }

        public Guid? CreationId { get; set; }

        public List<ActivityFormLogDto> FormLogList { get; set; }

        public int CurrentStep { get; set; }
    }

}
