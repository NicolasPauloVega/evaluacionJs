function mostrar(){

    const seguros = document.getElementById('seguros');

    let cantidad = document.getElementById('cantidad');

    var valor = 0;

    switch(seguros){

        case 1:
            valor = 100;
            var calcular = cantidad * valor;
            break;
        case 2:
            valor = 200;
            var calcular = cantidad * valor;
            break;
        case 3:
            valor = 300;
            var calcular = cantidad * valor;
            break;
        case 4:
            valor = 400;
            var calcular = cantidad * valor;
            break;
        default:
            break;
    }

    var totalS = calcular;

    document.getElementById('total') = totalS
}