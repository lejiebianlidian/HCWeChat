using System.ComponentModel.DataAnnotations;
using HC.WeChat.ActivityDeliveryInfos.Dtos.LTMAutoMapper;
using HC.WeChat.ActivityDeliveryInfos;
using System;

namespace HC.WeChat.ActivityDeliveryInfos.Dtos
{
    public class ActivityDeliveryInfoEditDto
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public Guid? Id { get; set; }

        /// <summary>
        /// 外键 申请表单Id
        /// </summary>
        [Required]
        public Guid ActivityFormId { get; set; }


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