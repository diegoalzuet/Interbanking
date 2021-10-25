new universalParallax().init({
    speed: 20.0
});

function cambiarFlecha() {
    let boton = document.getElementById('btn-mas-menos');
    if (boton.innerHTML == '<i class="fas fa-angle-double-down"></i>') {
        boton.innerHTML = '<i class="fas fa-angle-double-up"></i>';
    }
    else
        boton.innerHTML = '<i class="fas fa-angle-double-down"></i>';
}

$("#btn-mas-menos").click(() => {
    $("#mas-obras").toggle("slow", function () {
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aca").offset().top});

            let boton = document.getElementById('btn-mas-menos');
        if (boton.innerHTML == '<i class="fas fa-angle-double-down"></i>') {
            boton.innerHTML = '<i class="fas fa-angle-double-up"></i>';
        }
        else{
            boton.innerHTML = '<i class="fas fa-angle-double-down"></i>';
        }
    });
}
);