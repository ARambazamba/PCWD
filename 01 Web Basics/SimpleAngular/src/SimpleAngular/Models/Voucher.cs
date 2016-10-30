using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VoucherEditor.Models
{
    public class Voucher
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        public string Text { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd.MM.YYYY}")]
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }
        
        public int Amount { get; set; }

        public bool Paid { get; set; }

        public bool Expense { get; set; }

        public ICollection<VoucherDetail> Details { get; set; }
    }
}
