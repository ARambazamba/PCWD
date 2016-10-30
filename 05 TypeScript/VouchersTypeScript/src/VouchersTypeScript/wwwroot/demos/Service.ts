namespace Vouchers {

    export class VoucherService {
        getVouchers() {
            var deferred = $.Deferred();
            $.ajax({
                type: "GET",
                url: "/api/vouchers",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success(data: IVoucher[]) {
                    return deferred.resolve(data);
                },
                error(msg: any) {
                    console.log("error calling service");
                    console.log(msg);
                    return deferred.reject(msg);
                }
            });
            return deferred;
        }
    }
}

function consumeService() {
    debugger;

    var service = new Vouchers.VoucherService();
    service.getVouchers().then(data => {
        let vouchers = data;
        console.log("data received from service: ");
        console.log(vouchers);
    });    
}