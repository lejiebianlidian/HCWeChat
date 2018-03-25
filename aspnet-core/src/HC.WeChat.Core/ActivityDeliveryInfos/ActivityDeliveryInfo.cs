using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HC.WeChat.ActivityDeliveryInfos
{
    /// <summary>
    /// 活动收货信息
    /// </summary>
    [Table("ActivityDeliveryInfos")]
    public class ActivityDeliveryInfo : Entity<Guid>
    {

        /// <summary>
        /// 外键 申请表单Id
        /// </summary>
        [Required]
        public virtual Guid ActivityFormId { get; set; }

        /// <summary>
        /// 邮件消费者用户名
        /// </summary>
        [Required]
        [StringLength(50)]
        public string UserName { get; set; }

        /// <summary>
        /// 邮件消费者电话
        /// </summary>
        [Required]
        [StringLength(20)]
        public string Phone { get; set; }

        /// <summary>
        /// 邮件消费者地址
        /// </summary>
        [Required]
        [StringLength(500)]
        public string Address { get; set; }
    }
}
