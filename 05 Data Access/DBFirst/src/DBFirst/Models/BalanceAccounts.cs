using System;
using System.Collections.Generic;

namespace DBFirst.Models
{
    public partial class BalanceAccounts
    {
        public BalanceAccounts()
        {
            VoucherDetails = new HashSet<VoucherDetails>();
        }

        public int Id { get; set; }
        public bool Expense { get; set; }
        public string Name { get; set; }

        public virtual ICollection<VoucherDetails> VoucherDetails { get; set; }
    }
}
