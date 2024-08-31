//funçoes
window.onload = function() {
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d"); 

//gera um quadrado
function criarQuadrado(x,y,largura,cor){
    ctx.fillStyle = cor;
    ctx.fillRect(x,y,largura,largura);
}

/*let cor = '#f70071';
let x = 2;
let y = 2;
let largura = 50;

criarQuadrado(x,y,largura,cor);*/


function desenharQuadrado() {
    const tamanhoQuadrado = 50;
    const distancia = 2;
    const larguraCanvas = canvas.width;
    let x = 2;
    while (x + tamanhoQuadrado <= larguraCanvas) {
        criarQuadrado(x, 2, tamanhoQuadrado,'#f70071');
        x += tamanhoQuadrado + distancia;
    }
}

//desenharQuadrado();

function criarCirculo() {
    ctx.arc(x, y,tamnho)
    ctx.fillStyle(cor)
    ctx.fill();
}




}


