//GENERA ALEATORIAMENTE UN ARRAY DE OBRAS 
const crearObraDeArteAleatoria = () => {
    // console.log('Obras Generadas Aleatoriamente');
    //let cantidadObras = 7;//parseInt(prompt('Cuantas obras de arte aleatorias quiere generar aleatoriamente en el arreglo?'));
// const obrasDeArte = [];
    // for (let indice = 0; indice < cantidadObras; indice++) {
    //     obrasDeArte.push(new ObraDeArte(obrasDeArte.length, 'Obra n°' + indice, 'Tipo de Obra Generica', 'Tecnica Aplicada Generica', Math.round(10000 * Math.random())));
    // }

    
    const obrasDeArte = 
    [{ idObra:0, nombre: 'Obra de arte JSON 0', tipoObra: 'Tipo de obra JSON', tecnicaAplicada: 'Tecnica Aplicada JSON', precio: 1200 },
    { idObra: 1, nombre: 'Obra de arte JSON 1', tipoObra: 'Tipo de obra JSON', tecnicaAplicada: 'Tecnica Aplicada JSON', precio: 3200 },
    { idObra: 2, nombre: 'Obra de arte JSON 2', tipoObra: 'Tipo de obra JSON', tecnicaAplicada: 'Tecnica Aplicada JSON', precio: 5400 },
    { idObra: 3, nombre: 'Obra de arte JSON 3', tipoObra: 'Tipo de obra JSON', tecnicaAplicada: 'Tecnica Aplicada JSON', precio: 7600 },
    { idObra: 4, nombre: 'Obra de arte JSON 4', tipoObra: 'Tipo de obra JSON', tecnicaAplicada: 'Tecnica Aplicada JSON', precio: 9600 },
    { idObra: 5, nombre: 'Obra de arte JSON 5', tipoObra: 'Tipo de obra JSON', tecnicaAplicada: 'Tecnica Aplicada JSON', precio: 6200 },
    { idObra: 6, nombre: 'Obra de arte JSON 6', tipoObra: 'Tipo de obra JSON', tecnicaAplicada: 'Tecnica Aplicada JSON', precio: 7120 },
    { idObra: 7, nombre: 'Obra de arte JSON 7', tipoObra: 'Tipo de obra JSON', tecnicaAplicada: 'Tecnica Aplicada JSON', precio: 12900 }];

    const obras =[];
    for(const obra of obrasDeArte){
        obras.push(new ObraDeArte(obra));
    }

    return obras;
}
//MUESTRA EN LA SECCION CATALO DEL HTML LAS OBRAS GENERADAS ALEATORIAMENTE 
function cargarCatalogo(obras) {
    for (const obra of obras) {
        obra.agregarAlCatalogo();
    }
}
//AGREGA AL CARRITO LA OBRA SELECCIONADA Y LA MUESTRA EN LA SECCION CORRESPONDIENTE
function agregarAlCarrito(id) {
    console.log(obras[id]);
    carrito.agregarAlCarrito(obras[id]);
}

//LE ASIGNO AL SELECT EL EVENTO CHANGE PARA ORDENAR POR PRECIO EL CARRITO
// let select = document.getElementById('selectOrdenar');
// select.addEventListener('change', (e) => carrito.ordenar(Number(e.target.value)));
// //LE ASIGO AL BOTON EL EVENTO CLICK PARA VACIAR EL CARRITO
// let button = document.getElementById('vaciarCarrito');
// button.addEventListener('click', () => carrito.vaciarCarrito());


const obras = crearObraDeArteAleatoria();
const carrito = new Carrito();
//  carrito.obtenerCarritoDelStorage();
cargarCatalogo(obras);
