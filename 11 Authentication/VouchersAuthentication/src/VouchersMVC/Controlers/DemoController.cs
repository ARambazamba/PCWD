using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Vouchers
{
    public class Demo : Controller
    {
        private IVouchersRepository rep;

        private VouchersDbContext ctx;

        public Demo(IVouchersRepository repository)
        {
            rep = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult SubmitDemo()
        {
            var model = rep.GetVoucher(2);
            return View(model);
        }

        [HttpPost]
        public IActionResult SubmitDemo(VoucherDetailsViewModel v)
        {
            return SubmitDemo();
        }

        public async Task<IActionResult> AsyncDemo()
        {
            var model = await ctx.Vouchers.Where(f => f.ID == 2).ToListAsync();
            return View(model);
        }
    }
}
