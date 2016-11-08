function callASMX() {
    $.ajax({
        type: "POST",
        url: "/Services/vouchers.asmx/GetVouchers",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var bad = JSON.parse(msg.d);
            var fixed = fixDateJSON(msg.d);
            var div = document.getElementById("divResult");
            if (div!=null) {
                div.innerHTML = JSON.stringify(fixed);
            }
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });
}

function fixDates(value) {
    return new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
}

function fixDateJSON(data) {
    var parsed = JSON.parse(data, function (key, value) {
        if (typeof value === 'string') {
            var d = /\/Date\((\d*)\)\//.exec(value);
            return (d) ? new Date(+d[1]) : value;
        }
        return value;
    });
    return parsed;
}