using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab1.Model
{
    public class Asset
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public decimal Value { get; set; }
        public int Periodes { get; set; }
        public DateTime StartDate { get; set; }
    }
}
