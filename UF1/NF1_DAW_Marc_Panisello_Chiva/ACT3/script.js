// Gestion del campeonato de padel

//Solicitamos el nombre del jugador y lo transformamos en mayusculas
let nombreJugador = prompt("Introduzca su nombre por favor: ").toUpperCase();

//Solicitamos el apellido del jugador y lo transformamos en mayusculas
let apellidoJugador = prompt ("Introduzca su apellido porfavor: ").toUpperCase();

// Concatenamos el nombre y el apellido completos

let nombreCompleto = nombreJugador + " " + apellidoJugador;

//Almacenamos el nombre completo en un sesssionStorage. nombreJugador hara referencia a la clave para luego ser llamada

sessionStorage.setItem("nombreJugadorCompleto", nombreCompleto);

// Vamos a realizar un mensaje de bienvenida con el nombre  del jugador obteniendo el id mensajeBienvenida de un parrafo en usuario.html

document.getElementById("mensajeBienvenida").innerHTML = "Bienvenido " + nombreCompleto;
