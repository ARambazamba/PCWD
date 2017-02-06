var url = "http://northwind.servicestack.net/customers";

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
    
    function createSite(working) {
        const dfd = $.Deferred();
        // mock an asynchronous function call
        if (working) {
            dfd.resolve();
        } else {
            dfd.reject();
        }
        //return the promise
        return dfd.promise();
    };

    var working = $('#chkPromise').attr('checked');
    createSite(working).then(
        // The Deferred object was successfully resolved
        function() {
            console.log("Site provisioned");
        },
        // The Deferred object was rejected
        function() { console.log("Site could not be created."); }
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