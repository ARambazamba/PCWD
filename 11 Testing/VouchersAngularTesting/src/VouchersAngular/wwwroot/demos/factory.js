var app = angular.module('app', []);

var fct = function ($http) {

    return {
        getVouchers : function() {
            return $http.get("/api/vouchers");
        }
    }

}
fct.$inject = ['$http'];
app.factory('voucherFactory', fct);


var ctrl = function ($scope, $http, voucherFactory) {

    $scope.getVouchers = voucherFactory.getVouchers().then(function (response) {
        $scope.Vouchers = response.data;
    });
}
ctrl.$inject = ['$scope', '$http', 'voucherFactory'];
app.controller('voucherController', ctrl);