//declaro variable 
let display = document.getElementById('display');

display.textContent = 0;

//agrego una funcion donde el valor que hemos asignado en el html, aparecera en la pantalla que es display
function agregar(valor) {

    if(display.textContent === "0") {
        display.textContent = valor;
    } else {
        display.textContent += valor;
    }
    
}

//funcion para borrar el contenido y lo ponga vacio
function borrar() {
    display.textContent = "";
}

//funcion para calcular, eval hace el calculo solo 
function calcular() {
    display.textContent = eval(display.textContent);
}