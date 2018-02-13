using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Vouchers.Controller.Api
{
    [Route("api/[controller]")]
    public class AuthApiController : Microsoft.AspNetCore.Mvc.Controller
    {
        [HttpGet]
        [Route("getWinUser")]
        public string Get()
        {
            return HttpContext.User.Identity is WindowsIdentity identity
                ? identity.Name
                : "Not Authenticated";
        }
    }
}
