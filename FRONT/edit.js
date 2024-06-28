document.addEventListener("DOMContentLoaded", ()=>{

    //identificar formulario
    const formulario = document.querySelector("#form-edtar-posteo");

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
})

