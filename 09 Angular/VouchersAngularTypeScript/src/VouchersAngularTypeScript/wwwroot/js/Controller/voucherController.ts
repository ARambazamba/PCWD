module voucherAppTS.Controllers {

    export interface IVoucherScope extends ng.IScope {
        showVoucher(voucher: IVoucher);
        newVoucher();
        vouchers: IVoucher[];
    }

    export class VoucherController {

        constructor(private $scope: IVoucherScope,
            private $location: ng.ILocaleService,
            private voucherService: Services.VoucherService) {

            //set scope data
            voucherService.getVoucherResource().query((data: IVoucher[]) => {
                $scope.vouchers = data;
            });

            //set the scope functions
            $scope.showVoucher = (voucher: IVoucher): void => {
                location.assign('#/vdetails/' + voucher.ID);
            }

            $scope.newVoucher = (): void => {
                location.assign('#/vdetails/0');
            }
        }  
    }

    VoucherController.$inject = ["$scope", "$location", "voucherService"];
    voucherApp.controller("voucherController", VoucherController);
}