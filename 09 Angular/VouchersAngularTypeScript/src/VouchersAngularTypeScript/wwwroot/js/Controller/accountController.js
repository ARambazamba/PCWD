var voucherAppTS;
(function (voucherAppTS) {
    var Controllers;
    (function (Controllers) {
        var AccountController = (function () {
            function AccountController($scope, accountService) {
                this.$scope = $scope;
                accountService.getAcctResource().query(function (data) {
                    $scope.accounts = data;
                });
            }
            return AccountController;
        }());
        Controllers.AccountController = AccountController;
        AccountController.$inject = ["$scope", "accountService"];
        voucherAppTS.voucherApp.controller("accountController", AccountController);
    })(Controllers = voucherAppTS.Controllers || (voucherAppTS.Controllers = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=accountController.js.map