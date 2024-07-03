//lista de curiosidades
const datos = [
    `Los koalas son marsupiales nativos de Australia y se encuentran principalmente en las regiones del este y sur del país.`,
    `A pesar de su apariencia similar a la de un oso de peluche, los koalas no están relacionados con los osos. Son parientes cercanos de los canguros y los wombats.`,
    `Los koalas son conocidos por alimentarse exclusivamente de hojas de eucalipto. Pueden consumir hasta 1 kilogramo de hojas al día.`,
    `El eucalipto no solo es la principal fuente de alimento para los koalas, sino también donde pasan la mayoría de su tiempo, ya que se alimentan, duermen y se refugian en los árboles de eucalipto.`,
    `Los koalas tienen un sentido del olfato extremadamente agudo, lo que les ayuda a seleccionar las hojas de eucalipto más nutritivas.`,
    `Son animales solitarios y territoriales, excepto durante la temporada de reproducción.`,
    `Los koalas tienen una dieta altamente especializada y su sistema digestivo está adaptado para descomponer y digerir las hojas de eucalipto, que son tóxicas para muchos otros animales.`,
    `Aunque son conocidos por ser criaturas adorables y dóciles, los koalas pueden ser agresivos si se sienten amenazados o acorralados.`,
    `Los koalas son criaturas nocturnas y suelen ser más activos durante la noche.`,
    `Tienen huellas dactilares muy similares a las humanas, lo que ha dificultado la distinción entre huellas de koalas y humanos en la escena del crimen en algunas ocasiones.`,
    `A pesar de su aspecto rechoncho y relajado, los koalas son excelentes trepadores y pueden moverse ágilmente entre los árboles.`,
    `Los koalas se comunican a través de vocalizaciones suaves, como gruñidos, chillidos y gemidos, así como mediante marcas olfativas.`,
    `El periodo de gestación de los koalas es de aproximadamente un mes, después del cual nace una cría que es del tamaño de una judía y continúa desarrollándose en la bolsa marsupial de la madre.`,
    `Los koalas recién nacidos, llamados "joey", permanecen en la bolsa de su madre durante alrededor de seis meses antes de comenzar a aventurarse fuera.`,
    `La principal amenaza para la población de koalas es la pérdida de hábitat debido a la deforestación, así como enfermedades como la clamidia y los ataques de perros domésticos.`
];

//elegir una curiosidad random y ponerlo en el documento
const datoDisplayer = document.getElementById("datoDisplayer");
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function randomDato() {
    var maxDatos = datos.length-1;
    var rando = randomIntegerInRange(0, maxDatos);
    datoDisplayer.innerHTML = datos[rando];
}

randomDato();


