//# sourceURL=canvas.js

function drawCanvas() {
    debugger;
    var example = document.getElementById('cvRectangle');
    var context = example.getContext('2d');
    context.fillStyle = "rgb(255,0,0)";
    context.fillRect(30, 30, 50, 50);

    example = document.getElementById('cvPath');
    context = example.getContext('2d');
    //Draw a custom path
    context.beginPath();
    context.moveTo(100, 20);
    // line 1
    context.lineTo(200, 160);
    // quadratic curve
    context.quadraticCurveTo(230, 200, 250, 120);
    // bezier curve
    context.bezierCurveTo(290, -40, 300, 200, 400, 150);
    // line 2
    context.lineTo(500, 90);
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.stroke();    
}