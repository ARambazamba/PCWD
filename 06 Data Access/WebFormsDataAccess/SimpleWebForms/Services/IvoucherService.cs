using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using SimpleWebForms.Models;

namespace SimpleWebForms.Services
{
    [ServiceContract]
    public interface IVoucherService
    {
        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json, UriTemplate = "vouchers")]
        List<Voucher> GetVouchers();

        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json, UriTemplate = "voucher/{Id}")]
        Voucher GetVoucher(int Id);

        [OperationContract]
        [WebInvoke(Method ="PUT", ResponseFormat = WebMessageFormat.Json, UriTemplate = "voucher/{Id}")]
        bool UpdateVoucher(Voucher v);

    }
}
