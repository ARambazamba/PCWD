export class VoucherService {

    getVouchers(successHandler, errHandler) {
        const url = "/api/vouchers";
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: successHandler,
            error: errHandler
        });
    }
}

//var Service = new VoucherService();
//Service.getVouchers(function (data) { console.log(`query successful, data received: ${JSON.stringify(data)}`); }, onErr);

