let numeros = ['2', '3', '4', '5', '6', '7', '8', 'J', 'Q', 'K', 'A'];
let iconos = ['♣️', '♥️', '♠️', '♦️'];



window.onload = function cambiarLetra() { 
    let cambiarNum = numeros[Math.floor(Math.random() * numeros.length)];
    document.querySelector('#letra').innerText = cambiarNum;
    cambiarIcono();
};

function cambiarIcono() { 
    let cambiarIco = iconos[Math.floor(Math.random() * iconos.length)];
    document.querySelector('#icono1').innerText = cambiarIco;
    document.querySelector('#icono2').innerText = cambiarIco;
    if (cambiarIco == '♥️' || cambiarIco == '♦️'){
        document.getElementById("icono1").style.color = "red";
        document.getElementById("icono2").style.color = "red";
    }; 
};