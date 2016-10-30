var propagate = true;

window.onload = function() {
    writePropagation();
}

function addEvt(id) {
    var div = document.getElementById("div" + id);
    div.addEventListener("click", function (evt) {        
        if (propagate===false) {
            evt.stopPropagation();            
        }
        console.log("Event was raised in " + this.id);
    }, false);
    console.log("eventlistener bound to div " + id);
}

function removeAll() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].removeEventListener("click",null);
    }
    console.log("all eventlisteners removed");
}

function tooglePropagation() {
    propagate = !propagate;
    writePropagation();
}

function writePropagation() {
    document.getElementById("status").innerHTML = "Event Propgation active: " + propagate;
}
