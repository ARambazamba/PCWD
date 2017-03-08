module voucherAppTS.Controllers {

    export interface IAccountScope extends ng.IScope {
        accounts: IAccount[];
    }

    export class AccountController {
       
        constructor(private $scope: IAccountScope, accountService: Services.AccountsService) {
            accountService.getAcctResource().query((data: IAccount[]) => {
                $scope.accounts = data;
            });
        }
    }

    AccountController.$inject = ["$scope", "accountService"];
    voucherApp.controller("accountController", AccountController);  
}