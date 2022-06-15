// //ejercicio 1
// let nombre1=prompt("ingrese el nombre")
// let apellido1=prompt("ingrese el apellido")
// let edad=prompt("ingrese la edad")

// alert("el nombre es: "+nombre1+"\nel apellido: "+ apellido1 +"\nedad: "+edad)

// //ejercicio 2
// const ciudad1="springfield"
// const ciudad2="las vegas"
// const ciudad3="new york"
// const ciudad4="taiwan"
// const ciudad5="las talitas"

// console.log(ciudad1,ciudad2,ciudad3,ciudad4,ciudad5);

// // ejercicio 3 
// let nombre=prompt("ingrese el nombre")
// let apellido=prompt("ingrese el apellido")
// let domicilio=prompt("ingrese el domicilio")
// let nacimiento=prompt("ingrese fecha de nacimiento")

// let carnet="Nombre: "+ nombre +" Apellido: " + apellido +" Domicilio" + domicilio +" Nacimiento" + nacimiento

// alert(carnet)

// // ejercicio 4
// let padre=prompt("ingrese el nombre del padre")
// let madre=prompt("ingrese el nombre de la madre")
// let hijo1=prompt("ingrese el nombre del hijo mayor")
// let hijo2=prompt("ingrese el nombre del hijo del medio")
// let hijo3=prompt("ingrese el nombre del hijo menor")

// alert("el padre es " +padre+" la madre es" +madre+"los hijos son: "+hijo1+ " "+hijo2+" "+ hijo3)

// //ejercicio 5
// let precio=prompt("ingrese el valor del articulo")
// const dto20=0.20
// const dto30=0.30
// let precio20=precio -(precio*dto20)
// let precio30=precio -(precio*dto30)

// alert("descuento del 20%: "+precio20+"\n descuento del 30%: " +precio30)

// ejercicio 6

// let nombre=prompt("ingrese un nombre")
// const nombre1="Bart"
// if(nombre===nombre1)
// {
//     alert("Fui yo")
// }
// else
// {
//     alert("Yo no fui")
// }

// //ejercicio 7
// let letra=prompt("ingrese una letra")
// if((letra==="Y") || (letra==="y"))
// {
//     alert("correcto")
// }
// else
// {
//     alert("incorrecto")
// }

// //ejercicio 8
// let numero=prompt("ingrese un numero del 1 al 4")
// if(numero==1)
// {
//     alert("elegiste a Homero")
// }
// else if(numero==2)
// {
//     alert("elegiste a Marge")
// }
// else if(numero==3)
// {
//     alert("elegiste a Bart")
// }
// else if(numero==4)
// {
//     alert("elegiste a Lisa")
// }

// //ejercicio 9
// let presupuesto=prompt("ingrese un numero")
// if((presupuesto>0) && (presupuesto<=1000))
// {
//     alert("presupuesto bajo")
// }
// else if((presupuesto>=1000)&&(presupuesto<=3000))
// {
//     alert("presupuesto medio")
// }
// else if((presupuesto>3000))
// {
//     alert("presupuesto alto")
// }
// //ejercicio 10
// let producto1=prompt("ingrese un producto")
// let producto2=prompt("ingrese un producto")
// let producto3=prompt("ingrese un producto")
// let producto4=prompt("ingrese un producto")
// if((producto1!="")&&(producto2!="")&&(producto3!="")&&(producto4!=""))
// {
// let almacen="1) "+producto1 +" " + " \n2) " + producto2 + " " + " \n3) " + producto3 + " " + " \n4) " + producto4
// alert(almacen)
// }
// else
// {
// alert("cargue todos los productos")
// }
//ejemplo 11
// let numero=prompt("ingrese un numero")
// let mensaje=prompt("ingrese un mensaje")
// for (let i = 1; i <= numero; i++) {
//     alert(i + " " + mensaje)
// }
// //ejemplo 12
// let numero1=prompt("ungrese un numero")
// for (let index = 1; index <= numero; index++) {
//     if(index>4)
//     {
//         break
//     }
//     else
//     {
//         alert("lado numero: "+index)
//     }
    
