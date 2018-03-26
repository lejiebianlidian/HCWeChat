using System;
using Abp.Application.Services.Dto;
using HC.WeChat.ActivityDeliveryInfos.Dtos.LTMAutoMapper;
using HC.WeChat.ActivityDeliveryInfos;

namespace HC.WeChat.ActivityDeliveryInfos.Dtos
{
    public class ActivityDeliveryInfoListDto : EntityDto<Guid>
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public Guid ActivityFormId { get; set; }
        public string UserName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
    }
}