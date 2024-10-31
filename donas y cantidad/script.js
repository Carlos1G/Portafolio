function menu() {
    let donas = document.querySelector('#donas').value;
    let cantidad = +document.querySelector('#cantidad').value;
    let salida = document.querySelector('#salida');

    let cuenta = 0;

    switch(donas) {
        case 'chocolate':
            cuenta = 1.50 * cantidad;
            salida.textContent = `El precio total de ${cantidad} donas de chocolate es de $${cuenta.toFixed(2)}`;
            break;
        case 'fresa':
            cuenta = 1.50 * cantidad;
            salida.textContent = `El precio total de ${cantidad} donas de fresa es de $${cuenta.toFixed(2)}`;
            break;
        case 'vainilla':
            cuenta = 1.50 * cantidad;
            salida.textContent = `El precio total de ${cantidad} donas de vainilla es de $${cuenta.toFixed(2)}`;
            break;
        case 'oreo':
            cuenta = 2.50 * cantidad;
            salida.textContent = `El precio total de ${cantidad} donas de oreo es de $${cuenta.toFixed(2)}`;
            break;
        case 'caramelo':
            cuenta = 3.00 * cantidad;
            salida.textContent = `El precio total de ${cantidad} donas de caramelo es de $${cuenta.toFixed(2)}`;
            break;
        default:
            salida.textContent = 'Por favor selecciona un sabor válido';
            break;
    }
}

