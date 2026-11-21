// MODELO: aquí irán los datos (el array de cursos) y las funciones que los modifican.

//Array donde se guardaran los cursos (visibles y ocultos)
let cursos = [];

//Añade un curso nuevo al array
//Recibe el codigo y el nombre ya validados

function anadirCurso(codigo, nombre) {
  // creamos un objeto con los datos del curso, al crearlo se ve en el listado

  const curso = {
    codigo: codigo,
    nombre: nombre,
    visible: true,
  };

  //Añadir el curso al array

  cursos.push(curso);
}

//Devuelve true si ya existe un curso con ese codigo en el array

function existeCurso(codigo) {
  //busca en el array si existe el codigo, usaremos some()

  return cursos.some((curso) => curso.codigo === codigo);
}

//Pone todos los cursos del array en visibles
function mostrarTodos() {
  //Recorre cada curso del array y lo marca como visible
  cursos.forEach((curso) => {
    curso.visible = true;
  });
}

//Pone en ocultos todos los cursos del array
function ocultarTodos() {
  //Recorre cada curso del array y lo marca cono no visible
  cursos.forEach((curso) => {
    curso.visible = false;
  });
}

//Oculta un curso en concreto del listado ( sin borrarlo del array)
function ocultarCurso(codigo) {
  //Busca en el array el curso que tiene ese codigo
  const curso = cursos.find((curso) => curso.codigo === codigo);

  if (curso) {
    //Si encontramos el codigo lo ocultados
    curso.visible = false;
  }
}

// Vuelve a mostrar un curso oculto a partir de su código (botón "Mostrar oculto").
// Además, lo mueve al final del array para que aparezca al final del listado.
// Devuelve el curso si lo ha mostrado, o null si no existe o ya estaba visible.
function mostrarCurso(codigo) {
  // Busca en el array el curso que tiene ese código
  const curso = cursos.find((curso) => curso.codigo === codigo);

  // Comprueba que el curso existe y que además está oculto
  if (curso && !curso.visible) {
    // Lo marca como visible
    curso.visible = true;

    // Obtiene la posición que ocupa el curso dentro del array
    const posicion = cursos.indexOf(curso);

    // Quita el curso de su posición actual
    cursos.splice(posicion, 1);

    // Lo vuelve a añadir al final del array
    cursos.push(curso);

    // Devuelve el curso para indicar que se ha mostrado correctamente
    return curso;
  } else {
    // No existe o ya estaba visible: devuelve null para que el controlador avise al usuario
    return null;
  }
}

//Funcion para eliminar el curso del array de forma permanente
function eliminarCurso(codigo) {
  //Busca en el array el curso que tiene ese codigo
  const curso = cursos.find((curso) => curso.codigo === codigo);

  if (curso) {
    //Encontramos la posicion
    const posicion = cursos.indexOf(curso);
    //Eliminaos el curso
    cursos.splice(posicion, 1);

    //Devolvemos el curso eliminado
    return curso;
  } else {
    //No existe el curso
    return null;
  }
}

function contarTotal() {
  //devuelve el total de cursos
  return cursos.length;
}

function contarVisibles() {
  //devuelve el total de cursos visibles
  return cursos.filter((curso) => curso.visible).length;
}

//funcion para validar el formato del codigo
function validarCodigo(codigo) {
  //Expresion regular, 3 letras mayusculas, 3 numeros, / y 2 numeros
  const regexCodigo = /^[A-Z]{3}\d{3}\/\d{2}$/;
  //Comprueba si el codigo cumple el formato y devuelve true o false
  return regexCodigo.test(codigo);
}

//Funcion para validar el nombre completo del curso
function validarNombre(nombre) {
  //Expresion regular que solo acepta letras mayusculas y minusculas,ñ,Ñ, tildes y espacios
  const regexNombre = /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]{5,100}$/;
  //devuelve true si el nombre cumple el formato
  return regexNombre.test(nombre);
}

//Funcion para poner la primera letra en mayuscula
function normalizarNombre(nombre) {
  //Ponemos la primera letra en mayuscula
  const primeraLetra = nombre.charAt(0).toUpperCase();
  //Obtenemos el resto del nombre desde la segunda letra sin modificar
  const restoNombre = nombre.slice(1);
  // Unimos la primera letra en mayuscula con el resto del nombre
  return primeraLetra + restoNombre;
}
