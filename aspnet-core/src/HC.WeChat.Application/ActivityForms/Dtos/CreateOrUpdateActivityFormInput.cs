using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using HC.WeChat.ActivityForms;

namespace HC.WeChat.ActivityForms.Dtos
{
    public class CreateOrUpdateActivityFormInput
{
////BCC/ BEGIN CUSTOM CODE SECTION
////ECC/ END CUSTOM CODE SECTION
        [Required]
        public ActivityFormEditDto ActivityForm { get; set; }

}
}