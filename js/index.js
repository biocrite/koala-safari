/* DOMContentLoaded para asegurar que el script se ejecute después de que el DOM se haya cargado completamente. */
document.addEventListener("DOMContentLoaded", () => {

    // obtener el cuerpo de la tabla donde se muestran los posteos
    const bodyTablaPosteos = document.querySelector("#body-tabla-posteos")

    // obtener el formulario para crear un nuevo posteo
    const formNuevoComentario = document.querySelector("#form-crear-posteo");

    /* funcion para obtener los datos de la API usando Axios */
    const fetchComentarios = async () => {
        try {
            const respuesta = await axios.get(`http://localhost:3030/posteos`)
            console.log(respuesta.data);
            const posteos = respuesta.data

            /*     limpiar la tabla antes de agregar los nuevos datos */
            bodyTablaPosteos.innerHTML = ""

            // interar sobre los datos y agregar los nuevos datos
            posteos.forEach(posteo => {


                /* crear una nueva fila */
                const fila = document.createElement("tr");


                // crear celdas para el titulo , contenido y acciones
                const celdaFecha = document.createElement("td");
                const celdaNombre = document.createElement("td");
                const celdaPaquete = document.createElement("td");
                const celdaValoracion = document.createElement("td");
                const celdaComentario = document.createElement("td");
                const celdaAcciones = document.createElement("td");


                // asignar el contenido de las celdas
                celdaFecha.textContent = posteo.fecha;
                celdaNombre.textContent = posteo.nombre;
                celdaPaquete.textContent = posteo.paquete;
                celdaValoracion.textContent = posteo.valoracion + " / 5";
                celdaComentario.textContent = posteo.comentario;


                // crear boton de eliminar
                const botonEliminar = document.createElement("button")
                botonEliminar.textContent = "Eliminar";
                botonEliminar.addEventListener("click", () => { borrarComentario(posteo.id) });

                // crear boton para editar
                const botonEditar = document.createElement("button")
                botonEditar.textContent = "Editar"
                botonEditar.addEventListener("click", () => {
                    //redirigir a la pagina de edicion
                    window.location.href = `edit.html?id=${posteo.id}`
                })
                // agregar los botones a la celda de acciones
                celdaAcciones.appendChild(botonEliminar)
                celdaAcciones.appendChild(botonEditar)

                // agregar las celdas a la fila
                fila.appendChild(celdaFecha);
                fila.appendChild(celdaNombre);
                fila.appendChild(celdaPaquete);
                fila.appendChild(celdaValoracion);
                fila.appendChild(celdaComentario);
                fila.appendChild(celdaAcciones);

                // agregar la fila al cuerpo de la tabla
                bodyTablaPosteos.appendChild(fila)
            })


        } catch (error) {
            console.error("Error para cargar de la base de datos.", error)
        }
    }
    // FUNCIÓN BORRAR
    const borrarComentario = async (id) => {
        try {
            await axios.delete(`http://localhost:3030/posteos/${id}`);
            fetchComentarios()
        } catch (error) {
            console.error("Error para borrar el comentario.", error)
        }
    }

    formNuevoComentario.addEventListener("submit", async function (event) {
        event.preventDefault();

        //establecer la fecha de hoy
        const hoy = new Date();
        var yyyy = hoy.getFullYear();
        var mm = hoy.getMonth() + 1;
        if (mm < 10) {mm = '0' + mm};
        var dd = hoy.getDate();
        if (dd < 10) {dd = '0' + dd};
        const fechaDeHoy = yyyy + "-" + mm + "-" + dd;

        const nuevoComentario = {
            fecha: fechaDeHoy,
            nombre: document.querySelector("#nombre").value,
            paquete: document.querySelector("#paquete").value,
            valoracion: document.querySelector("#valoracion").value,
            comentario: document.querySelector("#comentario").value
        };

        try {
            await axios.post(`http://localhost:3030/posteos/`,nuevoComentario);
            formNuevoComentario.reset();
            fetchComentarios();
            console.log("enviando!");
        } catch (error) {
            console.log("Error a la hora de enviar el comentario.");
        }
    });


    //llamar a la funcion para obtener y mostrar los posteos al cargar la pagina
    fetchComentarios();
})