using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vouchers
{
    public class VouchersConfig
    {
        public ConnectionStrings ConnectionStrings { get; set; }
        public string ApplicationName { get; set; }
    }

    public class ConnectionStrings
    {
        public string LocalDBConnection { get; set; }
        public string SQLServerDBConnection { get; set; }
    }    
}
