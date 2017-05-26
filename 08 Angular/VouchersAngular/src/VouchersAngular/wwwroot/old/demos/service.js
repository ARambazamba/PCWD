var app = angular.module('app', []);

var srv = function ($http) {
    this.getVouchers = function () {
        return $http.get("/api/vouchers");
    };

    //preperation code

    return {
        getVouchers: this.getVouchers
    };
}
srv.$inject = ['$http'];
app.service('voucherService', srv);


var ctrl = function ($scope, $http, voucherService) {

    $scope.getVouchers = voucherService.getVouchers().then(function (response) {
        $scope.Vouchers = response.data;
    });    
}
ctrl.$inject = ['$scope', '$http', 'voucherService'];
app.controller('voucherController', ctrl);
