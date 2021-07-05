/*
Puedo buscar libros con una palabra clave determinada
Puedo buscar libros por categoría
Puedo ver una lista de libros, títulos,autor e imagen de portada.
Mostrar vista previa del libro, título, autor, imagen,contraportada,autor,editorial,año
Suscripción del libro permitir al usuario consumidor alquilar el libro
Los datos mostrados deben ser persistidos en LocalStorage. 
El esquema de datos debe armarse usando clases de Javascript.
El trabajo realizado se subirá a un repositorio y se debe deployar.
*/
let libreria = JSON.parse(localStorage.getItem("libreria")) || [];
let libro = {};
let librosCarrito = []

//let id= {id: new Date().getTime()}
let titulo = document.querySelector("#tituloInput");
let categoria = document.querySelector("#categoriaInput");
let autor = document.querySelector("#autorInput");
let contraportada = document.querySelector("#contrapInput");
let imagen = document.querySelector("#imgInput");
let editorial = document.querySelector("#editorialInput");
let año = document.querySelector("#añoInput");

let cuerpoTabla = document.querySelector("#cuerpoTabla") || "";

class Libro {
  constructor(
    id,
    titulo,
    categoria,
    autor,
    contraportada,
    imagen,
    editorial,
    año
  ) {
    this.id = id;
    this.titulo = titulo;
    this.categoria = categoria;
    this.autor = autor;
    this.contraportada = contraportada;
    this.imagen = imagen;
    this.editorial = editorial;
    this.año = año;
  }
}

//Generar un numero aleatorio y guardarlo automaticamente como el id del libro.
//hacer una funcion con math random
//guardarla en el valor del ids

const addLibro = function () {
  if (
    titulo.value &&
    categoria.value &&
    autor.value &&
    contraportada.value &&
    editorial.value &&
    año.value
  ) {
    if (!imagen.value) {
      imagen.value =
        "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
    }
    libreria.push(
      new Libro(
        id=new Date().getTime(),
        titulo.value,
        categoria.value,
        autor.value,
        contraportada.value,
        imagen.value,
        editorial.value,
        año.value
      )
    );
    localStorage.setItem("libreria", JSON.stringify(libreria));
    //updateDatos();
  } else {
    alert("Faltan datos");
  }
};

function cargarTabla(array) {
  cuerpoTabla.innerHTML = "";

  libreria = JSON.parse(localStorage.getItem("libreria")) || [];
  array.forEach(function (libro, index) {
    let fila = document.createElement("tr");
    let datos = `
        <th scope="row">${libro.id}</th>
        <td>${libro.titulo}</td>
        <td>${libro.categoria}</td>
        <td>${libro.autor}</td>
        <td>
        <button class="btn btn-warning" onclick='verLibro(${index})'>
        <i class="fa fa-eye" aria-hidden="true"></i>
        </button>
        <button class="btn btn-info" onclick='irModif(${index})'>
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button class="btn btn-danger" onclick='borrarLibro(${index})'>
        <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        <button class="btn btn-success" onclick='comprarLibro(${index})'>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
        </td>
                
        `;
    fila.innerHTML = datos;
    cuerpoTabla.appendChild(fila);
  });
}



function contarCoincidencias(array){
    document.querySelector('#count').innerText = array.length
}


function verLibro(id) {
  libro = libreria[id];
  document.querySelector("#card-id").innerText = libro.id;
  document.querySelector("#title_modal").innerText = libro.titulo;
  document.querySelector("#img_libro").src = libro.imagen;
  document.querySelector("#contraportada_text").innerText = libro.contraportada;
  document.querySelector("#autor_text").innerText = libro.autor;
  document.querySelector("#categ_text").innerText = libro.categoria;
  document.querySelector("#editorial_text").innerText = libro.editorial;
  document.querySelector("#año_text").innerText = libro.año;
  $("#libroModal").modal("show");
}

function borrarLibro(id) {
  libro = libreria[id];

  let validar = confirm(`Está seguro que quiere borrar a ${libro.titulo}`);

  if (validar) {
    libreria.splice(id, 1);
    localStorage.setItem("libreria", JSON.stringify(libreria));

    alert(`Se borró a ${libro.titulo}`);

  }
  cargarTabla(libreria)
}

