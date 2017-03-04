//# sourceURL=DragDrop.js

function allowDrop(ev) {
    
    ev.preventDefault();
}

function drag(ev) {
    
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    debugger;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log("Congrats - you dropped the dog");
}