
function getVouchers() {
    var url = "/api/vouchers";
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log("query successful, data received: " + JSON.stringify(msg));
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });
}

function getVoucher() {
    var url = "/api/vouchers/1";
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log("query successful, data received: " + JSON.stringify(msg));
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });

}

function insertVoucher() {
    var url = "/api/vouchers";
    var data = JSON.stringify({ Text: "Inserted by WebApi", Date: new Date() });
    $.ajax({
        type: "POST",
        data: data,
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log("query successful, data received: " + JSON.stringify(msg));
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });

}

function updateVoucher() {

}

function deleteVoucher() {

}