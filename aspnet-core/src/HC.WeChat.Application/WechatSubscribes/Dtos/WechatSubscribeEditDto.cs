using System.ComponentModel.DataAnnotations;
using HC.WeChat.WechatSubscribes.Dtos.LTMAutoMapper;
using HC.WeChat.WechatSubscribes;
using System;
using static HC.WeChat.Enum;

namespace HC.WeChat.WechatSubscribes.Dtos
{
    public class WechatSubscribeEditDto
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public Guid? Id { get; set; }

        /// <summary>
        /// 消息类型（枚举 文字消息、图文消息）
        /// </summary>
        [Required]
        public MsgTypeEnum MsgType { get; set; }


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

    }
}