using Abp.Runtime.Validation;
using HC.WeChat.Dto;
using HC.WeChat.ActivityForms;
using System;
using HC.WeChat.WechatEnums;

namespace HC.WeChat.ActivityForms.Dtos
{
    public class GetActivityFormsInput : PagedAndSortedInputDto, IShouldNormalize
    {
        /// <summary>
        /// 模糊搜索使用的关键字
        /// </summary>
        public string Filter { get; set; }

        public string FormCode { get; set; }

        public DateTime? BeginDate { get; set; }

        public DateTime? EndDate { get; set; }

        public DateTime? EndDateOne
        {
            get
            {
                if (EndDate.HasValue)
                {
                    return EndDate.Value.AddDays(1);
                }
                return EndDate;
            }
        }

        public FormStatusEnum? Status { get; set; }

        /// <summary>
        /// 正常化排序使用
        /// </summary>
        public void Normalize()
        {
            if (string.IsNullOrEmpty(Sorting))
            {
                Sorting = "CreationTime Desc";
            }
        }
    }

    public class GetActivityViewInput : PagedAndSortedInputDto, IShouldNormalize
    {
        /// <summary>
        /// 区县
        /// </summary>
        public string Area { get; set; }

        /// <summary>
        /// 商品规格
        /// </summary>
        public string GoodsSpecification { get; set; }

        /// <summary>
        /// 客户经理
        /// </summary>
        public string ManagerName { get; set; }

        public DateTime? BeginDate { get; set; }

        public DateTime? EndDate { get; set; }

        public DateTime? EndDateOne
        {
            get
            {
                if (EndDate.HasValue)
                {
                    return EndDate.Value.AddDays(1);
                }
                return EndDate;
            }
        }

        /// <summary>
        /// 正常化排序使用
        /// </summary>
        public void Normalize()
        {
            if (string.IsNullOrEmpty(Sorting))
            {
                Sorting = "Area";
            }
        }
    }
}
