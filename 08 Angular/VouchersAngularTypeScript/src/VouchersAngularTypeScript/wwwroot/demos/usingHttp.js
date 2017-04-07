var app = angular.module('voucherApp', []);

var ctrl = function ($scope, $http) {

    $scope.currentOutput = null;

    $scope.getVouchers = function ()
    {
        $http.get("/api/vouchers").then(function (response) {
            $scope.currentOutput = response.data;
        });
    }

    $scope.getVoucher = function(id)
    {
        $http.get("/api/vouchers/" + id).then(function (response) {
            $scope.currentOutput = response.data;
        });
    }

    $scope.insertVoucher = function (v) {
        $http.post("/api/vouchers/", v)
        .then(function (response) {
            $scope.currentOutput = response.data;
        });
    }

    $scope.updateVoucher = function () {
        if ($scope.currentOutput!=null) {
            $scope.currentOutput.Text = "Updated " + $scope.currentOutput.Text;
            $http.put("/api/vouchers/", $scope.currentOutput).then(function (response) {
                $scope.currentOutput = response.data;
            });
        }        
    }

    $scope.deleteVoucher = function (id) {
        $http.delete("/api/vouchers/" + id).then(function (response) {
            $scope.currentOutput = response.data;
        });
    }
    
}
ctrl.$inject = ['$scope', '$http'];
app.controller('voucherController', ctrl);
