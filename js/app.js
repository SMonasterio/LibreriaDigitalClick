
$('.carousel').carousel()

let usuario = JSON.parse(localStorage.getItem("usuario")) || null

let linkAdmin = document.querySelector("#linkAdmin");
let deslog = document.querySelector("#deslog");
let registroRapido = document.querySelector("#registroRapido") 
if (usuario.email === "admin@gmail.com") {
    linkAdmin.innerHTML = `
        <a class="nav-link" href="/html/cargar.html">Nuevo libro</a>
        `;
}

if (usuario){
    document.querySelector('#loginImg').src ="/img/tilde.png"
    document.querySelector('#loginLink').href ="#"
    deslog.innerHTML = `
    <button
          id="deslog"
          class="btn btn-secondary btn"
          onclick="deslogueo()"
        >
          Cerrar Sesión
        </button>
    `
    registroRapido.innerHTML = `
    `
}
 
function deslogueo () {
  localStorage.setItem("usuario", null);
  location.replace("/html/login.html");
};
