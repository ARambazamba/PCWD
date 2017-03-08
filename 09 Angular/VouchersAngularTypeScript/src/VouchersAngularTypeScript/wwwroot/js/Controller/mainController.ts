module voucherAppTS.Controllers {

    export interface IHomeScope extends ng.IScope {
        startText: string;
    }

    export class HomeController {

        constructor(public $scope: IHomeScope) {
            $scope.startText = 'Welcome to the AngularJS & TypeScript Vouchers Web!';
        }
    }
    voucherApp.controller("homeController", HomeController);
}