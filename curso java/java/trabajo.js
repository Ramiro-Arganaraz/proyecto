let cuota = 0
let dto = 0
let subtotal=0

let vercarrito=document.getElementById("vercarrito")
let verTodo=document.getElementById("verTodo")

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
            botoncompra.setAttribute("id",product.id)
            botoncompra.innerHTML=("agregar")
        
            verTodo.append(nombre,precio,botoncompra)

            botoncompra.addEventListener("click",function (e) {
            const boton=e.target;
            const idBoton=boton.getAttribute("id")
            const productoencontrado=producto.find(prod=>prod.id==idBoton)
            const encarrito=Productocarrito.find(prod=>prod.id==productoencontrado.id)
            if(!encarrito)
            {
                Productocarrito.push({...productoencontrado, cantidad:1})
            } 
            else
            {
                let carritofiltrado= Productocarrito.filter(product=>product.id!=encarrito.id)
                Productocarrito=[...carritofiltrado,{...encarrito,cantidad:encarrito.cantidad+1}]
            }
            console.log(Productocarrito);
            localStorage.setItem('Productocarrito',JSON.stringify(Productocarrito))
            console.log(product);
            })
        });
    }

vercarrito.onclick=()=>{
    window.location=("carrito.html")
}