var voucherAppTS;
(function (voucherAppTS) {
    var Factories;
    (function (Factories) {
        var BalanceFactory = (function () {
            function BalanceFactory($http) {
                this.http = $http;
            }
            BalanceFactory.prototype.getSum = function (expenses, callback) {
                this.http.get("/api/vouchers/GetSum/" + expenses).then(callback());
            };
            return BalanceFactory;
        }());
        BalanceFactory.$inject = ["$http"];
        Factories.BalanceFactory = BalanceFactory;
        voucherAppTS.voucherApp.factory("balanceFactory", BalanceFactory);
    })(Factories = voucherAppTS.Factories || (voucherAppTS.Factories = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=balanceFactory.js.map