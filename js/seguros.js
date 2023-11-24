function mostrar(){

    const seguros = document.getElementById('seguros');

    const cantidad = document.getElementById('cantidad');

    let calcular = 0;
    let valor = 0;

    switch(seguros){

        case 1:
            valor = 100;
            calcular = cantidad * valor;
            break;
        case 2:
            valor = 200;
            calcular = cantidad * valor;
            break;
        case 3:
            valor = 300;
            calcular = cantidad * valor;
            break;
        case 4:
            valor = 400;
            calcular = cantidad * valor;
            break;
        default:
            document.getElementById('total').innerHTML = "No se realizo la compra del seguro";
            return;
    }

    var totalS = calcular;

    document.getElementById('total').innerHTML = totalS
}