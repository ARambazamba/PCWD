
function AddText() {
    var txt = document.getElementById("txtMsg").value;
    if (txt != null) {
        setConversation(txt, "You");
        var worker = new Worker("worker.js");

        worker.addEventListener("message", function (e) {
            var msg = e.data;
            console.log("web worker: " + msg);
            setConversation(msg, "Worker");
            if (msg.indexOf("Sorry") != -1) {
                worker.terminate();
            }

        }, false);
        worker.postMessage(txt);

    }
}

function setConversation(msg, person) {
    document.getElementById("divConversation").innerHTML = document.getElementById("divConversation").innerHTML + "<br>" + person + ": " + msg + "</br>";
}