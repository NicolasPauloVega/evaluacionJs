//Evaluacion de javaScript.

//funcion que le permita al usuario comprar un servicio
function mostrar(){

    opc = parseInt(prompt("Ingresa el numero perteneciente al servicio:\n1.Servicio de vida.\n2.Servicio de salud.\n3.Servicio de moto.\n4.Servicio de accidentes.\n5.Ninguna de los anteriores servicios."))

    switch(opc){
        case 1:
            cantidad = parseInt(prompt("Ingresa la cantidad del servicio que deseas comprar: "))
            total = 100 * cantidad;
            document.getElementById('total').innerHTML = "El total de la compra es: $"+total;
            break;
        case 2:
            cantidad = parseInt(prompt("Ingresa la cantidad del servicio que deseas comprar: "))
            total = 150 * cantidad;
            document.getElementById('total').innerHTML = "El total de la compra es: $"+total;
            break;
        case 3:
            cantidad = parseInt(prompt("Ingresa la cantidad del servicio que deseas comprar: "))
            total = 200 * cantidad;
            document.getElementById('total').innerHTML = "El total de la compra es: $"+total;
            break;
        case 4:
            cantidad = parseInt(prompt("Ingresa la cantidad del servicio que deseas comprar: "))
            total = 180 * cantidad;
            document.getElementById('total').innerHTML = "El total de la compra es: $"+total;
            break;
        default:
            document.getElementById('total').innerHTML = "No se escogio ninguno de nuestros servicios.";
            break;
    }
}