function menu(){
    let donas = document.querySelector('#donas').value;
    let salida = document.querySelector('#salida');

switch(donas){
    case('chocolate'): salida.textContent = 'El precio es de $1.50';
    break;
    case('fresa'): salida.textContent = 'El precio es de $1.50';
    break;
    case('vainilla'): salida.textContent = 'El precio es de $1.50';
    break;
    case('oreo'): salida.textContent = 'El precio es de $2.50';
    break;
}
}