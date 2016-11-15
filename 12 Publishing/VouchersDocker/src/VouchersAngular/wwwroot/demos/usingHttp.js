var app = angular.module('voucherApp', []);

var ctrl = function ($scope, $http) {

    $scope.vouchers = null;

    $scope.getVouchers = function ()
    {
        $http.get("/api/vouchers").then(function (response) {
            $scope.vouchers = response.data;
        });
    }

    $scope.getVoucher = function(id)
    {
        $http.get("/api/vouchers/" + id).then(function (response) {
            $scope.vouchers = response.data;
        });
    }

    $scope.insertVoucher = function (v) {
        $http.post("/api/vouchers/", v)
        .then(function (response) {
            $scope.vouchers = response.data;
        });
    }

    $scope.updateVoucher = function () {
        if ($scope.vouchers != null) {
            $scope.vouchers.Text = "Updated " + $scope.vouchers.Text;
            $http.put("/api/vouchers/", $scope.vouchers).then(function (response) {
                $scope.vouchers = response.data;
            });
        }        
    }

    $scope.deleteVoucher = function (id) {
        $http.delete("/api/vouchers/" + id).then(function (response) {
            $scope.vouchers = response.data;
        });
    }    
}

ctrl.$inject = ['$scope', '$http'];
app.controller('voucherController', ctrl);
