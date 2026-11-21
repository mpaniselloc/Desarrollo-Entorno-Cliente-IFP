// VISTA: aquí van las funciones que manipulan el DOM (pintar listado, mensajes, contadores).

// Pinta en el <ul> todos los cursos visibles del array que recibe.
// Cada curso se muestra con su código, su nombre y dos botones: Ocultar y Eliminar.
function pintarListado(cursos) {
  // Busca la lista <ul> en la página
  const lista = document.querySelector("#listaCursos");

  // Vacía la lista para volver a pintarla desde cero
  lista.innerHTML = "";

  // Recorre todos los cursos del array
  cursos.forEach((curso) => {
    // Si el curso está oculto, no se pinta y pasa al siguiente
    if (!curso.visible) {
      return;
    }

    // Crea el <li> del curso
    const li = document.createElement("li");

    // Pone el código y el nombre del curso como texto del <li>
    li.textContent = curso.codigo + " - " + curso.nombre + " ";

    // Crea el botón para ocultar el curso
    const botonOcultar = document.createElement("button");
    // Le pone el texto que verá el usuario
    botonOcultar.textContent = "Ocultar";
    // Le añade la clase para que el controlador sepa que es un botón de ocultar
    botonOcultar.classList.add("btnOcultar");
    // Guarda el código del curso en el botón (data-codigo) para saber qué curso ocultar
    botonOcultar.dataset.codigo = curso.codigo;
    // Mete el botón dentro del <li>
    li.appendChild(botonOcultar);

    // Crea el botón para eliminar el curso
    const botonEliminar = document.createElement("button");
    // Le pone el texto que verá el usuario
    botonEliminar.textContent = "Eliminar";
    // Le añade la clase para que el controlador sepa que es un botón de eliminar
    botonEliminar.classList.add("btnEliminar");
    // Guarda el código del curso en el botón (data-codigo) para saber qué curso eliminar
    botonEliminar.dataset.codigo = curso.codigo;
    // Mete el botón dentro del <li>
    li.appendChild(botonEliminar);

    // Mete el <li> completo dentro de la lista
    lista.appendChild(li);
  });
}

// ===== CONTADORES =====

// Actualiza los dos números del contador con los valores que recibe
function pintarContadores(visibles, total) {
  // Escribe el número de cursos visibles en su <span>
  document.querySelector("#contadorVisibles").textContent = visibles;
  // Escribe el número total de cursos en su <span>
  document.querySelector("#contadorTotal").textContent = total;
}

// Muestra un mensaje de error en el <span> cuyo id recibe (ej: "errorCodigo")
function mostrarError(idSpan, mensaje) {
  // Busca el <span> de error y escribe el mensaje dentro
  document.querySelector("#" + idSpan).textContent = mensaje;
}

// Borra el mensaje de error del <span> cuyo id recibe
function limpiarError(idSpan) {
  // Busca el <span> de error y lo deja vacío
  document.querySelector("#" + idSpan).textContent = "";
}
