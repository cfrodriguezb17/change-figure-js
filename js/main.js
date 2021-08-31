let btnTop = document.getElementById('btnTop');
let btnBottom = document.getElementById('btnBottom');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let contenedorFigura = document.getElementById('contenedor-figura');
let figura = document.getElementById('figura');
let btnCircle = document.getElementById('btnCircle');
let btnRombo = document.getElementById('btnRombo');
btnTop.onclick = function () {
    figura.classList.toggle("top");
    figura.classList.remove("bottom");
}
btnBottom.onclick = function () {
    figura.classList.remove("top");
    figura.classList.toggle("bottom");
}
btnLeft.onclick = function () {
    contenedorFigura.classList.toggle("left-btn");
    contenedorFigura.classList.remove("right-btn");
}
btnRight.onclick = function () {
    contenedorFigura.classList.remove("left-btn");
    contenedorFigura.classList.toggle("right-btn");
}
btnCircle.onclick = function () {
    figura.classList.toggle('circle');
}
btnRombo.onclick = function () {
    figura.classList.toggle('rombo');
}