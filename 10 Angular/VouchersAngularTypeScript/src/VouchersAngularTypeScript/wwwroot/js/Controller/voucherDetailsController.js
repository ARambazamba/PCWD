var voucherAppTS;
(function (voucherAppTS) {
    var Controllers;
    (function (Controllers) {
        var VoucherDetailsController = (function () {
            function VoucherDetailsController($scope, $location, $routeParams, $resource, $route, $http, vs) {
                this.$scope = $scope;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.$resource = $resource;
                this.$route = $route;
                this.$http = $http;
                this.vs = vs;
                $http.get('/api/vouchers/vm/' + this.$routeParams.ID).success(function (data, status) { return $scope.VVM = data; });
                $scope.showVouchers = function () {
                    location.assign("#/vouchers");
                };
                $scope.saveVoucher = function (voucher) {
                    var _this = this;
                    $http.post('/api/vouchers/', voucher).success(function (data, status) { return _this.scope.VVM.CurrentVoucher.ID = data; });
                };
                $scope.editDetail = function (detail) {
                    $scope.VVM.EditDetail = detail;
                };
                $scope.newDetail = function () {
                    $scope.VVM.EditDetail = {
                        "ID": 0, "VoucherID": $scope.VVM.CurrentVoucher.ID,
                        "AccountID": 0, "DetailText": "", "DetailAmount": 0, "Comment": null
                    };
                };
                $scope.deleteDetail = function (detail) {
                    var res = $resource("/api/VoucherDetails/" + detail.ID);
                    res.delete(detail.ID);
                    $route.reload();
                };
                $scope.saveVoucherDetail = function (detail) {
                    var res = $resource("/api/VoucherDetails/");
                    res.save(detail);
                    $route.reload();
                };
            }
            return VoucherDetailsController;
        }());
        Controllers.VoucherDetailsController = VoucherDetailsController;
        VoucherDetailsController.$inject = ["$scope", "$location", "$routeParams", "$resource", "$route",
            "$http", "voucherService"];
        voucherAppTS.voucherApp.controller("voucherDetailsController", VoucherDetailsController);
    })(Controllers = voucherAppTS.Controllers || (voucherAppTS.Controllers = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=voucherDetailsController.js.map