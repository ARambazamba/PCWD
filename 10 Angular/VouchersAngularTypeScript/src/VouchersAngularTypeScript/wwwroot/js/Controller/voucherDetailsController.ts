module voucherAppTS.Controllers {

    export interface IVoucherDetailsScope extends ng.IScope {
        VVM: IVoucherDetailsViewModel;
        showVouchers();
        saveVoucher(voucher);
        editDetail(detail: IVoucherDetail),
        newDetail: () => void;
        deleteDetail: (detail: IVoucherDetail) => void;
        saveVoucherDetail: (detail: IVoucherDetail) => void;
    }

    interface IVoucherRouteParams extends ng.route.IRouteParamsService {
        ID: number;
    }

    export class VoucherDetailsController {
        constructor(private $scope: IVoucherDetailsScope,
            private $location: ng.ILocaleService,
            private $routeParams: IVoucherRouteParams,
            private $resource: ng.resource.IResourceService,
            private $route: ng.route.IRouteService,
            private $http: ng.IHttpService,
            private vs: Services.VoucherService) {
            
            $http.get('/api/vouchers/vm/' + this.$routeParams.ID).success(
                (data: IVoucherDetailsViewModel, status) => $scope.VVM = data
            );

            $scope.showVouchers = () => {
                location.assign("#/vouchers");
            }

            $scope.saveVoucher = function(voucher) {
                $http.post('/api/vouchers/', voucher).success(
                    (data, status) => this.scope.VVM.CurrentVoucher.ID = data
                );
            }

            $scope.editDetail = (detail: IVoucherDetail) => {
                $scope.VVM.EditDetail = detail;
            }

            $scope.newDetail = () => {
                $scope.VVM.EditDetail = {
                    "ID": 0, "VoucherID": $scope.VVM.CurrentVoucher.ID, "Account": null,
                    "AccountID": 0, "Text": "", "Amount": 0, "Comment": null
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