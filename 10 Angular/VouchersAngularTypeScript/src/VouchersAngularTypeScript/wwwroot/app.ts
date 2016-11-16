module voucherAppTS {

    export var voucherApp = angular.module('voucherApp', ['ngRoute', 'ngResource']);

    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {            
            $routeProvider
                .when('/home', { controller: 'mainController', templateUrl: "views/home.html" })
                .when('/vouchers', { controller: 'voucherController', templateUrl: "views/vouchers.html" })
                .when('/vdetails/:ID', { controller: 'voucherDetailsController', templateUrl: "views/voucherDetails.html" })
                .when('/statistics', { controller: 'statisticsController', templateUrl: "views/statistics.html" })
                .when('/accounts', { controller: 'accountController', templateUrl: "views/accounts.html" })
                .otherwise({ redirectTo: '/home' });
        }
    }
    Config.$inject = ['$routeProvider'];
    voucherApp.config(Config);
}