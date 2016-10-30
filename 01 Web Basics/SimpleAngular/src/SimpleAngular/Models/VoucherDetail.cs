using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VoucherEditor.Models
{
    public class VoucherDetail
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        public int VoucherID { get; set; }

        [ForeignKey("AccountID")]
        public Account  Account{ get; set; }

        public string DetailText { get; set; }

        public int DetailAmount { get; set; }

        public string Comment { get; set; }

    }
}