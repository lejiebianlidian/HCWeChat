using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using HC.WeChat.ActivityDeliveryInfos;

namespace HC.WeChat.ActivityDeliveryInfos.Dtos
{
    public class CreateOrUpdateActivityDeliveryInfoInput
{
////BCC/ BEGIN CUSTOM CODE SECTION
////ECC/ END CUSTOM CODE SECTION
        [Required]
        public ActivityDeliveryInfoEditDto ActivityDeliveryInfo { get; set; }

}
}