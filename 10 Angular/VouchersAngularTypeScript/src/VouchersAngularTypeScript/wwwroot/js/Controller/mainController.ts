module voucherAppTS.Controllers {

    export class MainController {

        scope: any;

        constructor($scope: ng.IScope) {
            this.scope = $scope;
            this.scope.startText = 'Welcome to the AngularJS & TypeScript Vouchers Web!';
        }
    }
    voucherApp.controller("mainController", MainController);
}