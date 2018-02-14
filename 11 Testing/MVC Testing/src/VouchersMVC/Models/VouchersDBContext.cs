using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Vouchers
{
    public class VouchersDBContext : DbContext
    {
        private VouchersConfig config;

        public VouchersDBContext(DbContextOptions<VouchersDBContext> options) : base(options)
        {
        }

        public DbSet<Voucher> Vouchers { get; set; }
        public DbSet<VoucherDetail> VoucherDetails { get; set; }
        public DbSet<BalanceAccount> BalanceAccounts { get; set; }
    }
}
