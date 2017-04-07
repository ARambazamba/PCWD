using System;
using System.Collections.Generic;

namespace DBFirst.Models
{
    public partial class VoucherDetails
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public int Amount { get; set; }
        public string Comment { get; set; }
        public string Text { get; set; }
        public int Vatrate { get; set; }
        public int VoucherId { get; set; }

        public virtual BalanceAccounts Account { get; set; }
        public virtual Vouchers Voucher { get; set; }
    }
}
