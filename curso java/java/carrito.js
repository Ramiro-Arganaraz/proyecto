let Productocarrito=[]

let alarmacarrito=document.createElement("h1")

if (!Productocarrito.length) {
   alarmacarrito.innerText=("Carrito Vacio")
   listacarrito.append(alarmacarrito)
}

function carritodecompras() {    

   alarmacarrito.remove();

   Productocarrito.forEach((productolista)=>{
       const listaproducto=document.createElement("li")
       listacarrito.innerHTML+=`
       <h1>${productolista.nombre}<\h1>
       <h2>${productolista.precio}<\h2>
       `
       listacarrito.append(listaproducto)

   })
   const total=Productocarrito.map((precioproducto)=>parseInt(precioproducto.precio)).reduce((totalprecio,
       currentitemprecio)=>totalprecio+currentitemprecio,0);
       console.log(total);
       let totalcompra=document.createElement("h4");
       totalcompra.innerText=("el total es: "+total);
       listacarrito.append(totalcompra);
       let borrarcarrito=document.createElement("button");
       borrarcarrito.innerText=("Borrar carrito")
       listacarrito.append(borrarcarrito)

       borrarcarrito.onclick=()=>{
       Productocarrito=[]
       listacarrito.innerHTML='';
       console.log(Productocarrito);
       }
}