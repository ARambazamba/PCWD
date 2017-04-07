﻿using System;
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
        private IVouchersRepository rep;

        public VouchersController(VouchersDBContext context, IVouchersRepository repository)
        {
            ctx = context;
            rep = repository;
        }

        // GET: http://localhost:8082/api/vouchers/getconstant
        //[HttpGet] -> Default
        [Route("getconstant")]
        public string GetConstant()
        {
            return "constant string";
        }
        
        // GET: http://localhost:8082/api/vouchers
        [HttpGet]
        public IEnumerable<Voucher> Get()
        {
            return rep.GetAllVouchers();
        }

        // GET: http://localhost:8082/api/vouchers/1
        [HttpGet("{id}")]
        public Voucher Get(int id)
        {
            //return ctx.Vouchers.Include(f => f.Details).FirstOrDefault(v => v.ID == id);
            return ctx.Vouchers.FirstOrDefault(v => v.ID == id);
        }

        // GET: http://localhost:8082/api/vouchers/getpaid/false
        [Route("GetPaid/{paid}")]
        public IEnumerable<Voucher> GetForVoucher(bool paid)
        {
            var vs = ctx.Vouchers.Where(v => v.Paid == paid).ToList();
            return vs;
        }

        // GET: http://localhost:8082/api/vouchers/GetVoucherViewModel/1
        [Route("GetVoucherViewModel/{id}")]
        public VoucherViewModel GetVoucherViewModel(int id)
        {
            VoucherViewModel result = new VoucherViewModel
            {
                CurrentVoucher = ctx.Vouchers.Include(f => f.Details).FirstOrDefault(f => f.ID == id),
                Accounts = ctx.BalanceAccounts.ToList()
            };
            return result;
        }

        // POST http://localhost:8082/api/vouchers
        // Insert
        [HttpPost]
        public void Post([FromBody]Voucher value)
        {
            ctx.Vouchers.Add(value);
            ctx.SaveChanges();
        }

        // PUT http://localhost:8082/api/vouchers
        // Update
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Voucher value)
        {
            var v = ctx.Vouchers.FirstOrDefault(f => f.ID == id);
            if (v != null)
            {
                Mapper.CopyData(value, v);
                //ctx.Vouchers.Add(value) -> not allowed by EF Change Tracking             
                ctx.SaveChanges();
            }
        }

        //Alternative approach using EntityState & Change-Tracking
        //public void Put(int id, [FromBody]Voucher value)
        //{
        //    var v = ctx.Vouchers.FirstOrDefault(f => f.ID == id);
        //    if (v != null)
        //    {
        //        ctx.Vouchers.Attach(value);
        //        ctx.Entry(value).State = EntityState.Modified;
        //        ctx.SaveChanges();
        //    }
        //}

        // DELETE http://localhost:8082/api/vouchers/1
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var v = Get(id);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
        }
    }
}
