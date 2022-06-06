let pieza = ""
let precio = 0
let cuota = 0
let dto = 0
let subtotal=0
let total=0
let listadopiezas=""
productos()
function  productos(){
    let sigue
    while (sigue!="no") {
        pieza = prompt("ingrese el numero de pieza")
        precio = prompt("ingrese el precio")

        listadopiezas = listadopiezas +"\n"+pieza +"  "+precio
        subtotal = parseFloat(subtotal) + parseFloat(precio)
        sigue = prompt("desea agregar otro producto")
    }
    alert("los productos seleccionados y su precio son:\n" + listadopiezas +"\nEl costo final es: "+subtotal)
    Descuentos() 
    let pregunta=(prompt("desea dividir en cuotas?")).toLowerCase()
    if (pregunta==="si") {
        Cuotas()
    }
    total=subtotal
    alert("el valor a pagar es:"+total)
    let nuevo=(prompt("desea realizar otra compra?")).toLowerCase()
    if(nuevo==="si"){
        productos()
    }
    else
    {
        alert("Gracias por comprar con nosotros!!")
    }
}
function Cuotas(){
cuota = prompt("dividir en cuotas(1,3,6,9 o 12): ")
    while (isNaN(cuota)) {
        cuota = prompt("no valido ingrese nuevamente: ")     
    }
    console.log(cuota);    
    switch (cuota) {
        case "1":
            console.log(1);
            alert("el pago es de: "+subtotal)
            break;
        case "3":
            subtotal=subtotal/3;
            console.log(subtotal);
            alert("le quedan 3 cuotas de: "+subtotal)
            console.log(3);
            break;
        case "6":
            subtotal=subtotal/6;
            alert("le quedan 6 cuotas de: "+subtotal)
            console.log(6);
            break;
        case "9":
            subtotal=subtotal/9;
            alert("le quedan 9 cuotas de: "+subtotal)
            console.log(9);
                break;
        case "12":
            subtotal=subtotal/12;
            alert("le quedan 12 cuotas de: "+subtotal)
            console.log(12);
                break;    
        default:
            console.log("Numero no valido ingrese entre 3 6 9 o 12");
            Cuotas();
            break;
    }
    return subtotal;

}
function Descuentos(){
    let bajarprecio=(prompt("Poner Descuento?")).toLowerCase()
    if(bajarprecio==="si"){
    dto=prompt("ingrese el porcentaje de descuento \n si el descuento es mayor a 15 se solicita clave")
    if(dto<15)
    {
        dto=subtotal * dto / 100
        alert("el descuento es de: "+ dto)
        subtotal = subtotal - dto
        alert("con el descuento te queda en:" + subtotal)
        return subtotal   
    }
    else if (dto>=15) {
        let clave = prompt("ingrese la clave de Autorizacion")
        if (clave!="1234") 
        {
            alert("clave Incorrecta");
            Descuentos();
        }
        else
        {
        dto=subtotal * dto / 100
        alert("el descuento es de: "+ dto)
        subtotal = subtotal - dto
        alert("con el descuento te queda en:" + subtotal)
        return subtotal        
        }
    }
}
}

