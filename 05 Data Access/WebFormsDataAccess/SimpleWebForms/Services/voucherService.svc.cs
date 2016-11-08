using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Web.Script.Serialization;
using SimpleWebForms.Models;

namespace SimpleWebForms.Services
{
    public class voucherService : IVoucherService
    {
        public List<Voucher> GetVouchers()
        {
            using (VouchersDBEntitiesLocalDB ctx = new VouchersDBEntitiesLocalDB())
            {
                return ctx.Vouchers.OrderByDescending(v => v.Date).ToList();
            }
        }

        public Voucher GetVoucher(int Id)
        {
            throw new NotImplementedException();
        }

        public bool UpdateVoucher(Voucher v)
        {
            throw new NotImplementedException();
        }
    }
}
