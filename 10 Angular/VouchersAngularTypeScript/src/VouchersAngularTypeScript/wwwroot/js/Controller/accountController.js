var voucherAppTS;
(function (voucherAppTS) {
    var Controllers;
    (function (Controllers) {
        var AccountController = (function () {
            function AccountController($scope, accountService) {
                var _this = this;
                this.scope = $scope;
                var acctRes = accountService.getAcctResource();
                acctRes.query(function (data) {
                    _this.scope.Accounts = data;
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