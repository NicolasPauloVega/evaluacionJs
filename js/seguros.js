//Evaluacion de javaScript.

//funcion que le permita al usuario comprar un servicio
function mostrar(){

    //Se crea una variable que permita identificar el numero del servicio que desea comprar el usuario.
    opc = parseInt(prompt("Ingresa el numero perteneciente al seguro que deseas comprar:\n1.Seguro de vida ($100.000).\n2.Seguro de salud ($150.000).\n3.Seguro de motocicleta ($200.000).\n4.Seguro contra accidentes ($180.000).\n5.Ninguna de los anteriores seguros."))

    //Se crea un menu con la sentencia switch con un parametro de acuerdo al numero seleccionado por el usuario.
    switch(opc){
        //Si el numero impuesto por el usuario es 1 entonces se cumple el case 1.
        case 1:
            //Se pregunta la cantidad de servicios a comprar.
            cantidad = parseInt(prompt("Ingresa la cantidad del seguros que deseas comprar: "))
            //Se calcula el valor total de la compra
            total = 100000 * cantidad;
            //Se muestra el valor total a pagar por parte del usuario.
            document.getElementById('total').innerHTML = "Valor del seguro: $100.000<br>La Cantidad de seguros a comprar es: " + cantidad + "<br>El total de la compra es: $" + total;
            //Se finaliza el case por si no se llega a dar el numero 1 para pasar al otro case.
            break;
        //Si el numero impuesto por el usuario es 2 entonces se cumple el case 2.
        case 2:
            //Se pregunta la cantidad de servicios a comprar.
            cantidad = parseInt(prompt("Ingresa la cantidad del seguros que deseas comprar: "))
            //Se calcula el valor total de la compra
            total = 150000 * cantidad;
            //Se muestra el valor total a pagar por parte del usuario.
            document.getElementById('total').innerHTML = "Valor del seguro: $150.000<br>La Cantidad de seguros a comprar es: " + cantidad + "<br>El total de la compra es: $" + total;
            //Se finaliza el case por si no se llega a dar el numero 2 para pasar al otro case.
            break;
        //Si el numero impuesto por el usuario es 3 entonces se cumple el case 3.
        case 3:
            //Se pregunta la cantidad de servicios a comprar.
            cantidad = parseInt(prompt("Ingresa la cantidad del seguros que deseas comprar: "))
            //Se calcula el valor total de la compra
            total = 200000 * cantidad;
            //Se muestra el valor total a pagar por parte del usuario.
            document.getElementById('total').innerHTML = "Valor del seguro: $200.000<br>La Cantidad de seguros a comprar es: " + cantidad + "<br>El total de la compra es: $" + total;
            //Se finaliza el case por si no se llega a dar el numero 3 para pasar al otro case.
            break;
        //Si el numero impuesto por el usuario es 4 entonces se cumple el case 4.
        case 4:
            //Se pregunta la cantidad de servicios a comprar.
            cantidad = parseInt(prompt("Ingresa la cantidad del seguros que deseas comprar: "))
            //Se calcula el valor total de la compra
            total = 180000 * cantidad;
            //Se muestra el valor total a pagar por parte del usuario.
            document.getElementById('total').innerHTML = "Valor del seguro: $180.000<br>La Cantidad de seguros a comprar es: " + cantidad + "<br>El total de la compra es: $" + total;
            //Se finaliza el case por si no se llega a dar el numero 1 para pasar al otro case.
            break;
        //En el caso de no cumplir con ninguno de los casos(case) este tendra un valor por defecto el cual le dira que no se escogio ningun seguro.
        default:
            document.getElementById('total').innerHTML = "Lamentamos que no hallas encontrado el seguro que necesitabas...\nMuchas gracias por usar nuestro programa.";
            //Se finaliza el caso por defecto y el menu.
            break;
    }
}