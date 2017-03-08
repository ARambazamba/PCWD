module voucherAppTS.Controllers {

    export interface IHomeScope extends ng.IScope {
        startText: string;
    }

    export class HomeController {

        scope: any;

        constructor($scope: IHomeScope) {
            this.scope = $scope;
            this.scope.startText = 'Welcome to the AngularJS & TypeScript Vouchers Web!';
        }
    }
    voucherApp.controller("homeController", HomeController);
}