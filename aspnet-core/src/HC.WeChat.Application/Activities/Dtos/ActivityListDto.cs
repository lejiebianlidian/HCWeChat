using System;
using Abp.Application.Services.Dto;
using HC.WeChat.Activities.Dtos.LTMAutoMapper;
using HC.WeChat.Activities;

namespace HC.WeChat.Activities.Dtos
{
    public class ActivityListDto : EntityDto
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public string Name { get; set; }
        public DateTime BeginTime { get; set; }
        public DateTime EndTime { get; set; }
        public int ActivityType { get; set; }
        public string Content { get; set; }
        public int? MUnfinished { get; set; }
        public int? RUnfinished { get; set; }
        public int? TenantId { get; set; }
        public DateTime? PublishTime { get; set; }
        public WechatEnums.ActivityStatusEnum Status { get; set; }
        public string StatusName {
            get {
                return Status.ToString();
            }
        }
    }
}