let cuota = 0
let dto = 0
let subtotal=0
let total=0
let listadopiezas=""
const Productocarrito=[]
class Productos
{
    constructor(nropieza,nombre,precio,cantidad)
    {
        this.nropieza=nropieza;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }
}
const producto=new Productos()
const producto1=new Productos(1,"ladrillo",50,1)
const producto2=new Productos(2,"cemento",100,1)
const producto3=new Productos(3,"hierro",70,1)
const producto4=new Productos(4,"fino",80,1)


carrito()
function  carrito(){
    
    let sigue
    while (sigue!="no") {
    pieza = parseInt(prompt("ingrese el numero de pieza \n 1)ladrillo $50 \n 2)cemento $100 \n 3) hierro $70 \n 4)fino $80 \n 0)eliminar ultimo producto "))
    let cantidad=parseInt(prompt("ingrese la cantidad"))
     switch (pieza) {
        case 1:
            producto1.cantidad=cantidad;
            Productocarrito.push(producto1)
            break;
        case 2:
            producto2.cantidad=cantidad;
            Productocarrito.push(producto2)
            break;
        case 3:
            producto3.cantidad=cantidad;
            Productocarrito.push(producto3)
            break;
        case 4:
            producto4.cantidad=cantidad;
            Productocarrito.push(producto4)
            break;
        
        case 0:
            eliminarUnProducto()
            break;
        default:
            break;
     }
        sigue = prompt("desea agregar otro producto")
    }
    console.log();

    for (const lp of Productocarrito) {
        listadopiezas+=lp.nombre+ " " + lp.precio + " " + lp.cantidad +"\n";
        subtotal=subtotal+lp.precio*lp.cantidad;
    }
    console.log(listadopiezas);
    alert("los productos seleccionados y su precio son:\n" + listadopiezas+"\nEl costo final es: "+subtotal)

    Descuentos() 
    let pregunta=(prompt("desea dividir en cuotas?")).toLowerCase()
    if (pregunta==="si") {
        Cuotas()
    }
    total=subtotal
    alert("el valor a pagar es:"+total)
    let nuevo=(prompt("desea realizar otra compra?")).toLowerCase()
    if(nuevo==="si"){
        carrito()
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
function eliminarUnProducto() {
    let eliminar=prompt("desea eliminar el ultimo producto?").toLowerCase();
    if (eliminar==="si") {
        console.log(Productocarrito);
        Productocarrito.pop();
        alert("producto eliminado")
    }

}