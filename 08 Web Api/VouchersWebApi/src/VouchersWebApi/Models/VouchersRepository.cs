using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Vouchers
{
    public class VouchersRepository : IVouchersRepository
    {
        private VouchersDBContext ctx;
        private ILogger<VouchersRepository> logger;

        public VouchersRepository(VouchersDBContext context, ILogger<VouchersRepository> lg)
        {
            ctx = context;
            logger = lg;
        }

        //Voucher

        public IEnumerable<Voucher> GetAllVouchers()
        {
            var vouchers = ctx.Vouchers.OrderByDescending(v => v.Date).ToList();
            logger.LogInformation("GetAllVouchers vouchers was executed");
            return vouchers;
        }

        public IEnumerable<Voucher> GetMarkedVouchers()
        {
            return ctx.Vouchers.Where(v => v.Remark).ToList();
        }


        public Voucher CreateVoucher(Voucher voucher)
        {
            ctx.Vouchers.Add(voucher);
            ctx.SaveChanges();
            return voucher;
        }

        public Voucher UpdateVoucher(Voucher voucher)
        {
            var v = ctx.Vouchers.FirstOrDefault(f => f.ID == voucher.ID);
            if (v != null)
            {
                Mapper.CopyData(voucher, v);
                ctx.SaveChanges();
            }
            return v;
        }

        public void DeleteVoucher(int ID)
        {
            var v = ctx.Vouchers.FirstOrDefault(f => f.ID == ID);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
        }

        //Details

        public VoucherViewModel GetVoucher(int ID)
        {
            VoucherViewModel result = new VoucherViewModel
            {
                CurrentVoucher = ID == 0 ? new Voucher() : ctx.Vouchers.Include(v => v.Details).FirstOrDefault(f => f.ID == ID),
                Accounts = ctx.BalanceAccounts.ToList()
            };
            return result;
        }

        public VoucherDetail CreateVoucherDetail(VoucherDetail voucherDetail)
        {
            ctx.VoucherDetails.Attach(voucherDetail);
            ctx.Entry(voucherDetail).State = EntityState.Added;
            ctx.SaveChanges();
            return voucherDetail;
        }

        public VoucherDetail UpdateVoucherDetail(VoucherDetail voucherDetail)
        {
            ctx.VoucherDetails.Attach(voucherDetail);
            ctx.Entry(voucherDetail).State = EntityState.Modified;
            ctx.SaveChanges();
            return voucherDetail;
        }

        public void DeleteVoucherDetail(int ID)
        {
            var v = ctx.VoucherDetails.FirstOrDefault(f => f.ID == ID);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
        }
    }
}
