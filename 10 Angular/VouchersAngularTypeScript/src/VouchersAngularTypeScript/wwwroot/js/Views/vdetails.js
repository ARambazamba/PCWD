$(document).ready(function () {
    initDatePicker();
});

function initDatePicker() {

    $('#dpDate').datepicker({
        format: "dd.mm.yyyy",
        weekStart: 1,
        startDate: "01.01.2013",
        endDate: "01.01.2050",
        todayBtn: "linked",
        clearBtn: true,
        calendarWeeks: true,
        autoclose: true,
        toggleActive: true
    });
    $('#dpDate').datepicker('setStartDate');
}

//function newDetail() {
//    $("#txtDetailsID").val("");
//    $("#txtDetailsText").val("");
//    $("#txtDetailsAmount").val("");
//    $("#ddAccount").val("");
//    $("#txtComment").val("");
//}