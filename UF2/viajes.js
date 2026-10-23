
// =============================
// 1. Modelo
//==============================
class ViajesModelo {
  constructor() {
    //Creamos el array de los nombres de los viajes
    this.viajesNombre = ["China", "Corea del Sur", "India", "Japon", "Tailandia", "Vietnam"];

    //Creamos el array con las imagenes
    this.imagenesViaje = ["imagen/china.jpg",
      "imagen/coreasur.jpg", 
      "imagen/india.jpg", 
      "imagen/japon.jpg", 
      "imagen/tailandia.jpg", 
      "imagen/vietnam.jpg"];

    //Creamos el array con los precios
    this.preciosViaje = [1200, 1400,950, 1600, 1100, 1050];

    //Creamos el indice actual del array de viajes
    this.indiceActual = 0;

    // Obtenemos el numero de visitas usando LocalStorage, si no hay se inician en 0
    this.visitas = parseInt(localStorage.getItem("visitasViajes")) || 0;
  }

  //Avanzar carrusel
    siguiente () {
      this.indiceActual++;
      if (this.indiceActual >= this.viajesNombre.length){
        this.indiceActual = 0;
      }
    }
    // Retroceder carrusel
    anterior (){
      this.indiceActual--;
      if (this.indiceActual < 0 ){
        this.indiceActual = this.viajesNombre.length - 1;
      }
    }

    //Sumar visitas
    sumarVisitas(){
      this.visitas++;
      localStorage.setItem("visitasViajes", this.visitas);
      return this.visitas;
    }

    //Realizamos el sorteo
    sortear () {
      const aleatorio = Math.floor(Math.random() * this.visitas) + 1;

      //Logica para si supera las 100 visitas y concide con el numero
      if (this.visitas > 100 && aleatorio === this.visitas){
        const indiceAleatorio = Math.floor(Math.random() * this.viajesNombre.length);
        const precioOriginal = this.preciosViaje[indiceAleatorio];
        const precioFinal = precioOriginal * 0.85;
        return { gano: true, destino: this.viajesNombre[indiceAleatorio],precioOriginal,precioFinal};
      }
      return { gano : false};
    }
}
// =============================
// 2. Vista
//==============================

class ViajesVista {
  constructor(){
    //Referenciamos a los elementos del HTML
    this.seccionLogin = document.getElementById("seccionLogin");
    this.seccionCarrusel = document.getElementById("seccionCarrusel");
    this.seccionSorteo = document.getElementById("seccionSorteo");
    this.inputNombre = document.getElementById("inputNombre");
    this.btnEntrar = document.getElementById("btnEntrar");
    this.btnAnterior = document.getElementById("btnAnterior");
    this.btnSiguiente = document.getElementById("btnSiguiente");
    this.mensajeBienvenida = document.getElementById("mensajeBienvenida");
    this.imagen = document.getElementById("imagenDestino");
    this.nombre = document.getElementById("nombreDestino");
    this.precio = document.getElementById("precioDestino");
    this.contador = document.getElementById("contadorDestino");
    this.infoVisitas = document.getElementById("infoVisitas");
    this.resultadoSorteo = document.getElementById("resultadoSorteo");
  }

  //Mostramos el destino actual del carrusell
  mostrarDestino(modelo){
    const vistaIndice = modelo.indiceActual;
    this.imagen.src = modelo.imagenesViaje[vistaIndice];
    this.nombre.textContent = modelo.viajesNombre[vistaIndice];
    this.precio.textContent = modelo.preciosViaje[vistaIndice] + " €";
    this.contador.textContent = "Destino " + (vistaIndice + 1) + " de " + modelo.viajesNombre.length;
  }

  //Mostramos la pantalla principal cuando pulsamos el boton de comenzar viaje
  activarPrincipal(nombreUsuario){
    this.seccionLogin.classList.add("oculto");
    this.seccionCarrusel.classList.remove("oculto");
    this.seccionSorteo.classList.remove("oculto");
    this.mensajeBienvenida.textContent = "¡Te damos la bienvenida " + nombreUsuario;
    this.mensajeBienvenida.classList.remove("oculto");
  }

  //Mostrar textos del sorteo
  mostrarSorteo(resultado,nombre,visitas){
    this.infoVisitas.textContent ="Numero de visita: " + visitas;
    if (resultado.gano) {
      this.resultadoSorteo.textContent = "¡Enhorabuena" + nombre + "! Has ganado un 15% de descuento en tu viaje a " + resultado.destino + ". Precio original: " + resultado.precioOriginal + "€ - Precio final: " + resultado.precioFinal + "€";
    } else{
      this.resultadoSorteo.textContent = "Lo sentimos " + nombre + ", esta vez no has tenido premio. ¡Sigue viajando con nosotros!";
    }
  }

}

// =============================
// 3. Controllador
//==============================

class ViajesControlador {
  constructor (modelo,vista){
    this.modelo = modelo;
    this.vista = vista;



    // Click en boton comenzar viaje
    this.vista.btnEntrar.addEventListener("click",() =>{
      const nombre = this.vista.inputNombre.value.trim();
      if (!nombre){
        alert ("Porfavor, introduce tu nombre.");
        return;
      }
      this.vista.activarPrincipal(nombre);
      this.vista.mostrarDestino(this.modelo);
      const visitas = this.modelo.sumarVisitas();
      const sorteo = this.modelo.sortear();
      this.vista.mostrarSorteo (sorteo,nombre,visitas);
      
    });
    //Click en boton anterior
    this.vista.btnAnterior.addEventListener("click",() =>{
      this.modelo.anterior();
      this.vista.mostrarDestino(this.modelo);
    });
    //Click en boton siguiente
    this.vista.btnSiguiente.addEventListener("click",() =>{
      this.modelo.siguiente();
      this.vista.mostrarDestino(this.modelo);
    });
  }
}


// Inicializar al cargar el HTML
document.addEventListener("DOMContentLoaded", () => {
  new ViajesControlador(new ViajesModelo(), new ViajesVista());
});