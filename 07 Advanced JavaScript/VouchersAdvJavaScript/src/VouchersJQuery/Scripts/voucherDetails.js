
if (currentVoucherID != undefined && currentVoucherID != null) {
    getVoucher();
}

function getVoucher() {
    var url = "/api/vouchers/" + currentVoucherID;
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            setVoucherData(data);
            setDetailsTable(data);
        },
        error: function (msg) {
            console.log("error loading voucher with  id");
        }
    });
}

function setVoucherData(data) {
    $("#txtVoucherText").val(data.Text);
    var strDtGerman = new Date(data.Date).toLocaleDateString();
    $("#dpDate").val(strDtGerman);
    $("#chkPaid").prop("checked", data.Paid);
    if (data.Expense) {
        $("#rbExpense").prop("checked", true);
    } else {
        $("#rbIncome").prop("checked", true);

    }
}

function setDetailsTable(data) {
    $('#tblVoucherDetailsBody').empty();

    for (var i = 0; i < data.Details.length; i += 1) {
        var item = data.Details[i];
        $('#tblVoucherDetailsBody').append(
          '<tr id="' + item.ID + '" style="cursor:pointer">' +
            '<td>' + item.Text + '</td>' +
            '<td>' + item.Amount + '</td>' +
            '<td>' + item.AccountID + '</td>' +
            '<td>&nbsp;</td>' +
          '</tr>');
    }
    $('#tblVoucherDetailsBody').append("</table>");

    $('#tblVoucherDetailsBody tr').click(function (e) {
        var id = e.currentTarget.id;
        console.info("selecting row in voucherDetails with id=" + id);
    });
}