function irModif(indice) {
  libro = libreria[indice];
  //libreria = JSON.parse(localStorage.getItem("libreria"))
  document.querySelector("#modif_title").innerText = 'Modificar Libro';
  document.querySelector("#tituloModif").value = libro.titulo;
  document.querySelector("#autorModif").value = libro.autor;
  document.querySelector("#categModif").value = libro.categoria;
  document.querySelector("#editorialModif").value = libro.editorial;
  document.querySelector("#imagenModif").value = libro.imagen;
  document.querySelector("#contrapModif").value = libro.contraportada;
  document.querySelector("#añoModif").value = libro.año;
  $("#modifModal").modal("show");
  cargarTabla(libreria);
}

function comprarLibro(id){
  libro = libreria[id]

  let validar = confirm(`Está seguro que quiere añadir a su compra ${libro.titulo}`);
  if(validar){
    alert(`${libro.titulo} se agregó a su carrito de compras`)
    librosCarrito.push(libro.titulo)
    console.log(librosCarrito);
  }
}

function handleChange(e) {
  libro = {
    ...libro,
    [e.target.name]: e.target.value,
  };  
}

function filtrarLibros(){
    let texto = document.querySelector('#textBuscar')
    libreria = JSON.parse(localStorage.getItem("libreria"))
    libreria = libreria.filter(function(libro){
        return libro.titulo.indexOf(texto.value)> -1
    })
    contarCoincidencias(libreria);
    cargarTabla(libreria);
}


function todas(){
    libreria = JSON.parse(localStorage.getItem("libreria"))
    contarCoincidencias(libreria);
    cargarTabla(libreria);
}
function autoayuda(){
    let texto = document.querySelector('.autoayuda')
    libreria = JSON.parse(localStorage.getItem("libreria"))
    libreria = libreria.filter(function(libro){
        return libro.categoria === texto.text
    })
    contarCoincidencias(libreria);
    cargarTabla(libreria);
}
function biografia(){
    let texto = document.querySelector('.biografia')
    libreria = JSON.parse(localStorage.getItem("libreria"))
    libreria = libreria.filter(function(libro){
        return libro.categoria === texto.text
    })
    contarCoincidencias(libreria);
    cargarTabla(libreria);
}
function cientifico(){
    let texto = document.querySelector('.cientifico')
    libreria = JSON.parse(localStorage.getItem("libreria"))
    libreria = libreria.filter(function(libro){
        return libro.categoria === texto.text
    })
    contarCoincidencias(libreria);
    cargarTabla(libreria);
}
function ficcion(){
    let texto = document.querySelector('#ficcion')
    libreria = JSON.parse(localStorage.getItem("libreria"))
    libreria = libreria.filter(function(libro){
        return libro.categoria === texto.text
    })
    contarCoincidencias(libreria);
    cargarTabla(libreria);
}
function romance(){
    let texto = document.querySelector('.romance')
    libreria = JSON.parse(localStorage.getItem("libreria"))
    libreria = libreria.filter(function(libro){
        return libro.categoria === texto.text
    })
    contarCoincidencias(libreria);
    cargarTabla(libreria);
}
function terror(){
    let texto = document.querySelector('.terror')
    libreria = JSON.parse(localStorage.getItem("libreria"))
    libreria = libreria.filter(function(libro){
        return libro.categoria === texto.text
    })
    contarCoincidencias(libreria);
    cargarTabla(libreria);
}

//funcion para actualizar
function updateLibro(e) {
  e.preventDefault(); 

 
  let index = libreria.findIndex(function (item) {
    return item.id === libro.id;
  });

  //modificar solamente el libro
  libreria.splice(index, 1, libro);

  localStorage.setItem("libreria", JSON.stringify(libreria));
  cargarTabla(libreria);

  //cerrar modal
  $("#modifModal").modal("hide");
}

if (cuerpoTabla) {
  cargarTabla(libreria);
}

contarCoincidencias(libreria)
cargarTabla(libreria);