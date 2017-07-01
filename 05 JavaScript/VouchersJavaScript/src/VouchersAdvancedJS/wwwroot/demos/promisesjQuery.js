//# sourceURL=promisesJQuery.js

var url = "/api/vouchers";

function doAsyncCall() {
    debugger;

    $.ajax({
        type: "Get",
        url: url,
        dataType: 'json',
        async: false, //Change value after first debug - and debug again
        success: function (data) {
            console.log("query executed - response ok");
            console.log(JSON.stringify(data));
        },
        error: function (data) {
            console.log("error ...");
        }
    });
    
    for (var i = 0; i < 100; i++) {
        console.log("Waiting " + i);
    }
}

function useGetJson() {
    debugger;

    $.getJSON(url, function (data) {
        console.log("query executed - response ok");
        console.log(JSON.stringify(data));
    });

    for (var i = 0; i < 100; i++) {
        console.log("Waiting " + i);
    }
}

function simplePromises() {
    debugger;

    function createSite(working) {
        var dfd = $.Deferred();
        // mock an asynchronous function call
        if (working) {
            dfd.resolve("Site provisioned");
        } else {
            dfd.reject("Site could not be created.");
        }
        //return the promise
        return dfd.promise();
    };

    var working = $('#chkPromise').is(':checked');
    createSite(working).then(
        // The Deferred object was successfully resolved
        function(msg) {
            console.log(msg);
        },
        // The Deferred object was rejected
        function (msg) {
            console.log(msg);
        }
    );
}

function usingThen() {
    debugger;

    $.getJSON(url, function (data) {
        console.log("query executed - response ok");
        console.log(JSON.stringify(data));
    }).then(function (result) {
        for (var i = 0; i < 100; i++) {
            console.log("Waiting for response to complet .... " + i);
        }
    });
}

function usingThenSuccessErrror() {
    debugger;

    $.getJSON(url, function (data) {
        console.log("query executed - response ok");
        console.log(JSON.stringify(data));
    }).then(
        function (result) {
            console.log("Entering \".then-branch-success\"");
        },
        function (result) {
            console.log("Entering \".then-branch-error\"");
        });
}

function catchError() {
    debugger;
    //Execute twice - use an ivalid url 4 second time
    var urlnew = "http://northwind.servicestack.net/customers";

    $.getJSON(urlnew, function (data) {
        console.log("query executed - response ok");
        console.log(JSON.stringify(data));
    }).then(function (result) {
        console.log("Entering \".then-branch-success\"");
    }).fail(function (error) {
        console.log("Entering \".fail-branch\"");
    });
}