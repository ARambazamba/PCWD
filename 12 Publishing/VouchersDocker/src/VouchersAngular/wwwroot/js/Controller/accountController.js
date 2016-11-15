voucherApp.controller('accountController', function ($scope, accountsService) {

    accountsService.getAccounts()
            .success(function (accts) {
                $scope.Accounts = accts;
            })
            .error(function (error) {
                console.log("error fetching accts " + error.message);
            });
});