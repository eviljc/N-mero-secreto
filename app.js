//para conecar javascrip con los elementos de html es a traves de document
//querySeletor te permite buscar y seleccionar un elemento específico de tu página web, como un título, un párrafo o un botón, usando su nombre, clase o identificador
//El innerHTML es una propiedad que se utiliza en JavaScript para acceder y modificar el contenido HTML de un elemento en tu página web
//funcion es una encapúlamieno de una accion

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    intentos++; 

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor, intenta nuevamente');
        } else {
            asignarTextoElemento('p', 'El número es mayor, intenta nuevamente');
        }
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  
    if (listaNumerosSorteados.length === 10) {
        listaNumerosSorteados = [];
    }

    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * 10) + 1;
    } while (listaNumerosSorteados.includes(numeroGenerado));

    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 0; 
    document.getElementById('reiniciar').setAttribute('disabled', 'true'); 
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);

condicionesIniciales();


