voucherApp.controller('accountController', function ($scope, $location, accountsService) {
    accountsService.getAccounts()
            .success(function (accts) {
                $scope.Accounts = accts;
            })
            .error(function (error) {
                console.log("error fetching accts " + error.message);
            });

    $scope.showAccount = function(acct) {
        var ap = '/accounts/' + acct.ID;
        $location.path(ap);
    }
});