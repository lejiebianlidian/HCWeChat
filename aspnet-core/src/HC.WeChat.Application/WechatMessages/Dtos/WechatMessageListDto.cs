using System;
using Abp.Application.Services.Dto;
using HC.WeChat.WechatMessages.Dtos.LTMAutoMapper;
using HC.WeChat.WechatMessages;

namespace HC.WeChat.WechatMessages.Dtos
{
    public class WechatMessageListDto : EntityDto<Guid>
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public string KeyWord { get; set; }
        public int MatchMode { get; set; }
        public int MsgType { get; set; }
        public string Content { get; set; }
        public int TenantId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
    }
}