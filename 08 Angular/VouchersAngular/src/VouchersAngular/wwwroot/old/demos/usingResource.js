var app = angular.module('voucherApp', ['ngResource']);

var fct = function ($resource) {
    return $resource("/api/vouchers/:id");
}
app.$inject = ['$resource'];
app.factory("vouchersFactory", fct);

var ctrl = function ($scope, vouchersFactory) {

    $scope.vouchers = null;

    $scope.getVouchers = function () {
        //query -> get collection
        vouchersFactory.query(function(data) {
            $scope.vouchers = data;
        });
    }

    $scope.getVoucher = function (id) {
        //get -> get item -> :id
        vouchersFactory.get({id:id}, function (data) {
            $scope.vouchers = data;
        });
    }

    $scope.insertVoucher = function (v) {
        //save 
        vouchersFactory.save(v).then(function (response) {
            $scope.vouchers = response.data;
        });
    }

    $scope.updateVoucher = function () {
        if ($scope.vouchers != null) {
            $scope.vouchers.Text = "Updated " + $scope.vouchers.Text;
            vouchersFactory.save($scope.vouchers).then(function (response) {
                $scope.vouchers = response.data;
            });
        }
    }

    $scope.deleteVoucher = function (id) {
        vouchersFactory.delete({ id: id });
    }
}
ctrl.$inject = ['$scope', 'vouchersFactory'];
app.controller('voucherController', ctrl);
