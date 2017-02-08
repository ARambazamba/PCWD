using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Vouchers
{
    public class HomeController : Controller
    {
        private readonly UserManager<VoucherUser> userManager;

        public HomeController(UserManager<VoucherUser> userManager)
        {
            this.userManager = userManager;
        }

        //[Authorize]
        public IActionResult Index()
        {
            VoucherUser user = userManager.GetUserAsync(HttpContext.User).Result;

            return View();
        }
    }
}
