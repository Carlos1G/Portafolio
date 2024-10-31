function dado(){
    let num1 = +document.querySelector('#num1').value;
    let num2 = +document.querySelector('#num2').value;

    let random = Math.round(Math.random() * (num2 - num1)) + num1;

    salida.textContent = random;
}