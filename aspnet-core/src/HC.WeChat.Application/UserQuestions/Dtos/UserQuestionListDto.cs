using System;
using Abp.Application.Services.Dto;
using HC.WeChat.UserQuestions.Dtos.LTMAutoMapper;
using HC.WeChat.UserQuestions;

namespace HC.WeChat.UserQuestions.Dtos
{
    public class UserQuestionListDto : EntityDto<Guid>
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string OpenId { get; set; }
        public int? TenantId { get; set; }
        public DateTime CreationTime { get; set; }
    }
}