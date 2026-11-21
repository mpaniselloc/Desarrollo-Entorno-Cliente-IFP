// CONTROLADOR: aquí irán los addEventListener que conectan la vista con el modelo.

//== CONSTANTES CON LOS QUERYSELECTOR ==========

// Campo de texto del código del curso
const campoCodigo = document.querySelector("#codigo");
// Campo de texto del nombre del curso
const campoNombre = document.querySelector("#nombreCurso");
// Formulario para añadir cursos
const formulario = document.querySelector("#formCurso");

// Botón para mostrar todos los cursos del array en el listado
const btnMostrarTodos = document.querySelector("#btnMostrarTodos");
// Botón para quitar todos los cursos del listado (sin borrarlos del array)
const btnQuitarTodos = document.querySelector("#btnQuitarTodos");
// Campo donde se escribe el código del curso oculto que se quiere mostrar
const campoCodigoOculto = document.querySelector("#codigoOculto");
// Botón para mostrar al final del listado un curso oculto a partir de su código
const btnMostrarOculto = document.querySelector("#btnMostrarOculto");
//Constante que devuelve el contenedor del div donde se pintaran los cursos
const listaCursos = document.querySelector("#listaCursos");

// ===== EVENTOS DEL FORMULARIO: RESALTAR CAMPOS =====

// Cuando el campo del código recibe el foco, se resalta su fondo
campoCodigo.addEventListener("focus", () => {
  // Añade la clase que cambia el color de fondo
  campoCodigo.classList.add("resaltado");
});

// Cuando el campo del código pierde el foco, se quita el resaltado
campoCodigo.addEventListener("blur", () => {
  // Quita la clase para que el fondo vuelva a ser normal
  campoCodigo.classList.remove("resaltado");
});

// Cuando el campo del nombre recibe el foco, se resalta su fondo
campoNombre.addEventListener("focus", () => {
  //Añade la clase que cambia el color de fondo
  campoNombre.classList.add("resaltado");
});
// Cuando el campo del nombre pierde el foco, se quita el resaltado
campoNombre.addEventListener("blur", () => {
  // Quita la clase para que el fondo vuelva a ser normal
  campoNombre.classList.remove("resaltado");
});

//Cada vez que se cambie el contenido del campo del codigo
campoCodigo.addEventListener("input", () => {
  //Pasa a mayusculas el texto y lo vuelve a poner en el campo
  campoCodigo.value = campoCodigo.value.toUpperCase();
});

// Se llama cada vez que hay cambios en los cursos
function actualizarVista() {
  //Pide a la vista que pinte el listado de cursos del modelo
  pintarListado(cursos);
  // Pide a la vista que pinte los contadores con los numeros
  pintarContadores(contarVisibles(), contarTotal());
}

// Cuando se envía el formulario (botón "Añadir Curso" o tecla Enter)
formulario.addEventListener("submit", (e) => {
  // Evita que el formulario recargue la página (se perderían los datos del array)
  e.preventDefault();

  // Lee el código escrito y le quita los espacios del principio y del final
  const codigo = campoCodigo.value.trim();
  // Lee el nombre escrito y le quita los espacios del principio y del final
  const nombre = campoNombre.value.trim();

  // Borra los mensajes de error que hubiera de un intento anterior
  limpiarError("errorCodigo");
  limpiarError("errorNombreCurso");

  // Variable para saber si todos los datos son correctos (empieza suponiendo que sí)
  let datosCorrectos = true;

  // Comprueba si el código cumple el formato con la expresión regular del modelo
  if (!validarCodigo(codigo)) {
    // Si no lo cumple, muestra el error junto al campo del código
    mostrarError("errorCodigo", 'Formato incorrecto: 3 letras, 3 números, "/" y 2 números (ej: DAW001/25)');
    // Marca que hay datos incorrectos
    datosCorrectos = false;
  } else if (existeCurso(codigo)) {
    // Si el formato es bueno pero ya hay un curso con ese código, muestra el error
    mostrarError("errorCodigo", "Ya existe un curso con el código " + codigo);
    // Marca que hay datos incorrectos
    datosCorrectos = false;
  }

  // Comprueba si el nombre cumple la expresión regular del modelo
  if (!validarNombre(nombre)) {
    // Si no la cumple, muestra el error junto al campo del nombre
    mostrarError("errorNombreCurso", "Solo letras y espacios, entre 5 y 100 caracteres");
    // Marca que hay datos incorrectos
    datosCorrectos = false;
  }

  // Si algún dato es incorrecto, para aquí y no añade el curso
  if (!datosCorrectos) {
    return;
  }

  // Añade el curso al array, con la primera letra del nombre en mayúscula
  anadirCurso(codigo, normalizarNombre(nombre));

  // Repinta el listado y los contadores para que se vea el curso nuevo
  actualizarVista();

  // Vacía los campos del formulario para poder escribir otro curso
  formulario.reset();
});

//==========BOTONES GENERALES ================

//Al pulsar boton Mostrar todos se muestra lista de los cursos
btnMostrarTodos.addEventListener("click", () => {
  //Pide al modelo que marque los cursos
  mostrarTodos();
  //Pintamos de nuevo el listado y los contadores
  actualizarVista();
});

// Al pulsar quitar todos quitamos los cursos pero no del array
btnQuitarTodos.addEventListener("click", () => {
  // Ocultamos los cursos
  ocultarTodos();
  //Pintamos de nuevo el listado y los contadores
  actualizarVista();
});

// Al pulsar "Mostrar oculto", se añade al final del listado el curso oculto con ese código
btnMostrarOculto.addEventListener("click", () => {
  // Lee el código escrito, sin espacios a los lados y en mayúsculas
  const codigo = campoCodigoOculto.value.trim().toUpperCase();

  // Borra el mensaje de error de un intento anterior
  limpiarError("errorOculto");

  // Pide al modelo que muestre el curso; devuelve el curso o null si no ha podido
  const curso = mostrarCurso(codigo);

  // Si no ha podido mostrarlo (no existe o ya estaba visible), avisa al usuario
  if (!curso) {
    mostrarError("errorOculto", "No hay ningún curso oculto con el código " + codigo);
    return;
  }

  // Repinta el listado y los contadores (el curso aparecerá al final)
  actualizarVista();
  // Vacía el campo del código para poder escribir otro
  campoCodigoOculto.value = "";
});

// ===== EVENTOS DE LOS BOTONES DE CADA CURSO ====

// Cuando se hace click en algun elemento del contenedor del listado
listaCursos.addEventListener("click", (e) => {
  //Elemento exacto en el que se hizo click
  const elemento = e.target;
  // Codigo del curso que se guarda en el boton
  const codigo = elemento.dataset.codigo;

  // Si se ha pulsado Ocultar
  if (elemento.classList.contains("btnOcultar")) {
    //Ocultamos Curso
    ocultarCurso(codigo);
    //Pintamos de nuevo
    actualizarVista();
    // Si no se pulsa Ocultar y si Eliminar
  } else if (elemento.classList.contains("btnEliminar")) {
    // Eliminarmos el curso
    eliminarCurso(codigo);
    //Pintamos de nuevo
    actualizarVista();
  }
});
