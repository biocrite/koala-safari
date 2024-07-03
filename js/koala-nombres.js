//nombres posibles
const nombres = [
    "Paco",
    "Lola",
    "Pepe",
    "Anto",
    "Panchis",
    "Rosa",
    "Nachito",
    "Juanita",
    "Chico",
    "Caramelito",
    "Migue",
    "Marisol",
    "Dieguis",
    "Esperanza",
    "Matecito",
    "Palomita",
    "Coco",
    "Paz",
    "Rodri",
    "Bella",
    "Lolô" ];

//apellidos posibles
const apellidos = [
    "Peluchelli",
    "Arbóreo",
    "Abrazón",
    "Eucalipso",
    "Marsupialini",
    "Ramero",
    "Hojaflora",
    "Tiernolino",
    "Eucaliptón",
    "Coálito",
    "Tronquerrez",
    "Dormilón",
    "Acaricioli",
    "Ramalejo",
    "Abracín",
    "Eupawso",
    "Peludín",
    "Guindolfo",
    "Nodador",
    "Raízabrigo"
];

//generar un nombre random y ponerlo en el documento
const datoDisplayer = document.getElementById("datoDisplayer");
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function randomDato() {
    var maxNombres = nombres.length-1;
    var maxApellidos = apellidos.length-1;
    var nombreRandom = randomIntegerInRange(0, maxNombres);
    var apellidoRandom = randomIntegerInRange(0, maxApellidos);
    var colorRandom = Math.floor(Math.random()*16777215).toString(16);

    datoDisplayer.innerHTML = `<span class="koala-nombre">${nombres[nombreRandom]}</span><br><span class="koala-apellido" style="color:#${colorRandom}"> ${apellidos[apellidoRandom]} </span>`;
}

randomDato();


