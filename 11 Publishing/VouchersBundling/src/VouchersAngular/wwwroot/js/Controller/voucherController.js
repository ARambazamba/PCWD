require("./app.js");


voucherApp.controller('voucherController', function ($scope, $location, $http, balanceFactory) {

    $http.get("/api/vouchers").then(function (response) {
        JL().info("Getting Voucher data:" + JSON.stringify(response.data));        
        $scope.vouchers = response.data;
    });

    balanceFactory.getSum(false).then(function (response) {
        $scope.sumIncome = response.data;
    });
    balanceFactory.getSum(true).then(function (response) {
        $scope.sumExpenses = response.data;
    });

    $scope.showVoucher = function (voucher) {
        var dp = '/vdetails/' + voucher.ID;
        $location.path(dp);
    }

    $scope.newVoucher = function () {
        var dp = '/vdetails/0';
        $location.path(dp);
    }
});