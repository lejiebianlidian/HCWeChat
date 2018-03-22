using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HC.WeChat.WechatMessages
{
    /// <summary>
    /// 微信消息处理
    /// </summary>
    [Table("WechatMessages")]
    public class WechatMessage : Entity<Guid>, IAudited, IMustHaveTenant
    {

        /// <summary>
        /// 关键字
        /// </summary>
        [Required]
        [StringLength(50)]
        public string KeyWord { get; set; }

        /// <summary>
        /// 匹配模式（枚举 精准匹配、模糊匹配）
        /// </summary>
        [Required]
        public int MatchMode { get; set; }

        /// <summary>
        /// 消息类型（枚举 文字消息、图文消息）
        /// </summary>
        [Required]
        public int MsgType { get; set; }

        /// <summary>
        /// 回复内容
        /// </summary>
        [Required]
        public string Content { get; set; }

        /// <summary>
        /// 租户ID
        /// </summary>
        [Required]
        public int TenantId { get; set; }

        /// <summary>
        /// CreationTime
        /// </summary>
        [Required]
        public DateTime CreationTime { get; set; }

        /// <summary>
        /// CreatorUserId
        /// </summary>
        public long? CreatorUserId { get; set; }

        /// <summary>
        /// LastModificationTime
        /// </summary>
        public DateTime? LastModificationTime { get; set; }

        /// <summary>
        /// LastModifierUserId
        /// </summary>
        public long? LastModifierUserId { get; set; }
    }
}
