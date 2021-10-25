class ObraDeArte {
    // constructor(id, nombre, tipoObra, tecnicaAplicada, precio) {
    //     this.idObra = id;
    //     this.nombre = nombre;
    //     this.tipoObra = tipoObra;
    //     this.tecnicaAplicada = tecnicaAplicada;
    //     this.precio = precio;
    // }

    constructor(obj){
        this.idObra = obj.idObra;
        this.nombre = obj.nombre;
        this.tipoObra = obj.tipoObra;
        this.tecnicaAplicada = obj.tecnicaAplicada;
        this.precio = parseFloat(obj.precio);
    }
    //INICIALIZA CON VALORES ALEATORIOS EL CATALOGO DE OBRAS A VENDER
    agregarAlCatalogo() {
        let div = document.getElementById('div-row');
        let contenedor = document.createElement("div");
        contenedor.className = 'col-4';
        contenedor.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="../img/arte4.jpg" class="card-img" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">${this.nombre}</h5>
                                                <p class="card-text">${this.tipoObra}</p>
                                                <p class="card-text">${this.tecnicaAplicada}</p>
                                                <p class="card-text">$${this.precio}</p>
                                                <button id=${this.idObra} onclick="agregarAlCarrito(this.id)">Agregar a carrito</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
        div.appendChild(contenedor);
    }
}
