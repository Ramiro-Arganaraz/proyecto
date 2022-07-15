
// local storage
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