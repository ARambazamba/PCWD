$(document).ready(function() {
    getVouchers();
});

function getVouchers() {
    var url = "/api/vouchers";
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            buildTbl(data);
        },
        error: function (msg) {
            writeLog("GetVouchers query error", msg);
        }
    });
}

function buildTbl(vouchers) {
    var strTbl = "<table><tbody>";
    var strTh = "<tr>";
    var strTr ="";
    for (var i = 0; i < vouchers.length; ++i) {        
        strTr += "<tr>";
        for (var prop in vouchers[i]) {
            console.log(prop + "=" + vouchers[i][prop]);
            if (i === 0) {
                strTh += "<th>" + prop + "</th>";
            }
            strTr += "<td>" + vouchers[i][prop] + "</td>";
        }
        strTr += "</tr>";        
    }
    strTbl += strTh + "<tr>" + strTr + "</table>";
    document.getElementById("tblVouchers").innerHTML = strTbl;
}