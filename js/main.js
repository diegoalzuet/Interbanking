
const miTienda = new Tienda();
miTienda.cargarCatalago();

if (localStorage.carrito){
    miTienda.carrito = JSON.parse(localStorage.carrito);
    miTienda.totalCarrito=JSON.parse(localStorage.totalCarrito);
    miTienda.actualizarCantidadProductos();
}

