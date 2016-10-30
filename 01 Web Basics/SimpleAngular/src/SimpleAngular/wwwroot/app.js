(function () {
    var voucherApp = angular.module('voucherApp', ['ngRoute']);

    voucherApp.config(function ($routeProvider) {
    $routeProvider
    .when('/home', { controller: 'mainController', templateUrl: "/views/home.html" })
    .when('/vouchers', { controller: 'voucherController', templateUrl: "/views/voucher.html" })
    .otherwise({ redirectTo: '/home' });
    });

    voucherApp.controller('mainController', function ($scope) {
        // create a message to display in our home view
        $scope.startText = 'Welcome to the AngularJS Vouchers Web!';
    });

    voucherApp.controller('voucherController', function ($scope) {
    // create some sample vouchers
    $scope.vouchers = [
        { ID: 1, Date: '01.01.2016', Amount: 100, Text: 'Schreibwaren', Paid: false },
        { ID: 2, Date: '02.01.2016', Amount: 56, Text: 'Diesel', Paid: false },
        { ID: 3, Date: '02.01.2016', Amount: 1267, Text: 'Laptop', Paid: true }];
});

    voucherApp.service('voucherService'), function($scope) {
    var vouchers = [
        { ID: 1, Date: '01.01.2016', Amount: 100, Text: 'Schreibwaren', Paid: false },
        { ID: 2, Date: '02.01.2016', Amount: 56, Text: 'Diesel', Paid: false },
        { ID: 3, Date: '02.01.2016', Amount: 1267, Text: 'Laptop', Paid: true }];

    this.getVouchers = function() {
        return vouchers;
    };
}

})()