var voucherAppTS;
(function (voucherAppTS) {
    voucherAppTS.voucherApp = angular.module('voucherApp', ['ngRoute', 'ngResource']);
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider
                .when('/home', { controller: 'mainController', templateUrl: "views/home.html" })
                .when('/vouchers', { controller: 'voucherController', templateUrl: "views/vouchers.html" })
                .when('/vdetails/:ID', { controller: 'voucherDetailsController', templateUrl: "views/vdetails.html" })
                .when('/statistics', { controller: 'statisticsController', templateUrl: "views/statistics.html" })
                .when('/accounts', { controller: 'accountController', templateUrl: "views/accounts.html" })
                .otherwise({ redirectTo: '/home' });
        }
        return Config;
    }());
    voucherAppTS.Config = Config;
    Config.$inject = ['$routeProvider'];
    voucherAppTS.voucherApp.config(Config);
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=app.js.map