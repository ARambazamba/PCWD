var voucherAppTS;
(function (voucherAppTS) {
    var Services;
    (function (Services) {
        var AccountService = (function () {
            function AccountService($resource) {
                this.$resource = $resource;
            }
            AccountService.prototype.getAcctResource = function () {
                return (this.$resource('/api/accounts'));
            };
            return AccountService;
        }());
        AccountService.$inject = ['$resource'];
        Services.AccountService = AccountService;
        voucherAppTS.voucherApp.service("accountService", AccountService);
    })(Services = voucherAppTS.Services || (voucherAppTS.Services = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=accountsService.js.map