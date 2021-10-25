// CREO EL FORMULARIO CON JQUERY Y LO INSERTO DENTRO DEL DIV CON ID "div-formulario-js"
$("#div-formulario-js").append(`<form id="formulario-mensaje">
<div class="form-row d-flex py-2">
    <div class="col px-2">
        <input id="input-nombre" type="text" class="form-control" placeholder="Nombre" required>
    </div>
    <div class="col px-2">
        <input type="text" class="form-control" placeholder="Apellido" required>
    </div>
</div>
<div class="form-row d-flex py-2">
    <div class="col px-2">
        <input type="text" class="form-control" placeholder="Telefono">
    </div>
    <div class="col px-2">
        <input type="text" class="form-control" placeholder="Email" required>
    </div>
</div>
<div class="form-row d-flex py-2">
    <div class="col px-2">
        <textarea id="txt-area-mensaje" class="form-control" name="textarea" placeholder="Deja tu mensaje" required></textarea>
    </div>
</div>
<div class="form-row">
    <div class="col px-2 text-center">
        <button type="submit" class="btn btn-primary rounded ">Enviar Mensaje</button>
    </div>
</div>
</form>`);

$("#formulario-mensaje").submit(function(e){
    e.preventDefault();
   console.log(`Mensaje de ${$("#input-nombre").val()} enviado. Mensaje:${$("#txt-area-mensaje").val()}`);
   alert(`Gracias ${$("#input-nombre").val()} por tu mensaje. Podes ver el mensaje enviado por consola`); 
   $("#formulario-mensaje")[0].reset();
})
