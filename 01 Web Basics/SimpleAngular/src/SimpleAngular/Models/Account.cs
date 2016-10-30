using System.ComponentModel.DataAnnotations.Schema;

namespace VoucherEditor.Models
{
    public class Account
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        public string Name { get; set; } 

        public bool Expense { get; set; }

    }
}
