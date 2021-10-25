class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarAlCarrito(producto) {
        if (this.productos.length == 0 && localStorage.getItem('carrito') !== null) {
            this.productos = JSON.parse(localStorage.getItem('carrito'));
        }
        this.productos.push(producto);
        localStorage.setItem('carrito', JSON.stringify(this.productos));
        localStorage.setItem('total', JSON.stringify(this.mostrarTotalCarrito()));
    }
    mostrarTotalCarrito() {
        let totalCarrito = 0;
        for (let i = 0; i < this.productos.length; i++) {
            totalCarrito += this.productos[i].precio;
        }
        return totalCarrito;
    }

    ordenar(id) {
        switch (id) {
            case 1:
                carrito.ordenarPrecioMayorMenor();
                for (let producto of this.productos) {
                    this.mostrarProductoEnCarrito(producto);
                }
                break;
            case 2:
                this.ordenarPrecioMenorMayor();
                for (let producto of this.productos) {
                    this.mostrarProductoEnCarrito(producto);
                }
                break;
            default: break;
        }
    }
    ordenarPrecioMayorMenor() {
        this.productos.sort((producto1, producto2) => producto2.precio - producto1.precio);
    }
    ordenarPrecioMenorMayor() {
        this.productos.sort((producto1, producto2) => producto1.precio - producto2.precio);
    }
    vaciarCarrito() {
        localStorage.clear();
        location.reload();
    }
}

//VACIA EL CARRITO
function vaciarCarrito() {
    let carrito = new Carrito();
    carrito.vaciarCarrito();
}
//BORRA UN PRODUCTO DEL CARRITO Y ACTUALIZA EL TOTAL
function borrarProducto(indice) {
    this.productos = JSON.parse(localStorage.getItem('carrito'));
    let o = this.productos.splice(indice, 1);

    let total = Number(JSON.parse(localStorage.getItem('total')));
    total -= Number(o[0].precio);

    if (total == 0)
        vaciarCarrito();
    else {
        localStorage.setItem('total', JSON.stringify(total));
        localStorage.setItem('carrito', JSON.stringify(this.productos));
        location.reload();
    }

}

//CUANDO CARGA LA PAGINA, SI HAY PRODUCTOS EN EL CARRITO LOS MUESTA EN EL HTML
function onload() {
    let carrito = localStorage.getItem('carrito');
    if (carrito !== null) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        let tabla = document.getElementById('table-body');
        let fila;
        for (const obra of carrito) {
            fila = document.createElement('tr');
            fila.innerHTML =
                `<th scope="row">${obra.idObra}</th>
                        <td>${obra.nombre}</td>
                        <td>${'no implementado aun'}</td>
                        <td>$${obra.precio}</td>
                        <td> <a onclick="borrarProducto(${carrito.indexOf(obra)})"> <i class="fas fa-trash-alt"></i></a></td>`;
            tabla.appendChild(fila);
        }
        fila = document.createElement('tr');
        fila.innerHTML = `<th scope="row"></th>
                        <td></td>
                        <td>Total Carrito</td>
                        <td>$${localStorage.getItem('total')}</td>`;
        tabla.appendChild(fila);
        fila = document.createElement('tr');
        fila.innerHTML = `<th scope="row"></th>
                        <td></td>
                        <td>Vaciar Carrito</td>
                        <td><button onclick="vaciarCarrito()">Vaciar</button></td>`;
        tabla.appendChild(fila);
    }
}
