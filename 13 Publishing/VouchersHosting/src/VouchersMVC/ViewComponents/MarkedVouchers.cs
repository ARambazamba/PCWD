using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Vouchers
{
    public class MarkedVouchers : ViewComponent
    {
        private readonly VouchersDBContext ctx;

        public MarkedVouchers(VouchersDBContext db)
        {
            ctx = db;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var model = await ctx.Vouchers.Where(f => f.Remark).ToListAsync();
            return View("Default", model);
        }
    }
}