
if (currentDetailID == null) {
    $("#accountid").val(0);
} else {
    getAcctByID();
}

addValidator();

//<!--<button type="submit" class="btn btn-xs" >Save</button>-->
//<a href="#" onclick="submitAccount()">Submit</a>

function addValidator() {
    $('form').validate({

        rules: {
            fullname: {
                required: true
            },
            invalidHandler: function (event, validator) {
                console.log('number of invalid fields: ' + validator.numberOfInvalids());
            }
        }
    });
}

function submitAccount() {
    var valid = $('form').valid();
    if (valid) {
        saveAccount();
    }
}

function getAcctByID() {

    $.ajax({
        type: "GET",
        url: "/api/accounts/" + currentDetailID,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            $("#fullname").val(data.Name);
            $("#accountid").val(data.ID);
            $("#expense").prop("checked", data.Expense);
        },
        error: function(msg) {
        }
    });
}

function saveAccount() {
    
    var acct = { ID: $("#accountid").val(), Name: $("#fullname").val(), Expense: $("#expense").prop("checked") }

    $.ajax({
        type: "POST",
        data: JSON.stringify(acct),
        url: "/api/accounts/",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            loadPage('accounts.htm', 'accounts.js');
        },
        error: function (msg) {
        }
    });
}
