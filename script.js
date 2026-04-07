//declaro variable 
let display = document.getElementById('display');

//agrego una funcion donde el valor que hemos asignado en el html, aparecera en la pantalla que es display
function agregar(valor) {

    display.textContent += valor;
}