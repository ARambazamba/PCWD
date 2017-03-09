var app = angular.module('voucherApp', ['ngResource']);

var fct = function ($resource) {
    return $resource("/api/vouchers/:id");
}

app.$inject = ['$resource'];
app.factory("vouchersFactory", fct);

var ctrl = function ($scope, vouchersFactory) {

    $scope.currentOutput = null;

    $scope.getVouchers = function () {

        vouchersFactory.query(function(data) {
            $scope.currentOutput = data;
        });
    }

    $scope.getVoucher = function (id) {
        vouchersFactory.get({id:id}, function (data) {
            $scope.currentOutput = data;
        });
    }

    $scope.insertVoucher = function (v) {

        vouchersFactory.save(v).then(function (response) {
            $scope.currentOutput = response.data;
        });
    }

    $scope.updateVoucher = function () {
        if ($scope.currentOutput != null) {
            $scope.currentOutput.Text = "Updated " + $scope.currentOutput.Text;
            vouchersFactory.save($scope.currentOutput).then(function (response) {
                $scope.currentOutput = response.data;
            });
        }
    }

    $scope.deleteVoucher = function (id) {
        vouchersFactory.delete({ id: id });
    }

}
ctrl.$inject = ['$scope', 'vouchersFactory'];
app.controller('voucherController', ctrl);
