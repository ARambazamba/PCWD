
$(document).ready(function () {
    var url = "/api/asset";
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (data) {
            console.log(data)
        },
        error: function (err) {
            console.log(err);
        }
    });
})