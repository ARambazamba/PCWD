module voucherAppTS.Controllers {

    export interface IVoucherDetailsScope extends ng.IScope {
        VVM: any;
        showVouchers();
        saveVoucher(voucher);
        editDetail(detail: any),
        newDetail: () => void;
        deleteDetail: (detail: any) => void;
        saveVoucherDetail: (detail: any) => void;
    }

    export class VoucherDetailsController {
        constructor(private $scope: IVoucherDetailsScope,
            private $location: ng.ILocaleService,
            private $routeParams: any,
            private $resource: any,
            private $route: any,
            private $http: ng.IHttpService,
            private vs: Services.VoucherService) {
            
            $http.get('/api/vouchers/vm/' + this.$routeParams.ID).success(
                (data, status) => $scope.VVM = data
            );

            $scope.showVouchers = () => {
                location.assign("#/vouchers");
            }

            $scope.saveVoucher = function(voucher) {
                $http.post('/api/vouchers/', voucher).success(
                    (data, status) => this.scope.VVM.CurrentVoucher.ID = data
                );
            }

            $scope.editDetail = (detail: any) => {
                $scope.VVM.EditDetail = detail;
            }

            $scope.newDetail = () => {
                $scope.VVM.EditDetail = {
                    "ID": 0, "VoucherID": $scope.VVM.CurrentVoucher.ID,
                    "AccountID": 0, "DetailText": "", "DetailAmount": 0, "Comment": null
                };
            }

            $scope.deleteDetail = detail => {
                var res = $resource("/api/VoucherDetails/" + detail.ID);
                res.delete(detail.ID);
                $route.reload();
            }

            $scope.saveVoucherDetail = detail => {
                var res = $resource("/api/VoucherDetails/");
                res.save(detail);
                $route.reload();
            }
        }        
    }

    VoucherDetailsController.$inject = ["$scope", "$location", "$routeParams", "$resource", "$route",
        "$http", "voucherService"];
    voucherApp.controller("voucherDetailsController", VoucherDetailsController);        
}