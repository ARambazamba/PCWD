(function() {
    'use strict';

    angular.module('voucherApp')
        .controller('expensesController', ['expensesDataService', expensesController]);

    function expensesController(expensesDataService){

        var vm = this;

        vm.activate = activate;
        vm.expenseItems = [];

        activate();

        function activate(){
            vm.expenseItems = expensesDataService.getExpenses();
        }
    }

})();