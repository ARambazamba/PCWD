using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Vouchers
{
    public class VoucherController : Controller
    {
        private IVouchersRepository rep;

        public VoucherController(IVouchersRepository repository)
        {
            rep = repository;
        }

        public IActionResult Index()
        {
            var model = rep.GetAllVouchers();
            return View(model);            
        }
        
        //Voucher Details
        public IActionResult Edit(int Id)
        {
            var model = rep.GetVoucher(Id);
            return View(model);
        }

        [HttpPost]
        public IActionResult Edit(int Id, VoucherDetailsViewModel value, string ActionBtn)
        {
            int redirectID = Id;
            if (ModelState.IsValid)
            {
                switch (ActionBtn)
                {
                    case "Save Voucher":
                        var vouch = value.CurrentVoucher;
                        if (VoucherValidator.Validate(vouch, rep.GetDetailsForVoucher(vouch.ID)))
                        {
                            if (value.CurrentVoucher.ID == 0)
                            {
                                rep.CreateVoucher(value.CurrentVoucher);
                            }
                            else
                            {
                                rep.UpdateVoucher(value.CurrentVoucher);
                            }
                        }
                        else
                        {
                            ModelState.AddModelError("VoucherSumError", "The sum of the voucher does not correspond to its details");
                        }
                        break;
                    case "Save Detail":
                        if (value.EditDetail != null)
                        {
                            var vd = value.EditDetail;
                            vd.VoucherID = value.CurrentVoucher.ID;
                            if (vd.ID == 0)
                            {
                                rep.CreateVoucherDetail(vd);
                            }
                            else
                            {
                                rep.UpdateVoucherDetail(vd);
                            }
                        }
                        break;
                }
            }

            return RedirectToAction("Edit", new { id = redirectID });
        }

        public IActionResult DeleteDetail(int DetailID, int VoucherID)
        {
            rep.DeleteVoucherDetail(DetailID);
            return RedirectToAction("Edit", "Voucher", new { Id = VoucherID});
        }
    }
}
