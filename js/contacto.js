// Muestra los campos obligatorios
function mostrarObligatorios() {
    var obligatorymarker = document.getElementsByClassName("obligatorymarker");
    for (var i = 0; i < obligatorymarker.length; i++) {
        obligatorymarker[i].style.display = "block";
    }
}

//validación de la fórmula (hay algo en cada input?)
function valideishan() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var origen = document.getElementById("origen").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre != '' && apellido != '' && email != '' && mensaje != '' && origen != '') {
        document.formie.submit();
    } else {
        mostrarObligatorios();
    }
}