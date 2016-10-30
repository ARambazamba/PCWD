using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using VoucherEditor.Common;

//using VoucherEditor.Common;
//using VoucherEditor.ViewModels;

namespace VoucherEditor.Models
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

        //public VoucherDetailsViewModel GetDetailsForVoucher(Int32 ID)
        //{
        //    VoucherDetailsViewModel result = new VoucherDetailsViewModel
        //    {
        //        CurrentVoucher = ctx.Vouchers.FirstOrDefault(f => f.ID == ID)
        //    };
        //    if (result.CurrentVoucher != null)
        //    {
        //        result.Details = ctx.VoucherDetails.Where(f => f.VoucherID == ID).ToList();
        //        if (result.Details.Any())
        //        {
        //            result.EditDetail = result.Details[0];
        //        }
        //        result.Accounts = ctx.Accounts.Where(f => f.Expense == result.CurrentVoucher.Expense).ToList();
        //    }
        //    return result;
        //}

        public VoucherDetail CreateVoucherDetail(VoucherDetail voucherDetail)
        {
            ctx.VoucherDetails.Add(voucherDetail);
            ctx.SaveChanges();
            return voucherDetail;
        }

        public VoucherDetail UpdateVoucherDetail(VoucherDetail voucherDetail)
        {
            //var v = ctx.VoucherDetails.FirstOrDefault(f => f.ID == voucherDetail.ID);
            //if (v != null)
            //{
                ctx.VoucherDetails.Attach(voucherDetail);
                ctx.Entry(voucherDetail).State = EntityState.Modified;
                ctx.SaveChanges();
            //}
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

        public T CreateItem<T>(T obj)
        {
            throw new NotImplementedException();
        }
    }
}
