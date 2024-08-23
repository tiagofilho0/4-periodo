var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d");

//quadrado preenchido
ctx.fillStyle = "#FF0000";
ctx.fillRect(50,50,100,100);

//quadrado sem preenchimento
ctx.beginPath();

ctx.rect(50, 200, 100, 100);
ctx.strokeStyle = "#000";
ctx.stroke();

ctx.closePath();

//circulo preenchido
ctx.beginPath();

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#00FF00" ;
ctx.fill();

ctx.closePath();

//circulo sem preenchimento
ctx.beginPath();

ctx.arc(250, 250, 50, 0, 2 * Math.PI);
ctx.strokeStyle = "#000";
ctx.stroke();

ctx.closePath();

//circulo pela metade
ctx.beginPath();

ctx.arc(250, 350, 50, 0, 1 * Math.PI);
ctx.fillStyle = "#000";
ctx.fill();

ctx.closePath();

//triângulo preenchido
ctx.beginPath();

ctx.moveTo(400, 50);
ctx.lineTo(350, 150);
ctx.lineTo(450, 150);

ctx.fillStyle = "#0000FF";
ctx.fill();

ctx.closePath();

//triângulo sem preenchimento
ctx.beginPath();

ctx.moveTo(400, 200);
ctx.lineTo(350, 300);
ctx.lineTo(450, 300);
ctx.lineTo(400,200)

ctx.strokeStyle = "#000";
ctx.stroke();

ctx.closePath();
