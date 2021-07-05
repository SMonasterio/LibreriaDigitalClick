let libreria = JSON.parse(localStorage.getItem("libreria")) || [];
let libro = {};


let titulo = document.querySelector("#tituloInput");
let autor = document.querySelector("#autorInput");
let contraportada = document.querySelector("#contrapInput");
let editorial = document.querySelector("#editorialInput");
let año = document.querySelector("#añoInput");
let imagen = document.querySelector("#imgInput");
let categoria = document.querySelector("#categoriaInput");



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
    this.id = id
    this.titulo = titulo;
    this.categoria = categoria;
    this.autor = autor;
    this.contraportada = contraportada;
    this.imagen = imagen;
    this.editorial = editorial;
    this.año = año;
  }
}

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
    
  } else {
    alert("Faltan datos");
  }
 
};


