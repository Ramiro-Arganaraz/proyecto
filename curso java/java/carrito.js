
if(JSON.parse(localStorage.getItem('Productocarrito')))
{
    Productocarrito=JSON.parse(localStorage.getItem('Productocarrito'))
}
else
{
    localStorage.setItem('Productocarrito',JSON.stringify([]))
    Productocarrito=JSON.parse(localStorage.getItem('Productocarrito'))
}

const totalcompra=()=>{
    return Productocarrito.reduce((aux,productoencarrito)=>aux+productoencarrito.precio*productoencarrito.cantidad,0)
}




const cuerpo=document.getElementById("carrito")

 if (!Productocarrito.length) {
    let alarmacarrito=`
    <div>
    <h1 id="texto">Carrito vacio</h1>
    <a class="volver" href="curso1.html">
    <button>volver</button>
    </a>
    <div>`
    cuerpo.innerHTML+=alarmacarrito;
 }
 else
 {
    const table=`
    <div>
        <table id="tabla" class="center table-hover">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Productos</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody id='tbody'>
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row"></th>
                    <th></th>
                    <th>Total</th>
                    <th id="total">$${totalcompra().toLocaleString()}</th>
                </tr>
            </tfoot>
        </table>
        <div id="opciones">
        <a class="volver" href="curso1.html">
        <button id="volver">volver</button>
        </a>
        <button id="borrarcarrito">Borrar Todo</button>
        </div>
    </div>
    `
    cuerpo.innerHTML+=table;
    const tbody=document.getElementById("tbody")
    Productocarrito.forEach( productos => {
        const element=productos;
        const {id,nombre,precio,cantidad}=element;
        const cart=`
        <tr scope="row" id=${id}>
        <th></th>
        <th>${nombre}</th>
        <th>${cantidad}</th>
        <th>$${(cantidad*precio).toLocaleString()}</th>
        </tr>
        `
        tbody.innerHTML+=cart;
    });
            
        borrarcarrito.onclick=()=>{
        Productocarrito=[]
        localStorage.clear();
        console.log(Productocarrito);
        window.location=("carrito.html")
        }
        
 }
const form=document.getElementById("form")
 const formulario=`
        <form id="formulario">
        <p>Ingrese su nombre</p>
            <input type="text" id="nombre" placeholder="ingrese tu nombre">
            <br>
            <p>Ingrese su numero de telefono</p>
            <input type="number" id="telefono" placeholder="telefono">
            <br>
            <p>Ingrese su domicilio</p>
            <input type="text" id="direccion" placeholder="direccion">

            <input type="button" id="comprar" value="comprar">
        </form>`;
        form.innerHTML=formulario;

        
 
function terminarcompra(){
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
    
    if (!Productocarrito.length) 
        {
            alert("no hay productos en el carrito")
        }
        else
        {
            if((nombre.value=null)&&(telefono.value=null)&&(direccion.value=null)) {
                alert("faltan datos")
            }
            else
            {
                
                let usuario=new personas(nombre.value,telefono.value,direccion.value)
                console.log(Productocarrito);
                console.log(usuario);
                alert("compra realizada con exito")
                localStorage.clear();
                Productocarrito=[]
                window.location=("curso1.html")
            }
        }
    
    
    



}
let comprar=document.getElementById("comprar")    

comprar.onclick=(e)=>{
    e.preventDefault();
    terminarcompra();
}