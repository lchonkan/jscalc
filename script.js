var pantalla = document.getElementById('pantalla');
const button = document.querySelector('keypad');


const updateDisplay = function (value) {
    this.pantalla.innerText = value;
}

updateDisplay("1234567890");

//TODO: Event Listeners