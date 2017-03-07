'use strict';
describe('expensesDataService', function(){

    beforeEach(module('voucherApp'));

    it('should return three expense items',
        inject(function(expensesDataService) {
            expect(expensesDataService.getExpenses().length).toBe(3);
        }));

});