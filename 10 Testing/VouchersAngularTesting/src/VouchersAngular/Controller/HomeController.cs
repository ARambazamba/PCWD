using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using NLog;
using NLog.Fluent;

namespace Vouchers
{
    public class HomeController : Controller
    {
        private VouchersConfig config { get; set; }
        private static Logger Logger = LogManager.GetCurrentClassLogger();
        public HomeController(IOptions<VouchersConfig> cfg)
        {
            config = cfg.Value;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            ViewBag.AppName = config.ApplicationName;
            return View();
        }
    }
}
