using System.ComponentModel.DataAnnotations;
using HC.WeChat.ActivityForms.Dtos.LTMAutoMapper;
using HC.WeChat.ActivityForms;
using System;
using HC.WeChat.WechatEnums;

namespace HC.WeChat.ActivityForms.Dtos
{
    public class ActivityFormEditDto
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public Guid? Id { get; set; }

        /// <summary>
        /// 申请单号（系统自动生成AF+算法规则）唯一
        /// </summary>
        [Required]
        [StringLength(50)]
        public string FormCode { get; set; }


        /// <summary>
        /// 活动Id，外键
        /// </summary>
        [Required]
        public Guid ActivityId { get; set; }


        /// <summary>
        /// 零售户Id， 外键
        /// </summary>
        [Required]
        public Guid RetailerId { get; set; }


        /// <summary>
        /// 申请商品Id，外键
        /// </summary>
        [Required]
        public Guid ActivityGoodsId { get; set; }


        /// <summary>
        /// 申请商品规格 快照
        /// </summary>
        [Required]
        [StringLength(200)]
        public string GoodsSpecification { get; set; }


        /// <summary>
        /// 申请数量（需要做最大最小限制）
        /// </summary>
        [Required]
        public int Num { get; set; }


        /// <summary>
        /// 申请理由
        /// </summary>
        [Required]
        public string Reason { get; set; }


        /// <summary>
        /// 审批状态（枚举 提交申请（不可更改）、
        /// 初审通过（营销中心邮寄消费者奖励，办事完成可回传照片完善资料）、
        /// 最终状态（拒绝、取消（申请人才可取消）、
        /// 完成/审核通过（完善资料审核通过，可邮寄推荐人奖励））
        /// </summary>
        [Required]
        public FormStatusEnum Status { get; set; }


        /// <summary>
        /// 创建时间
        /// </summary>
        [Required]
        public DateTime CreationTime { get; set; }
    }
}