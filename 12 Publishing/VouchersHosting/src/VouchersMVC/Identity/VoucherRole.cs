using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Vouchers
{
    public class VoucherRole : IdentityRole
    {
        public string Description { get; set; }
    }
}