var Vouchers;
(function (Vouchers) {
    var VoucherService = (function () {
        function VoucherService() {
        }
        VoucherService.prototype.getVouchers = function () {
            var deferred = $.Deferred();
            $.ajax({
                type: "GET",
                url: "/api/vouchers",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    return deferred.resolve(data);
                },
                error: function (msg) {
                    console.log("error calling service");
                    console.log(msg);
                    return deferred.reject(msg);
                }
            });
            return deferred;
        };
        return VoucherService;
    }());
    Vouchers.VoucherService = VoucherService;
})(Vouchers || (Vouchers = {}));
function consumeService() {
    debugger;
    var service = new Vouchers.VoucherService();
    service.getVouchers().then(function (data) {
        var vouchers = data;
        console.log("data received from service: ");
        console.log(vouchers);
    });
}
//# sourceMappingURL=Service.js.map