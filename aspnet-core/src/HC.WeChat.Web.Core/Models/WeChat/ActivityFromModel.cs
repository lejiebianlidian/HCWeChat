using HC.WeChat.ActivityForms.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.Models.WeChat
{
    public class ActivityFromModel
    {
        public List<ActivityFormListDto> ActivityFormList { get; set; }

        public string OpenId { get; set; }
    }
}
