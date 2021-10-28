//HACE UNA PETICION GET PARA OBTENER LAS OBRAS DEL EL ARCHIVO  "ObrasDeArte.json"
const obrasDeArte = [];
const URL_OBRAS_DE_ARTE = '../js/ObrasDeArte.json';

$.getJSON(URL_OBRAS_DE_ARTE, (respuesta, estado) => {
    if (estado === "success") {
        for (const obra of respuesta) {
            obrasDeArte.push(new ObraDeArte(obra));
            obrasDeArte[obrasDeArte.length - 1].agregarAlDOM();
        }
    }
});

//AGREGA AL CARRITO LA OBRA SELECCIONADA 
function agregarAlCarrito(id) {
    carrito.agregarAlCarrito(obrasDeArte[id]);
}

const carrito = new Carrito();
