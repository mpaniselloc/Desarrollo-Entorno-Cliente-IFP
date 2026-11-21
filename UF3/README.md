# Gestión de cursos de una academia — NF3

Actividad del Núcleo Formativo 3 del módulo **0612 Desarrollo web en entorno cliente** (CFGS DAW).

Página web para gestionar los cursos de una academia: se añaden cursos con un formulario y se muestran, ocultan o eliminan de un listado mediante botones. Está hecha con HTML, CSS y JavaScript sin librerías, siguiendo el patrón **MVC (Modelo-Vista-Controlador)**.

## Cómo usarla

Abre `academia.html` en el navegador. No hace falta instalar nada ni usar un servidor.

> Los cursos se guardan en un array en memoria, así que al recargar la página el listado vuelve a estar vacío.

## Estructura

| Fichero | Contenido |
|---|---|
| `academia.html` | Estructura de la página: formulario, botones, contador y lista vacía |
| `academia.css` | Estilos de la página |
| `modelo.js` | **Modelo**: el array de cursos, las funciones que lo modifican y las expresiones regulares. No toca el DOM. |
| `vista.js` | **Vista**: funciones que pintan en la página el listado, los contadores y los mensajes de error. No modifica el array. |
| `controlador.js` | **Controlador**: todos los `addEventListener`. Escucha al usuario, llama al modelo y le pide a la vista que repinte. |

Los scripts se cargan al final del `<body>` y en este orden: `modelo.js` → `vista.js` → `controlador.js`.

Cada curso se guarda en el array como un objeto:

```js
{ codigo: "DAW001/25", nombre: "Desarrollo web entorno cliente", visible: true }
```

La propiedad `visible` es la que permite diferenciar **ocultar** (el curso sigue en el array) de **eliminar** (sale del array).

## Funcionalidades

### Formulario

- Dos campos, **código** y **nombre**, y el botón **Añadir Curso** (también funciona con la tecla Enter).
- El campo que tiene el foco cambia de color de fondo (eventos `focus` y `blur`).
- El código se pasa a mayúsculas mientras se escribe (evento `input`).
- **Validación del código** con la expresión regular `/^[A-Z]{3}\d{3}\/\d{2}$/`: 3 letras, 3 números, `/` y 2 números del año. Ejemplo: `DAW001/25`.
- **Validación del nombre** con la expresión regular `/^[A-Za-zñÑáéíóúÁÉÍÓÚ ]{5,100}$/`: solo letras (con tildes y ñ) y espacios, entre 5 y 100 caracteres.
- La primera letra del nombre se pone en mayúscula automáticamente.
- Ayuda al usuario: ejemplo en cada campo (`placeholder`), icono ⓘ con la explicación del formato y mensajes de error junto al campo incorrecto.

### Listado de cursos

- **Mostrar todos**: muestra en el listado todos los cursos del array.
- **Quitar todos**: quita todos los cursos del listado, sin borrarlos del array.
- **Mostrar oculto**: se escribe el código de un curso oculto y se añade al final del listado.
- Cada curso tiene un botón **Ocultar** (lo quita del listado, sigue en el array) y un botón **Eliminar** (lo borra del array).
- **Contador**: cursos visibles en el listado / cursos totales en el array.

## Decisiones tomadas

El enunciado deja algunos puntos abiertos. Estas son las decisiones tomadas:

- **Al añadir un curso, se muestra directamente en el listado.**
- **El código del curso oculto se escribe en un campo de texto** junto al botón "Mostrar oculto". Si no hay ningún curso oculto con ese código, se muestra un mensaje de error.
- **No se permiten dos cursos con el mismo código** (función `existeCurso`), para que "Mostrar oculto" sepa siempre qué curso mostrar.
- **Al mostrar un curso oculto, se mueve al final del array**. Así aparece al final del listado, como pide el enunciado.
- **Del nombre solo se cambia la primera letra**: el resto se respeta tal como lo escribe el usuario, para no estropear siglas como HTML o SQL.
- **Se quitan los espacios del principio y del final** (`trim`) antes de validar. Así no se acepta un nombre formado solo por espacios.
- **La validación se hace con JavaScript** y no con el atributo `pattern` de HTML, para poder mostrar mensajes de error propios en la página.
- **Los botones Ocultar y Eliminar usan delegación de eventos**: como se crean y se borran cada vez que se repinta el listado, hay un solo `addEventListener` en la lista `<ul>`. Con `e.target` se sabe qué botón se ha pulsado, y con su atributo `data-codigo`, a qué curso pertenece.
