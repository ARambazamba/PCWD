using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Vouchers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private VouchersDBContext ctx;
        public AccountsController(VouchersDBContext context)
        {
            ctx = context;
        }

        [HttpGet]
        public IEnumerable<BalanceAccount> Get()
        {
            return ctx.BalanceAccounts.ToList();
        }
    }
}
