function contar() {
    let segundos = +document.querySelector('#segundos').value; 
    setTimeout(finalizar, segundos * 1000);
}  
function finalizar() {
    let salida = document.querySelector('#salida');
    salida.textContent = 'ON';
    salida.style = 'color: green; font-size: 25px';

    let audio = document.querySelector('#alerta');
    audio.play();
}
function resetear() {
    location.reload();
}   