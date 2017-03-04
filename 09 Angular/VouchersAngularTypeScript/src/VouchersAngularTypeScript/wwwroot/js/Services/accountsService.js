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
            AccountsService.$inject = ['$resource'];
            return AccountsService;
        }());
        Services.AccountsService = AccountsService;
        voucherAppTS.voucherApp.service("accountService", AccountsService);
    })(Services = voucherAppTS.Services || (voucherAppTS.Services = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=accountsService.js.map