//Evaluacion de javaScript.

//funcion que le permita al usuario comprar un servicio
function mostrar(){

    //Se crea una variable que permita identificar el numero del servicio que desea comprar el usuario.
    opc = parseInt(prompt("Ingresa el numero perteneciente al seguro:\n1.Seguro de vida.\n2.Seguro de salud.\n3.Seguro de motocicleta.\n4.Seguro contra accidentes.\n5.Ninguna de los anteriores seguros."))

    //Se crea un menu con la sentencia switch con un parametro de acuerdo al numero seleccionado por el usuario.
    switch(opc){
        //Si el numero impuesto por el usuario es 1 entonces se cumple el case 1.
        case 1:
            //Se pregunta la cantidad de servicios a comprar.
            cantidad = parseInt(prompt("Ingresa la cantidad del seguros que deseas comprar: "))
            //Se calcula el valor total de la compra
            total = 100 * cantidad;
            //Se muestra el valor total a pagar por parte del usuario.
            document.getElementById('total').innerHTML = "El total de la compra es: $"+total;
            //Se finaliza el case por si no se llega a dar el numero 1 para pasar al otro case.
            break;
        //Si el numero impuesto por el usuario es 2 entonces se cumple el case 2.
        case 2:
            //Se pregunta la cantidad de servicios a comprar.
            cantidad = parseInt(prompt("Ingresa la cantidad del seguros que deseas comprar: "))
            //Se calcula el valor total de la compra
            total = 150 * cantidad;
            //Se muestra el valor total a pagar por parte del usuario.
            document.getElementById('total').innerHTML = "El total de la compra es: $"+total;
            //Se finaliza el case por si no se llega a dar el numero 2 para pasar al otro case.
            break;
        //Si el numero impuesto por el usuario es 3 entonces se cumple el case 3.
        case 3:
            //Se pregunta la cantidad de servicios a comprar.
            cantidad = parseInt(prompt("Ingresa la cantidad del seguros que deseas comprar: "))
            //Se calcula el valor total de la compra
            total = 200 * cantidad;
            //Se muestra el valor total a pagar por parte del usuario.
            document.getElementById('total').innerHTML = "El total de la compra es: $"+total;
            //Se finaliza el case por si no se llega a dar el numero 3 para pasar al otro case.
            break;
        //Si el numero impuesto por el usuario es 4 entonces se cumple el case 4.
        case 4:
            //Se pregunta la cantidad de servicios a comprar.
            cantidad = parseInt(prompt("Ingresa la cantidad del seguros que deseas comprar: "))
            //Se calcula el valor total de la compra
            total = 180 * cantidad;
            //Se muestra el valor total a pagar por parte del usuario.
            document.getElementById('total').innerHTML = "El total de la compra es: $"+total;
            //Se finaliza el case por si no se llega a dar el numero 1 para pasar al otro case.
            break;
        //En el caso de no cumplir con ninguno de los casos(case) este tendra un valor por defecto el cual le dira que no se escogio ningun seguro.
        default:
            document.getElementById('total').innerHTML = "No se escogio ninguno de nuestros seguros.";
            //Se finaliza el caso por defecto y el menu.
            break;
    }
}