// }
// //ejemplo 13
// let alummno=""
// let listado=""
// for (let index = 1; index < 3; index++) {
// alummno=prompt("ingrese el nombre del alumno")
// listado=listado+"\n"+alummno
// }
// alert(listado)
// //ejemplo 14
// let innombrable=prompt("ingrese un nombre")
// let nombres=""
// while (innombrable!="Voldemort") {
//     nombres=nombres+"\n"+innombrable
//     innombrable=prompt("ingrese un nombre") 
// }
// alert(nombres)
// //ejercicio 15
// let numero2=prompt("ingrese un numero")
// while (numero2!="ESC") {
//     switch (numero2) {
//         case "1":
//             alert("Tomate");
//             break;
//         case "2":
//             alert("Papa");
//             break;
//         case "3":
//             alert("Carne");
//             break;
//         case "4":
//             alert("Pollo")
//             break;
    
//         default:
//             break;
//     }
//     numero2=prompt("ingrese otro valor")
// }
//ejercicio 15
// function entrada() {
//     return prompt("ingrese un valor:")
    
// }
// function procesamiento(valor) {
//     return "el valor ingresado es: "+valor    
    
// }
// function salida(valor) {
//     alert(valor)
// }
// salida(procesamiento(entrada()));

//ejercicio 16
// function redondeo() {
//     let numero=prompt("ingrese un valor decimal :")
//     numero=Math.round(numero);
//     alert(numero);
// }
// for (let index = 0; index < 6; index++) {
//     redondeo();
    
// }
//ejercicio 17
// function impuesto(precio,porcentaje)
// {
//     precio=precio+((precio*porcentaje)/100)
//     alert(precio)
// }
// for (let index = 0; index < 2; index++) {
//     let precio=parseFloat(prompt("ingrese un precio:"))
//     let porcentaje=parseFloat(prompt("ingrese el porcentaje:"))
//     impuesto(precio,porcentaje);
    
// }
//ejercicio 18
// const preciodolar=160;
// let tipo=prompt("ingrese el tipo de moneda: \n1)pesos\n2)dolar") 
// let cantidad=parseFloat(prompt("ingrese la cantidad"))
// switch (tipo) {
//     case "1":
//         let pesos=cantidad*preciodolar;
//         cotizarDolar(pesos)
//         break;
//     case "2":
//         let dolar=cantidad/preciodolar;
//         cotizarPesos(dolar)
//             break;
    
//     default:
//         break;
// }
// function cotizarDolar(pesos) {
//     console.log(pesos);
//     alert("la cantidad de dolares es de:"+pesos)
// }
// function cotizarPesos(dolar) {
//     alert("la cantidad de dolares es de:"+dolar)
// }
//ejercicio 19
// let valor=prompt("ingrese algun valor:")
// while (valor!="ESC") {
//     alert(validacion(valor))
//     valor=prompt("ingrese otro valor")
// }
// function validacion(cadena) {
//     return cadena!='';
// }
// class Tienda
// {
//     constructor(nombre,direccion,propietario,rubro)
//     {
//     this.nombre=nombre;
//     this.direccion=direccion;
//     this.propietario=propietario;
//     this.rubro=rubro;
//     }
// }
// const Tienda1=new Tienda("hola","xxx","juan","libros")
// const Tienda2=new Tienda("hola","xxx","juan","libros")
// const Tienda3=new Tienda("hola","xxx","juan","libros")
// console.log(Tienda1);
// console.log(Tienda2);
// console.log(Tienda3);
// ejercicio 20
// let ingresa=""
// class Tienda
// {
//     constructor(nombre,direccion,propietario,rubro)
//     {
//     this.nombre=nombre;
//     this.direccion=direccion;
//     this.propietario=propietario;
//     this.rubro=rubro;
//     }
// }
// for (let index = 0; index < 2; index++) {
//     let tienda1=new Tienda(
//         prompt("ingrese el nombre de la tienda"),
//         prompt("ingrese el direccion de la tienda"),
//         prompt("ingrese el propietario de la tienda"),
//         prompt("ingrese el nombre de la tienda")
//     );
//     ingresa+=tienda1.nombre+tienda1.direccion+tienda1.propietario+tienda1.rubro+"\n"
//     console.log(tienda1);
    
