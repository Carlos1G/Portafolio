function promediar(){
    let primero = +document.querySelector('#primero').value;
    let segundo = +document.querySelector('#segundo').value;
    let tercero = +document.querySelector('#tercero').value;

    let salida = document.querySelector('#salida');

    let promedio = (primero * 0.15)+(segundo * 0.10)+(tercero * 0.10);
    salida.textContent = 'El promedio de tu 35% es de ' + promedio;
}