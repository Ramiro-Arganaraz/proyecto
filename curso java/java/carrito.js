
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

Productocarrito.length===0 && console.log("carrito vacio");

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
        <th><button onclick="borrarproducto(${id})" >borrar</th>
        <th>${nombre}</th>
        <th>${cantidad}</th>
        <th>$${(cantidad*precio).toLocaleString()}</th>
        </tr>
        `
        tbody.innerHTML+=cart;
        
    });
    function buscarIdProducto(id)
        {
        const idBuscado = Productocarrito.find((idBuscado) => Number(idBuscado.id) === id);
        return (resultadoBusqueda = idBuscado);
        };
    function borrarproducto(id)
        {
            const productoporeliminar=buscarIdProducto(id);
            const indice=Productocarrito.indexOf(productoporeliminar);
            Productocarrito.splice(indice, 1);
            localStorage.setItem("Productocarrito",JSON.stringify(Productocarrito));
            location.reload();
        }

        borrarcarrito.onclick=()=>{
            
        Swal.fire({
            title: 'desea eliminar el carrito?',
            text: "no se puede revertir este paso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI'
          }).then((result) => {
            if (result.isConfirmed) {
                Productocarrito=[]
                localStorage.clear();
                console.log(Productocarrito);
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              ).then(()=>{
                window.location=("carrito.html")
              })
              
            }
          })

        
        }
        
 }
const form=document.getElementById("form")
 const formulario=`
        <form id="formulario">
        <p>Ingrese su nombre</p>
            <input type="text" id="nombreu" placeholder="ingrese tu nombre">
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
        constructor(nombreu,telefono,direccion){
            this.nombreu=nombreu;
            this.telefono=telefono;
            this.direccion=direccion;
        }
    }
    let nombreu=document.getElementById("nombreu")
    let telefono=document.getElementById("telefono")
    let direccion=document.getElementById("direccion")
    
    let usuario=new personas(nombreu.value,telefono.value,direccion.value)
    
    if (!Productocarrito.length) 
        {
            alert("no hay productos en el carrito")
        }
        else
        {
            if((nombreu.value=null)||(telefono.value=null)||(direccion.value=null)) {
                alert("faltan datos")
            }
            else
            {
                console.log(Productocarrito);
                console.log(usuario);
                const dia= moment().format('LLL')
                
                let venta=JSON.stringify(Productocarrito)+JSON.stringify(usuario)
                
                Swal.fire({
                    title: 'Genera la compra de todo?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'SI'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        
                      Swal.fire(
                        'Compra Exitosa!',
                        'Vuelva cuando desee.',
                        'success'
                        
                      ).then(()=>{
                        console.log(venta + dia);
                        Productocarrito=[]
                        localStorage.clear();
                        console.log(Productocarrito);
                        window.location=("carrito.html")
                      })
                    
                    }
                })

            }
        }
    
    
    



}
let comprar=document.getElementById("comprar")    

comprar.onclick=(e)=>{
    e.preventDefault();
    terminarcompra();
}