window.onload = function() {
    if (window.jQuery) { //check for jQuery
        console.log("jQuery is installed");
        hideDiv();
    } 
}

function hideDiv() {
    $("#divHide").hide();
    console.log("Div with id='divHide' was hidden");
}