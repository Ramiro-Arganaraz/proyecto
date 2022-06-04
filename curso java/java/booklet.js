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
let numero=prompt("ingrese un numero")
let mensaje=prompt("ingrese un mensaje")
for (let i = 1; i <= numero; i++) {
    alert(i + " " + mensaje)
}
//ejemplo 12
let numero1=prompt("ungrese un numero")
for (let index = 1; index <= numero; index++) {
    if(index>4)
    {
        break
    }
    else
    {
        alert("lado numero: "+index)
    }
    
}
//ejemplo 13
let alummno=""
let listado=""
for (let index = 1; index < 3; index++) {
alummno=prompt("ingrese el nombre del alumno")
listado=listado+"\n"+alummno
}
alert(listado)
//ejemplo 14
let innombrable=prompt("ingrese un nombre")
let nombres=""
while (innombrable!="Voldemort") {
    nombres=nombres+"\n"+innombrable
    innombrable=prompt("ingrese un nombre") 
}
alert(nombres)
//ejercicio 15
let numero2=prompt("ingrese un numero")
while (numero2!="ESC") {
    switch (numero2) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo")
            break;
    
        default:
            break;
    }
    numero2=prompt("ingrese otro valor")
}
