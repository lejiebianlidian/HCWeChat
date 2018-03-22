using System;
using Abp.Application.Services.Dto;
using HC.WeChat.WechatSubscribes.Dtos.LTMAutoMapper;
using HC.WeChat.WechatSubscribes;

namespace HC.WeChat.WechatSubscribes.Dtos
{
    public class WechatSubscribeListDto : EntityDto<Guid>
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public int MsgType { get; set; }
        public string Content { get; set; }
        public int TenantId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? LastModifierUserId { get; set; }
    }
}