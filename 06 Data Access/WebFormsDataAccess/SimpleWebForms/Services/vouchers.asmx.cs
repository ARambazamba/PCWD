using System;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using SimpleWebForms.Models;

namespace SimpleWebForms
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    public class VoucherService : WebService
    {
        [WebMethod]
        public string GetVouchers()
        {
            using (VouchersDBEntitiesLocalDB ctx = new VouchersDBEntitiesLocalDB())
            {
                ctx.Configuration.ProxyCreationEnabled = false;
                var vouchers =  ctx.Vouchers.OrderByDescending(v => v.Date).ToList();
                var serializer = new JavaScriptSerializer { MaxJsonLength = Int32.MaxValue, RecursionLimit = 1024 };
                return serializer.Serialize(vouchers);
            }
        }
    }
}
