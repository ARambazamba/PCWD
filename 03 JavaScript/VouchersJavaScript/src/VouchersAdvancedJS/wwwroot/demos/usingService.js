
import * as Srv from 'voucherSRV';

var Service = new Srv.voucherService();
Service.getVouchers(function(data) {console.log(`query successful, data received: ${JSON.stringify(data)}`);}, onErr);

function onErr() {
    console.log("err  happend");
}