using System;
using System.Collections.Generic;

namespace DBFirst.Models
{
    public partial class Vouchers
    {
        public Vouchers()
        {
            VoucherDetails = new HashSet<VoucherDetails>();
        }

        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public bool Expense { get; set; }
        public bool Paid { get; set; }
        public bool Remark { get; set; }
        public string Text { get; set; }

        public virtual ICollection<VoucherDetails> VoucherDetails { get; set; }
    }
}
