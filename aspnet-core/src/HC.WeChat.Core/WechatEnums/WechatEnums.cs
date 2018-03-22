using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.WechatEnums
{
    public enum MsgTypeEnum
    {
        文字消息 = 1,
        图文消息 = 2
    }
    /// <summary>
    /// 匹配模式
    /// </summary>
    public enum MatchModeEnum
    {
        精准匹配 = 1,
        模糊匹配 = 2
    }
    /// <summary>
    /// 微信类型
    /// </summary>
    public enum AppTypeEnum
    {
        订阅号 = 1,
        认证订阅号 = 2,
        服务号,
        认证服务号
    }
}
