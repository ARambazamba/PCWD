getVouchers();

function getVouchers() {
    var url = "/api/vouchers";
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log("query successful, data received: " + JSON.stringify(msg));
            buildTbl(msg);
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });
}

function buildTbl(vouchers) {
    var strTbl = "<table style='width: 90%'><tbody>";
    var strTh = "<tr style='text-align: left'>";
    var strData = "";
    for (var i = 0; i < vouchers.length; ++i) {
        strData += "<tr>";
        for (var prop in vouchers[i]) {
            if (prop==="Details") {
                continue;
            }
            if (i === 0) {
                var head = prop === "ID" ? "&nbsp;" : prop;
                strTh += "<th>" + head + "</th>";
            }
            switch (prop) {
            case "ID":
                strData += "<td><a href=\"javascript:loadPage('voucherDetails.htm', 'voucherDetails.js', '" + vouchers[i][prop] + "')\">Details</a></td>";
                break;
            case "Date":
                var dt = new Date(vouchers[i][prop]);
                strData += "<td>" + dt.toLocaleDateString("de-AT") + "</td>";
                break;
            default:
                strData += "<td>" + vouchers[i][prop] + "</td>";
                break;
            }
        }
        strData += "</tr>";
    }
    strTbl += strTh + "<tr>" + strData + "</table>";
   $("#tblVouchers").html(strTbl);
}