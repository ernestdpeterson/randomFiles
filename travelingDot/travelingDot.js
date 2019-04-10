/* eslint-env jquery */
// exampl code from doob : http://mrdoob.com/lab/javascript/requestanimationframe/

var canvas, context;

function init() {
    canvas = document.querySelector("canvas");
    context = canvas.getContext('2d');
}
function animate() {
    requestAnimationFrame(animate);
    draw();
}
function draw() {
    var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 96 + 38;
    var y = Math.cos( time * 0.9 ) * 96 + 38;
    x = Math.round(x) + 200;
    y = Math.round(y) + 200;
    // context.fillStyle = 'rgb(245,245,245)';
    context.fillStyle = 'blue';
    // context.fillRect( x, y, 3, 3);
    context.beginPath();
    context.arc(x, y, 1, 0, 2*Math.PI);
    // context.stroke();
    // context.colosePath();
    context.fill();

    context.fillStyle = "red";
    context.beginPath();
    context.fillRect(x, y + 200, 2, 2);

    context.fillStyle = "green";
    context.beginPath();
    context.fillRect(x + 200, y, 2, 2);

    context.fillStyle = "orange";
    context.beginPath();
    context.fillRect(x + 200, y + 200, 2, 2);

    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(x + 100, y + 100, 2, 2);

    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(x - 100, y - 100, 2, 2);

    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(x + 300, y - 100, 2, 2);

    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(x + 300, y + 300, 2, 2);

    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(x - 100, y + 300, 2, 2);

    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(x + 100, y + 300, 2, 2);

    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(x + 100, y - 100, 2, 2);

    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(x - 100, y + 100, 2, 2);

    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(x + 300, y + 100, 2, 2);
}

init();
animate();