//ejemplo 3
// let numero=prompt("ingrese un numero")
// let numero1=0
//  for (let index = 0; index < numero; index++) {
//      console.log("hola");
//  }
// while (numero1!=numero) {
//     console.log("hola while");
//     numero1++;
    
// }
//ejemplo 1
// let numero2=prompt("ingrese un numero")
// let resultado=0
// do {
//     resultado=parseInt(resultado)+parseInt(numero2);    
//     if (resultado<=50) {
//         alert(resultado);
//     numero2=prompt("ingrese otro numero")
//     } else {
//         alert("numero mayor a limite")
//         break    
//     }
// } while (parseInt(numero2))
//ejemplo 2
let texto =prompt("ingrese algo")
let txt=""
while (texto!="ESC") {
    txt=txt+"\n"+texto;
    console.log(texto);
    alert(txt);
    texto=prompt("ingrese nuevamente")
}

