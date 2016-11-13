module voucherAppTS.Controllers {

    export class AccountController {
        Accounts: IAccount[];
        scope: any;
        
        constructor($scope: ng.IScope, accountService: Services.AccountsService) {
            this.scope = $scope;
            var acctRes = accountService.getAcctResource();
            acctRes.query((data: IAccount[]) => {
                this.scope.Accounts = data;
            });
        }
    }

    AccountController.$inject = ["$scope", "accountService"];
    voucherApp.controller("accountController", AccountController);  
}