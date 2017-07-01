using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Vouchers.Controller.Api
{
    [Route("api/[controller]")]
    public class KPIController : Microsoft.AspNetCore.Mvc.Controller
    {
        private VouchersDBContext ctx;
        public KPIController(VouchersDBContext context)
        {
            ctx = context;
        }
        
        [HttpGet]
        [Route("GetStatistics")]
        public object Get()
        {
            var data = (from v in ctx.Vouchers
                group v by new {v.Expense, v.Date.Year, v.Date.Month}
                into grp
                select new {grp.Key.Year, grp.Key.Month, grp.Key.Expense, Summe= grp.Sum(f=>f.Amount)}).ToList();
            return data;
        }        
    }
}
