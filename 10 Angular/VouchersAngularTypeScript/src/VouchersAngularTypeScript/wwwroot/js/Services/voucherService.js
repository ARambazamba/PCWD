var voucherAppTS;
(function (voucherAppTS) {
    var Services;
    (function (Services) {
        var VoucherService = (function () {
            function VoucherService($resource) {
                this.$resource = $resource;
            }
            VoucherService.prototype.getVoucherResource = function () {
                return this.$resource('/api/vouchers/:id');
            };
            VoucherService.$inject = ['$resource'];
            return VoucherService;
        }());
        Services.VoucherService = VoucherService;
        voucherAppTS.voucherApp.service("voucherService", VoucherService);
    })(Services = voucherAppTS.Services || (voucherAppTS.Services = {}));
})(voucherAppTS || (voucherAppTS = {}));
//# sourceMappingURL=voucherService.js.map