// }
// alert(ingresa);
//ejercicio 20
// class Tienda
// {
//     constructor(nombre,direccion,propietario,rubro)
//     {
//     this.nombre=nombre;
//     this.direccion=direccion;
//     this.propietario=propietario;
//     this.rubro=rubro;
//     }
//     estaAbierto(hora)
//     {
//         if((hora>=8)&&(hora<=12)||(hora>=15)&&(hora<=19))
//         {
//             return true
//         }
//         else
//         {
//             return false
//         }
//     }
// }
// const tienda1=new Tienda("nombre","direccion","dueño","venta");

// for (let index = 0; index < 3; index++) 
// {
//     let horaactual=parseInt(prompt("ingrese la hora")) 

// if(tienda1.estaAbierto(horaactual))
// {
//     alert("abierta"+horaactual)
// }
// else
// {
//     alert("cerrada"+horaactual)
// }
 
// }
//ejercicio 21
// class Tienda
// {
//     constructor(nombre,direccion,propietario,rubro)
//     {
//     this.nombre=nombre;
//     this.direccion=direccion;
//     this.propietario=propietario;
//     this.rubro=rubro;
//     }
//     esPropietario(nombre){
//        return this.propietario==nombre
//     }
// }
// const tienda1=new Tienda("maxihogar","grafico 2","maxi","venta");
// for (let index = 0; index < 2; index++) {
// let valor=prompt("ingrese el nombre")
// if (tienda1.esPropietario(valor)) {
    
//     alert(valor + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
// }
// else
// {
//     alert("no es propietario")
// }
// }
// //ejercicio 22
// class cliente{
//     constructor(nombre,presupuesto,tarjetadto,telefono)
//     {
//     this.nombre=nombre;
//     this.presupuesto=presupuesto;
//     this.tarjetadto=tarjetadto;
//     this.telefono=telefono;
//     }
//     transferirDinero(valor)
//     {
        
//     }
// }
// const cliente1=new cliente("maxi",5000,0,1234569879)
// const cliente2=new cliente("nico",15000,0,1234569879)
// for (let index = 0; index < 2; index++) {
//     let ingreso=parseFloat(prompt("ingrese numeros:"))
//     if(cliente1.transferirDinero(ingreso))
//     {
//         true
//     }
//     if(cliente2.transferirDinero(ingreso))
//     {
//         true
//     }
// }
//ejercicio 23
// const nombres=["homero","mou","apu","gorgory"]
// for (let index = 0; index < nombres.length; index++) {
//     alert(index + "el jugador es "+ nombres[index])

// }
//ejercicio 24
// let nombre=prompt("ingrese el nombre del jugador");
// const equipo=[];
// while (nombre!='ESC') {
//     equipo.push(nombre);
//     nombre=prompt("ingrese el nombre del jugador")
// }

// for (let index = 0; index < equipo.length; index++) {
//     alert(index+" el jugador es: "+equipo[index])
// }
//ejercicio 25
// class jugador{
//     constructor(nombre,numero,edad,estado)
//     {
//         this.nombre=nombre;
//         this.numero=numero;
//         this.edad=edad;
//         this.estado=estado;
//     }

// }
// const equipo=[];
// equipo.push(new jugador("bart",15,9,"ok"))
// equipo.push(new jugador("milhouse",13,8,"ok"))
// equipo.push(new jugador("rafa",11,9,"mal"))
// equipo.push(new jugador("gay",12,10,"ok"))
// console.log(equipo);
// // ejercicio 26
// function buscarJugador(equipo,jugador) {
//     return equipo.find(objeto=>objeto.nombre===jugador)
// }
// for (let index = 0; index < 3; index++) {
//     let nombre=buscarJugador(equipo,prompt("ingrese el nombre del jugador"));
// if(nombre!=undefined)
//     alert("si")
//     else
//     alert("no")
// }
// // ejercicio 27
// function filtroJugadores(equipo,edad) {
//     return equipo.filter(objeto=>objeto.edad===parseInt(edad));
// }
// function listaJugadores(equipo) 
// {
// let lista='';
// for (const jugador of equipo) {
//     lista+=jugador.nombre + jugador.numero +'edad' + jugador.edad + jugador.estado +'\n';
//     console.log(lista);
// }
// return lista;
// }
// for (let index = 0; index < 5; index++) {
//     let edadjugador=filtroJugadores(equipo,prompt("edad"))
//     if (edadjugador.lenght > 0) {
//         console.log("si")        
//     }
//     else
//     {
//     alert("no")
// }
// 
