function consumeService() {
    $.ajax({
        type: "GET",
        url: "http://northwind.servicestack.net/customers",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.clear();
            console.log(JSON.stringify(data));
        },
        error: function () {
            console.log('error');
        }
    });
}

function getJson() {
    $.getJSON("http://northwind.servicestack.net/customers", null, function (data) {
        console.clear();
        console.log(JSON.stringify(data));
    });
}

function insertScript() {
    $.getScript("scriptToBeLoaded.js", function() {
        console.log("script loading finished");
    });
}