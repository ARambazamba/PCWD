using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace VoucherEditor.Models
{
    public class VouchersDBContext : DbContext
    {
        private readonly IConfigurationRoot config;

        public VouchersDBContext(IConfigurationRoot cfg)
        {
            config = cfg;
        }
        
        public DbSet<Voucher> Vouchers { get; set; }
        public DbSet<VoucherDetail> VoucherDetails { get; set; }
        public DbSet<Account> Accounts { get; set; }
    

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string conStr = config["Data:DefaultConnection:ConnectionString"];
            optionsBuilder.UseSqlServer(conStr);
            base.OnConfiguring(optionsBuilder);
        }
    }    
}
