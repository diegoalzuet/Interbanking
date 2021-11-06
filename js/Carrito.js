//     agregarAlCarrito(producto) {
//         if (localStorage.getItem('carrito') !== null && (this.productos.length == 0)) {

//                 const enStorage = JSON.parse(localStorage.getItem('carrito'));
//                 for (const objeto of enStorage) {
//                     this.productos.push(new ObraDeArte(objeto));
//             }
//         }
//         this.productos.push(producto);

//         //CREO UN NUEVO ARRAY SIN DUPLICADOS
//         const productosSinDuplicados = [...new Set(this.productos)];

//         productosSinDuplicados.forEach((item) => {
//             const obra = this.productos.filter((obraEnProductos) => {
//                 return obraEnProductos === item;
//             })
//             localStorage.setItem(`${obra[0].idObra}`,obra.length);
//         });

//         // localStorage.setItem('carrito', JSON.stringify(this.productos));
//         localStorage.setItem('carrito', JSON.stringify(productosSinDuplicados))
//         localStorage.setItem('total', JSON.stringify(this.mostrarTotalCarrito()));
//     }
//     mostrarTotalCarrito() {
//         let totalCarrito = 0;
//         for (let i = 0; i < this.productos.length; i++) {
//             totalCarrito += this.productos[i].precio;
//         }
//         return totalCarrito;
//     }

//     ordenar(id) {
//         switch (id) {
//             case 1:
//                 carrito.ordenarPrecioMayorMenor();
//                 for (let producto of this.productos) {
//                     this.mostrarProductoEnCarrito(producto);
//                 }
//                 break;
//             case 2:
//                 this.ordenarPrecioMenorMayor();
//                 for (let producto of this.productos) {
//                     this.mostrarProductoEnCarrito(producto);
//                 }
//                 break;
//             default: break;
//         }
//     }
//     ordenarPrecioMayorMenor() {
//         this.productos.sort((producto1, producto2) => producto2.precio - producto1.precio);
//     }
//     ordenarPrecioMenorMayor() {
//         this.productos.sort((producto1, producto2) => producto1.precio - producto2.precio);
//     }


class Carrito {
    constructor() {
        this.productos = [];
    }

    mostrarCarrito() {
        let acumulador = ``;
        this.productos.forEach(obra => {
            acumulador += `<tr>
                            <th scope="row">${obra.idObra}</th>
                            <td>${obra.nombre}</td>
                            <td>${obra.cantidad}</td>
                            <td>$${obra.precio}</td>
                            <td>$${obra.precio * obra.cantidad}</td>
                            <td> <a onclick="carrito.borrarProductoDelCarrito(${obra.idObra})"> <i class="fas fa-trash-alt"></i></a></td>
                        </tr>`;
        });
        acumulador += `<tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td>Total Carrito</td>
                        <td>$${this.calcularTotal()}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td><button class="btn rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Pagar</button></td>
                        <td><button class="btn rounded" onclick="carrito.vaciarCarrito()">Vaciar Carrito</button></td>
                    </tr>`;
        document.getElementById("table-body").innerHTML = acumulador;
    }
    calcularTotal() {
        let total = 0;
        this.productos.forEach(obra => { total += obra.precio * obra.cantidad })
        return total;
    }

    borrarProductoDelCarrito(id) {

        const indice = this.productos.findIndex(obra => obra.idObra === id);
        if (indice >= 0) {
            let obraABorrar = this.productos.splice(indice, 1);
            // console.log(obraABorrar[0]);
            // prompt()
            localStorage.totalCarrito= JSON.stringify(JSON.parse(localStorage.totalCarrito)-obraABorrar[0].cantidad);
            this.productos.length > 0 ? localStorage.carrito = JSON.stringify(this.productos) : this.vaciarCarrito();
            location.reload();
        }
    }
    vaciarCarrito() {
        localStorage.clear();
        location.reload();
    }
}

const carrito = new Carrito();
if (localStorage.carrito) {
    carrito.productos = JSON.parse(localStorage.carrito);
    carrito.mostrarCarrito();
}
