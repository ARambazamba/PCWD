var voucherAppTS;
(function (voucherAppTS) {
    var Controllers;
    (function (Controllers) {
        var VoucherController = (function () {
            function VoucherController($scope, $location, $http, voucherService) {
                this.$scope = $scope;
                this.$location = $location;
                this.$http = $http;
                this.voucherService = voucherService;
                //set scope data
                var vRes = voucherService.getVoucherResource();
                vRes.query(function (data) {
                    $scope.vouchers = data;
                });
                //set the scope functions
                $scope.showVoucher = function (voucher) {
                    location.assign('#/vdetails/' + voucher.ID);
                };
                $scope.newVoucher = function () {
                    location.assign('#/vdetails/0');
                };
            }
            return VoucherController;
        }());
        Controllers.VoucherController = VoucherController;
        VoucherController.$inject = ["$scope", "$location", "$http", "voucherService"];
        voucherAppTS.voucherApp.controller("voucherController", VoucherController);
    })(Controllers = voucherAppTS.Controllers || (voucherAppTS.Controllers = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=voucherController.js.map