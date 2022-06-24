let cuota = 0
let dto = 0
let subtotal=0

let vercarrito=document.getElementById("vercarrito")
let verTodo=document.getElementById("verTodo")
let Productocarrito=[]

mostrarProductos()    
    function mostrarProductos() {
        producto.forEach((product) => {
            let card=document.createElement("div");
            card.setAttribute("class","hora")
            verTodo.append(card);
            let nombre=document.createElement("h1");
            nombre.innerText=(product.nombre)
            let precio=document.createElement("h2");
            precio.innerText=(product.precio)
        
            let botoncompra=document.createElement("button");
            botoncompra.innerHTML=("agregar")
        
            verTodo.append(nombre,precio,botoncompra)

            botoncompra.addEventListener("click",function () {
            Productocarrito.push(product);
            listacarrito.innerHTML=``
            console.log(product);
            
            carritodecompras()
            })
        });
    }

    
 // carrito

 let carritoproducto=document.getElementById("carritoproducto")
 let listacarrito=document.getElementById("listacarrito")
let vertotal=document.getElementById("vertotal")

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
vercarrito.onclick=()=>{
    //window.location=("carrito.html")
    listacarrito.innerHTML=``
    carritodecompras()
}

function terminarcompra() {

    class personas{
        constructor(nombre,telefono,direccion){
            this.nombre=nombre;
            this.telefono=telefono;
            this.direccion=direccion;
        }
    }
    let nombre=document.getElementById("nombre")
    let telefono=document.getElementById("telefono")
    let direccion=document.getElementById("direccion")

    if ((nombre.value=null)&&(telefono.value=null)&&(direccion.value=null)) {
        let usuario=new personas(nombre.value,telefono.value,direccion.value)
        console.log(Productocarrito);
        console.log(usuario);
    }
    else
    {
        alert("faltan datos")
    }
}
let comprar=document.getElementById("comprar")    

comprar.onclick=(e)=>{
    e.preventDefault();
    terminarcompra();
}

    

    // let card=document.createElement("div");
        // verTodo.append(card);
        // verTodo.innerHTML+=`<h1>${product.nombre}<\h1>
        // <h2>${product.precio}<\h2>
        // <input type= "button" id="agrega" value="Agregar producto al carrito" >
        // `
        // verTodo.append(card)
        // let agrega=document.getElementById("agrega")
        // agrega.addEventListener("click", function () {
        //     Productocarrito.push(product);
        //     console.log(product.nombre);
