var voucherAppTS;
(function (voucherAppTS) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope) {
                this.$scope = $scope;
                $scope.startText = 'Welcome to the AngularJS & TypeScript Vouchers Web!';
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        voucherAppTS.voucherApp.controller("homeController", HomeController);
    })(Controllers = voucherAppTS.Controllers || (voucherAppTS.Controllers = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=mainController.js.map