using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Vouchers.Api
{
    [Route("api/[controller]")]
    public class VouchersController : Controller
    {
        private VouchersDBContext ctx;

        public VouchersController(VouchersDBContext context)
        {
            ctx = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Voucher> Get()
        {
            var vouchers = ctx.Vouchers.OrderByDescending(v => v.Date).ToList();
            return vouchers;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Voucher Get(int id)
        {
            return ctx.Vouchers.Include(f=>f.Details).FirstOrDefault(v => v.ID == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Voucher value)
        {
            ctx.Vouchers.Add(value);
            ctx.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Voucher value)
        {
            var v = Get(id);
            if (v != null)
            {
                Mapper.CopyData(value,v);
                ctx.SaveChanges();
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var v = Get(id);
            if (v!=null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
        }
    }
}
