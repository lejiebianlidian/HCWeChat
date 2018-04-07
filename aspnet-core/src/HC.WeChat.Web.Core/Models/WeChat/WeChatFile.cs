﻿using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.Models.WeChat
{
    public class WeChatFile
    {
        /// <summary>
        ///  文件唯一标识
        /// </summary>
        public string Uid { get; set; }
        /// <summary>
        /// 文件名
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 状态有：uploading done error removed
        /// </summary>
        public string Status { get; set; }

        public string Url { get; set; }

        public string ThumbUrl { get; set; }
    }
}
