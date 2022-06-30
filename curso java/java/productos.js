
let producto=[
{
    id:1,
    nombre:"ladrillo",
    precio:"50",
    cantidad:1
},
{
    id:2,
    nombre:"cemento",
    precio:"100",
    cantidad:1
},
{
    id:3,
    nombre:"hierro",
    precio:"70",
    cantidad:1
},
{
    id:4,
    nombre:"fino",
    precio:"80",
    cantidad:1
}
]
let Productocarrito;
if(JSON.parse(localStorage.getItem('Productocarrito')))
{
    Productocarrito=JSON.parse(localStorage.getItem('Productocarrito'))
}
else
{
    localStorage.setItem('Productocarrito',JSON.stringify([]))
    Productocarrito=JSON.parse(localStorage.getItem('Productocarrito'))
}