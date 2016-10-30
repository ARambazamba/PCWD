using System;
using System.Collections.Generic;
//using VoucherEditor.ViewModels;

namespace VoucherEditor.Models
{
    public interface IVouchersRepository
    {
        IEnumerable<Voucher> GetAllVouchers();
        //VoucherDetailsViewModel GetDetailsForVoucher(Int32 ID);
        Voucher CreateVoucher(Voucher currentVoucher);
        Voucher UpdateVoucher(Voucher currentVoucher);
        void DeleteVoucher(int ID);
        VoucherDetail CreateVoucherDetail(VoucherDetail voucherDetail);
        VoucherDetail UpdateVoucherDetail(VoucherDetail voucherDetail);
        void DeleteVoucherDetail(int ID);
        T CreateItem<T>(T obj);

    }
}