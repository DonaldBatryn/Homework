document.addEventListener("DOMContentLoaded", function(){

});
// square
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'pink';
ctx.fillRect(0, 0, 500, 500);

ctx.fillStyle = "black";
ctx.fillRect(50, 50, 400, 400);

ctx.fillStyle = "green";
ctx.fillRect(100, 100, 300, 300);

// circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.strokeStyle = "yellow";
ctx.lineWidth = 15;
ctx.fillStyle = "lightblue"
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 400, 50, 0, 2 * Math.PI);
ctx.strokeStyle = "yellow";
ctx.lineWidth = 15;
ctx.fillStyle = "lightblue"
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 250, 150, 0, 2 * Math.PI);
ctx.strokeStyle = "purple";
ctx.lineWidth = 15;
ctx.fillStyle = "purple"
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 250, 50, 0, 2 * Math.PI);
ctx.strokeStyle = "yellow";
ctx.lineWidth = 15;
ctx.fillStyle = "lightblue"
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(100, 400);
ctx.lineTo(450, 25);
ctx.fillStyle = "red";
ctx.fill();

