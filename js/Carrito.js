class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarAlCarrito(producto) {
        if (localStorage.getItem('carrito') !== null && (this.productos.length == 0)) {
           
                const enStorage = JSON.parse(localStorage.getItem('carrito'));
                for (const objeto of enStorage) {
                    this.productos.push(new ObraDeArte(objeto));
            }
        }
        this.productos.push(producto);
       
        //CREO UN NUEVO ARRAY SIN DUPLICADOS
        const productosSinDuplicados = [...new Set(this.productos)];

        productosSinDuplicados.forEach((item) => {
            const obra = this.productos.filter((obraEnProductos) => {
                return obraEnProductos === item;
            })
            localStorage.setItem(`${obra[0].idObra}`,obra.length);
        });

        // console.log(productosSinDuplicados)s

        // localStorage.setItem('carrito', JSON.stringify(this.productos));
        localStorage.setItem('carrito', JSON.stringify(productosSinDuplicados))
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
            let cantidad = localStorage.getItem(obra.idObra );
            fila = document.createElement('tr');
            fila.innerHTML =
                `<th scope="row">${obra.idObra}</th>
                        <td>${obra.nombre}</td>
                        <td>${cantidad}</td>
                        <td>$${obra.precio}</td>
                        <td>$${obra.precio*cantidad}</td>
                        <td> <a onclick="borrarProducto(${carrito.indexOf(obra)})"> <i class="fas fa-trash-alt"></i></a></td>`;
            tabla.appendChild(fila);
        }
        fila = document.createElement('tr');
        fila.innerHTML = `<th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td>Total Carrito</td>
                        <td>$${localStorage.getItem('total')}</td>`;
        tabla.appendChild(fila);
        fila = document.createElement('tr');
        fila.innerHTML = `<th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td>Vaciar Carrito</td>
                        <td><button onclick="vaciarCarrito()">Vaciar</button></td>`;
        tabla.appendChild(fila);
    }
}
