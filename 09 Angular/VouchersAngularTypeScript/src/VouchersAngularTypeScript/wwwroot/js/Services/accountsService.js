var voucherAppTS;
(function (voucherAppTS) {
    var Services;
    (function (Services) {
        var AccountsService = (function () {
            function AccountsService($resource) {
                this.$resource = $resource;
            }
            AccountsService.prototype.getAcctResource = function () {
                return this.$resource('/api/accounts');
            };
            return AccountsService;
        }());
        AccountsService.$inject = ['$resource'];
        Services.AccountsService = AccountsService;
        voucherAppTS.voucherApp.service("accountService", AccountsService);
    })(Services = voucherAppTS.Services || (voucherAppTS.Services = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=accountsService.js.map