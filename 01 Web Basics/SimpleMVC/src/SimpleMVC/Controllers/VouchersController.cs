using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SimpleMVC.Models;

namespace SimpleMVC.Controllers
{
    public class VouchersController : Controller
    {
        private List<Voucher> GetAllVouchers()
        {
            var vouchers = new List<Voucher>
            {
                new Voucher {ID = 1, Date = DateTime.Now.AddDays(-3), Amount = 100, Text = "Schreibwaren"},
                new Voucher {ID = 1, Date = DateTime.Now.AddDays(-2), Amount = 56, Text = "Diesel"},
                new Voucher {ID = 1, Date = DateTime.Now.AddDays(-1), Amount = 1267, Text = "Laptop"}
            };
            return vouchers;
        }

        public IActionResult Index()
        {
            var vouchers = GetAllVouchers();
            return View(vouchers);
        }
    }
}
