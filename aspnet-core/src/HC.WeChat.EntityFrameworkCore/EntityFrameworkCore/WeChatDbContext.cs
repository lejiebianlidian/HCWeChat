using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using HC.WeChat.Authorization.Roles;
using HC.WeChat.Authorization.Users;
using HC.WeChat.MultiTenancy;
using HC.WeChat.WechatAppConfigs;
using HC.WeChat.WechatMessages;
using HC.WeChat.WechatSubscribes;

namespace HC.WeChat.EntityFrameworkCore
{
    public class WeChatDbContext : AbpZeroDbContext<Tenant, Role, User, WeChatDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public WeChatDbContext(DbContextOptions<WeChatDbContext> options)
            : base(options)
        {
        }


        public virtual DbSet<WechatAppConfig> WechatAppConfigs { get; set; }

        public virtual DbSet<WechatMessage> WechatMessages { get; set; }

        public virtual DbSet<WechatSubscribe> WechatSubscribes { get; set; }

    }
}
