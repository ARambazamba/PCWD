var voucherAppTS;
(function (voucherAppTS) {
    var Controllers;
    (function (Controllers) {
        var MainController = (function () {
            function MainController($scope) {
                this.scope = $scope;
                this.scope.startText = 'Welcome to the AngularJS & TypeScript Vouchers Web!';
            }
            return MainController;
        }());
        Controllers.MainController = MainController;
        voucherAppTS.voucherApp.controller("mainController", MainController);
    })(Controllers = voucherAppTS.Controllers || (voucherAppTS.Controllers = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=mainController.js.map