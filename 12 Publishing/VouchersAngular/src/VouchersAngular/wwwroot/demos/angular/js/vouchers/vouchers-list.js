
module.exports = function (app) {
    app.directive('vouchersList',
        function (vouchersFactory) {
            return {
                template: require('./vouchersTemplate.html'),
                restrict: 'E',
                controller: function($scope) {
                    $scope.vouchers = vouchersFactory;
                }
            }
        });
}