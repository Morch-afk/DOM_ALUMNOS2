// Variables para almacenar elementos
let identificador, etiqueta, clase, nombre, identificador2;

// Obtener elementos por ID
identificador = document.getElementById("titulo");
console.log("Título:", identificador.innerText);

// Obtener elementos por Tag Name
let secciones = document.getElementsByTagName("section");
console.log("Contenido de la primera sección:", secciones[0].innerText);

let parrafos = document.getElementsByTagName("p");
console.log("Primer párrafo:", parrafos[0].innerText);

// Obtener elementos por Class Name
clase = document.getElementsByClassName("parrafo");
console.log("Segundo párrafo con clase 'parrafo':", clase[1].innerText);

// Obtener elementos por Name
nombre = document.getElementsByName("subtitulo");
console.log("Segundo elemento con name 'subtitulo':", nombre[1].textContent);

identificador2 = document.getElementById("conoceme");
console.log("Contenido de 'conoceme':", identificador2.innerText);

// Crear un nuevo párrafo y agregarlo al tercer párrafo existente
let elemento = document.createElement("p");
let contenido = document.createTextNode("Nuevo párrafo");
elemento.appendChild(contenido);
parrafos[2].insertAdjacentElement("beforeend", elemento);

// Reemplazar el primer párrafo con una nueva clase
let nuevoParrafo = document.createElement("p");
let contenidoNuevo = document.createTextNode("Reemplazo Párrafo");
nuevoParrafo.setAttribute("class", "parrafo2");
nuevoParrafo.appendChild(contenidoNuevo);
secciones[1].replaceChild(nuevoParrafo, clase[0]);

// Crear un artículo dentro de la sección con id "nodo"
let articulo = document.createElement("article");
let contenidoArticulo = document.createTextNode("Artículo de sección");
articulo.appendChild(contenidoArticulo);
document.getElementById("nodo").appendChild(articulo);

// Insertar contenido en la sección con id "contenido"
document.getElementById("contenido").innerHTML = 'Información  <br/> <p class="nuevo">Otro Párrafo en el nodo</p>';

// Cambiar el texto del enlace y actualizar su atributo href
let enlace = document.getElementById("enlace");
enlace.innerHTML = "Google";
enlace.setAttribute("href", "https://www.google.com");

// Cambiar clases de párrafos
parrafos[0].setAttribute("class", "parrafo nuevo");
parrafos[2].setAttribute("class", "contenido");

// Estilos adicionales
document.getElementById("titulo").style.background = '#f00';
document.getElementById("contenido").style.marginTop = '10px';
document.getElementById("contenido").style.background = '#f80';

// Función para crear una sección con título, artículo e imagen
function crearSeccionConImagen(id, tituloTexto, articuloTexto, imagenSrc, imagenAlt) {
    let seccion = document.createElement("section");
    seccion.setAttribute("id", id);
    
    // Crear el título de la sección
    let titulo = document.createElement("h2");
    titulo.innerText = tituloTexto;
    
    // Crear el artículo dentro de la sección
    let articulo = document.createElement("article");
    let contenidoArticulo = document.createTextNode(articuloTexto);
    articulo.appendChild(contenidoArticulo);
    
    // Crear la imagen
    let imagen = document.createElement("img");
    imagen.setAttribute("src", imagenSrc);
    imagen.setAttribute("alt", imagenAlt);
    
    // Agregar el título, artículo e imagen a la sección
    seccion.appendChild(titulo);
    seccion.appendChild(articulo);
    seccion.appendChild(imagen);
    
    // Agregar la nueva sección al documento
    document.body.appendChild(seccion);
}

const imagenes = {
    conoceme: "./imagen/m.png",
    hola: "./imagen/m.png",
    adios: "./imagen/m.png",
    wawis: "./imagen/m.png"
};

// Crear las secciones con imágenes
crearSeccionConImagen(
    "conoceme",
    "Conóceme",
    "Este es un artículo sobre mí.",
    imagenes.conoceme,
    "Imagen de Conóceme"
);

crearSeccionConImagen(
    "hola",
    "Hola",
    "Este es un artículo de la sección Hola.",
    imagenes.hola,
    "Imagen de Hola"
);

crearSeccionConImagen(
    "adios",
    "Adiós",
    "Este es un artículo de la sección Adiós.",
    imagenes.adios,
    "Imagen de Adiós"
);




// Crear dos artículos
let article1 = document.createElement("article");
article1.setAttribute("class", "encabezado");
let tituloArticle1 = document.createElement("h2");
tituloArticle1.innerText = "Artículo 1";
let textoArticle1 = document.createElement("p");
textoArticle1.setAttribute("class", "texto");
textoArticle1.innerText = "Este es el contenido del primer artículo.";
article1.appendChild(tituloArticle1);
article1.appendChild(textoArticle1);

let article2 = document.createElement("article");
article2.setAttribute("class", "encabezado");
let tituloArticle2 = document.createElement("h2");
tituloArticle2.innerText = "Artículo 2";
let textoArticle2 = document.createElement("p");
textoArticle2.setAttribute("class", "texto");
textoArticle2.innerText = "Este es el contenido del segundo artículo.";
article2.appendChild(tituloArticle2);
article2.appendChild(textoArticle2);

// Agregar los artículos al body o a una sección específica
document.body.appendChild(article1);
document.body.appendChild(article2);

// Crear una sección con texto
let seccionTexto = document.createElement("section");
seccionTexto.setAttribute("id", "seccionTexto");
let tituloTexto = document.createElement("h2");
tituloTexto.innerText = "Sección de Texto";
let parrafoTexto = document.createElement("p");
parrafoTexto.innerText = "Este es un párrafo de texto dentro de la sección de texto.";
seccionTexto.appendChild(tituloTexto);
seccionTexto.appendChild(parrafoTexto);

// Agregar la sección de texto al documento
document.body.appendChild(seccionTexto);

// Crear una sección con imagen
let seccionImagen = document.createElement("section");
seccionImagen.setAttribute("id", "seccionImagen");
let tituloImagen = document.createElement("h2");
tituloImagen.innerText = "Sección de Imagen";
let imagen = document.createElement("img");
imagen.setAttribute("src", "./imagen/m.png");
imagen.setAttribute("alt", "Imagen de ejemplo");
seccionImagen.appendChild(tituloImagen);
seccionImagen.appendChild(imagen);

// Agregar la sección de imagen al documento
document.body.appendChild(seccionImagen);

