// data para la galería
const fotosGaleria = [
    { archivo: "01.jpg", leyenda: `Koala durmiendo en una rama.` },
    { archivo: "02.jpg", leyenda: `Koala durmiendo entre ramas.` },
    { archivo: "03.png", leyenda: `Koala eligiendo una rama para dormir` },
    { archivo: "04.png", leyenda: `Zzz.` },
    { archivo: "05.png", leyenda: `Koala en la Playa` },
    { archivo: "06.png", leyenda: `Koala decidido.<br>Sí, irá a la playa.` },
    { archivo: "07.png", leyenda: `Koala triste.` },
    { archivo: "08.png", leyenda: `Koala cruzando la calle.` },
    { archivo: "09.png", leyenda: `Koala del otro lado de la calle.` },
    { archivo: "10.png", leyenda: `Koala sospechoso.` },
    { archivo: "11.png", leyenda: `Koala y koalita.` },
    { archivo: "12.png", leyenda: `Koalabuelo.` },
    { archivo: "13.png", leyenda: `Koaleando.` },
    { archivo: "14.png", leyenda: `La mirada del vecino del árbol.` },
    { archivo: "15.png", leyenda: `Lindo verte otra vez.` },
    { archivo: "16.png", leyenda: `Koala nocturna.` },
    { archivo: "17.png", leyenda: `Koala aventurera.` },
    { archivo: "18.png", leyenda: `Koala haciendo cosas de koala.` }];

//construir la galería
let galeria = '';

//let i = 1; para ayudar con la comentación
fotosGaleria.forEach((foto) => {
    galeria += `<figure class="dimmereable galeriaItem">
                    <img src="/img/galeria/${foto.archivo}" alt="${foto.leyenda}">
                    <figcaption>${foto.leyenda}</figcaption>
                </figure>`;
    //i++;
})

//insertar la galería en el documento
document.getElementById("galeriaWrapper").innerHTML = galeria;