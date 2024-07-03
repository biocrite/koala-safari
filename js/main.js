//-------------------------------//
//-------FAV ICON & STYLES-------//
//-------------------------------//

function setHeadItems(elementType, relType, source) {
  let headTitle = document.querySelector('head');
  let elementito = document.createElement(elementType);
  elementito.setAttribute('rel', relType);
  elementito.setAttribute('href', source);
  headTitle.appendChild(elementito);
}
setHeadItems('link', 'shortcut icon', '/favicon.ico');


//----------------------//
//---INCLUDE FUNCTION---//
//------FOR WRAPPER-----//
//----------------------//

function wrapperBuilder(wrapperSections) {
  wrapperSections.forEach(section => {
    let wrapperTag = document.getElementsByTagName(section["wrapperTag"])[0];
    let url = section["URL"];
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) { wrapperTag.innerHTML = this.response; }
        if (this.status == 404) { wrapperTag.innerHTML = "Algo está faltando aquí."; }
      }
    }
  });
}

wrapperBuilder([
  { wrapperTag: "header", URL: "/wrapper/header.html" },
  { wrapperTag: "footer", URL: "/wrapper/footer.html" }]);

//----------------------//
//--------MENU 🍔-------//
//----------------------//

function menuExpander() {
  navmenu = document.getElementById("navmenu");
  if (navmenu.style.display == 'flex') {
    navmenu.style.display = 'none';
  } else {
    navmenu.style.display = 'flex';
  }
}



//----------------------//
//--------DIMMER--------//
//----------------------//

//crear dimmer background overlay
const dimmerBG = document.createElement('div');
dimmerBG.id = 'dimmer';
document.body.appendChild(dimmerBG);

//función para mostrar dimmer con photo
function lightbox(galleryPic) {
  var imagenElegida = galleryPic.querySelector('img').src;
  var leyendaElegida = galleryPic.querySelector('figcaption').innerHTML;
  dimmerBG.innerHTML = `<figure>
  <figcaption class="dimmerBGkiller">ⓧ</figcaption>
  <img class="dimmerImage" src="${imagenElegida}" alt="${leyendaElegida}"z-index="300" >
                            <figcaption>${leyendaElegida}
                            </figcaption>
                          </figure>`;
  dimmerBG.style.display = "flex";
}

//funciones para salir del dimmer
function lightboxOff() {
  dimmerBG.style.display = "none";
}

dimmerBG.addEventListener("mouseup", lightboxOff);

window.addEventListener('keydown', function (e) {
  if ((e.key == 'Escape' || e.key == 'Esc') && (e.target.nodeName == 'BODY')) {
    lightboxOff();
    menuExpander();
  }
}, true);


//Todas las "img" dentro de "figures" de clase "dimmereable" puedan ser cliqueables para el dimmer
const dimmerSite = document.getElementsByClassName("dimmereable");

[].forEach.call(dimmerSite, function (galleryPic) {
  galleryPic.querySelector('img').addEventListener("click", function () {
    lightbox(galleryPic);
  });
});

//todas las "figures" de la galería (.galeriaItem) también son cliqueables
const dimmerGallery = document.getElementsByClassName("galeriaItem");

[].forEach.call(dimmerGallery, function (galleryPic) {
  galleryPic.addEventListener("click", function () {
    lightbox(galleryPic);
  });
});
