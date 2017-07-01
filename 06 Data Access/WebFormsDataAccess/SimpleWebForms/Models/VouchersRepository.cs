using SimpleWebForms.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimpleWebForms.Models
{
    public class VouchersRepository
    {
        //Vouchers

        public static List<Voucher> GetVouchers()
        {
            using (VouchersDBEntitiesLocalDB ctx = new VouchersDBEntitiesLocalDB())
            {
                return ctx.Vouchers.OrderByDescending(v => v.Date).ToList();
            }
        }

        public static Voucher GetVoucher(Guid ID)
        {
            using (VouchersDBEntitiesLocalDB ctx = new VouchersDBEntitiesLocalDB())
            {
                return ctx.Vouchers.FirstOrDefault(v => v.ID == ID);
            }
        }

        //Voucher Details

        public static List<VoucherDetail> GetVoucherDetails(Guid ID)
        {
            using (VouchersDBEntitiesLocalDB ctx = new VouchersDBEntitiesLocalDB())
            {
                return ctx.VoucherDetails.Where(v => v.VoucherID == ID).ToList();
            }
        }

        public static VoucherDetail GetVoucherDetail(Guid ID)
        {
            using (VouchersDBEntitiesLocalDB ctx = new VouchersDBEntitiesLocalDB())
            {
                return ctx.VoucherDetails.FirstOrDefault(v => v.ID == ID);
            }
        }

        public static void AddDetail(VoucherDetail Item)
        {
            using (VouchersDBEntitiesLocalDB ctx = new VouchersDBEntitiesLocalDB())
            {
                ctx.VoucherDetails.Add(Item);
                ctx.SaveChanges();
            }
        }

        public static void RemoveDetail(VoucherDetail Item)
        {
            using (VouchersDBEntitiesLocalDB ctx = new VouchersDBEntitiesLocalDB())
            {
                var d = ctx.VoucherDetails.FirstOrDefault(vd => vd.ID == Item.ID);
                ctx.VoucherDetails.Remove(d);
                ctx.SaveChanges();
            }
        }        
    }
}