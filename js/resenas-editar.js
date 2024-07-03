document.addEventListener("DOMContentLoaded", () => {

    //identificar formulario
    const formulario = document.querySelector("#form-editar-resena");

    //agarrar el query-string del URL
    const parametrosURL = new URLSearchParams(window.location.search);
    const IdComentario = parametrosURL.get("id");

    //buscar el comentario en la base de datos
    const fetchComentario = async (id) => {

        try {

            const respuesta = await axios.get(`http://localhost:3030/posteos/${id}`);
            const comentario = respuesta.data;

            document.querySelector("#nombre").value = comentario.nombre;
            document.querySelector("#paquete").value = comentario.paquete;
            document.querySelector("#valoracion").value = comentario.valoracion;
            document.querySelector("#comentario").value = comentario.comentario;

        } catch (error) {
            console.log("Error. No se pudo obtener el comentario.");
        }
    }

    fetchComentario(IdComentario);

    // función de edición de comentario
    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        //establecer la fecha de hoy
        const hoy = new Date();
        var yyyy = hoy.getFullYear();
        var mm = hoy.getMonth() + 1;
        if (mm < 10) { mm = '0' + mm };
        var dd = hoy.getDate();
        if (dd < 10) { dd = '0' + dd };
        const fechaDeHoy = yyyy + "-" + mm + "-" + dd;

        const actualizarComentario = {
            nombre: document.querySelector("#nombre").value,
            paquete: document.querySelector("#paquete").value,
            valoracion: document.querySelector("#valoracion").value,
            comentario: document.querySelector("#comentario").value,
            fecha: fechaDeHoy
        };

        try {
            await axios.put(`http://localhost:3030/posteos/${IdComentario}`, actualizarComentario);
            window.location.href = "resenas.html";
        } catch (error) {
            console.log("Error. No se pudo editar el comentario.");
        }
    })

})