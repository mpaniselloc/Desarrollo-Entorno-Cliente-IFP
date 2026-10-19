# Actividad 3 (ACT3) — Gestión del Campeonato de Pádel

## 📌 Información General
- **Módulo:** Desarrollo Web en Entorno Cliente (DAW - iFP)
- **Unidad Formativa:** UF1
- **Núcleo Formativo:** NF1
- **Autor:** Marc Panisello Chiva
- **Directorio:** `UF1/NF1_DAW_Marc_Panisello_Chiva/ACT3`

---

## 🎯 Objetivo de la Actividad
Desarrollar una aplicación web interactiva que simula la inscripción y clasificación automática de un jugador para un campeonato de pádel, aplicando:
1. Entrada interactiva de datos con ventanas modales `prompt()`.
2. Normalización de cadenas a mayúsculas con `.toUpperCase()` y parseo numérico con `parseInt()`.
3. Comunicación y persistencia temporal de datos entre distintas páginas web usando la **Web Storage API** (`sessionStorage`).
4. Lógica de bifurcación y condicionales anidados (`if`, `else if`, `else`).
5. Renderizado dinámico de contenido en el DOM mediante `document.getElementById()` y la propiedad `innerHTML`.

---

## 📂 Archivos del Proyecto

| Archivo | Descripción |
| :--- | :--- |
| [`usuario.html`](./usuario.html) | Página de registro del participante. Contiene el contenedor del mensaje de bienvenida y el enlace hacia la siguiente fase. |
| [`script.js`](./script.js) | Script asociado a `usuario.html`. Solicita nombre y apellido, concatena y guarda en `sessionStorage`. |
| [`padel.html`](./padel.html) | Página de clasificación final. Recupera los datos de la sesión, solicita edad, sexo y ranking, evalúa las condiciones y muestra el veredicto en pantalla. |

---

## 🔄 Flujo de Ejecución y Lógica

```text
usuario.html
   │
   ├─► prompt("Nombre") + prompt("Apellido")
   │     └─► Normalización a mayúsculas (.toUpperCase())
   │     └─► Concatenación: nombreCompleto
   │
   ├─► sessionStorage.setItem("nombreJugadorCompleto", nombreCompleto)
   │
   ├─► Inyección de saludo: <p id="mensajeBienvenida">Bienvenido [nombreCompleto]</p>
   │
   └─► Enlace a padel.html
         │
         ▼
padel.html
   │
   ├─► sessionStorage.getItem("nombreJugadorCompleto")
   │
   ├─► prompt("Edad") -> parseInt()
   ├─► prompt("Sexo") -> toUpperCase()
   ├─► prompt("Ranking") -> parseInt()
   │
   ├─► Evaluación de Reglas de Negocio (if / else if / else)
   │     │
   │     ├── Sexo: "M" -> Masculino | "F" -> Femenino
   │     │
   │     └── Edad:
   │           ├── > 30 años: Liguilla "Veteranos" (sin categoría asignada)
   │           └── <= 30 años: Liguilla "Senior"
   │                 ├── Ranking 1 - 50: "1ª categoria"
   │                 ├── Ranking 51 - 100: "2ª categoria"
   │                 └── Ranking > 100: "3ª categoria"
   │
   └─► Inyección final en DOM: <p id="informacionJugador">...</p>
```

---

## 📋 Reglas de Clasificación del Torneo

### 1. Género
- Si el sexo es `"M"`: **Masculino**.
- En caso contrario: **Femenino**.

### 2. Liguilla por Edad
- **Mayor de 30 años (`edad > 30`)**: **Veteranos** (no tiene asignación de categoría por ranking).
- **30 años o menos (`edad <= 30`)**: **Senior** (se le asigna categoría por ranking).

### 3. Categoría (Solo categoría Senior)
| Posición en el Ranking | Categoría Asignada |
| :---: | :---: |
| `1` a `50` | **1ª categoria** |
| `51` a `100` | **2ª categoria** |
| Mayor a `100` | **3ª categoria** |

---

## 🔍 Detalle del Código Fuente

### 1. Registro y almacenamiento (`script.js` en `usuario.html`)
```javascript
let nombreJugador = prompt("Introduzca su nombre por favor: ").toUpperCase();
let apellidoJugador = prompt("Introduzca su apellido porfavor: ").toUpperCase();
let nombreCompleto = nombreJugador + " " + apellidoJugador;

// Guarda el nombre completo en la sesión activa del navegador
sessionStorage.setItem("nombreJugadorCompleto", nombreCompleto);

// Inyecta el mensaje de bienvenida en el DOM
document.getElementById("mensajeBienvenida").innerHTML = "Bienvenido " + nombreCompleto;
```

> **Nota técnica:** `script.js` se importa al final del `<body>` de `usuario.html` para asegurar que el elemento `<p id="mensajeBienvenida">` ya exista en el DOM al momento de ejecutar `document.getElementById()`.

### 2. Clasificación y renderizado (`padel.html`)
```javascript
let nombreJugadorCompleto = sessionStorage.getItem("nombreJugadorCompleto");

let edadJugador = parseInt(prompt("Introduzca su edad porfavor: "));
let sexoJugador = prompt("Introduzca su sexo porfavor (M/F): ").toUpperCase();
let rankingJugador = parseInt(prompt("Introduzca su posicion en el Ranking (Padel): "));

let liguilla = "";
let genero = (sexoJugador === "M") ? "Masculino" : "Femenino";
let categoria = "";

if (edadJugador > 30) {
  liguilla = "Veteranos";
} else {
  liguilla = "Senior";
  if (rankingJugador >= 1 && rankingJugador <= 50) {
    categoria = "1ª categoria";
  } else if (rankingJugador >= 51 && rankingJugador <= 100) {
    categoria = "2ª categoria";
  } else {
    categoria = "3ª categoria";
  }
}

let mensaje = nombreJugadorCompleto + " jugara en la liguilla <b>" + liguilla + " " + genero + "</b>";

if (categoria !== "") {
  mensaje = mensaje + " en <b>" + categoria + "</b>.";
}

document.getElementById("informacionJugador").innerHTML = mensaje;
```

---

## 🚀 Cómo Ejecutar y Probar

1. Abre [`usuario.html`](./usuario.html) en el navegador.
2. Escribe tu nombre (ej. `Marc`) y apellido (ej. `Panisello`) en los diálogos emergentes.
3. Se mostrará el texto: `Bienvenido MARC PANISELLO` en pantalla.
4. Haz clic en el enlace **"Ir a padel.html"**.
5. Responde a las tres preguntas emergentes:
   - **Edad** (ej. `25`).
   - **Sexo** (`M` o `F`).
   - **Ranking** (ej. `34`).
6. El resultado final aparecerá maquetado en pantalla:
   > **MARC PANISELLO jugara en la liguilla Senior Masculino en 1ª categoria.**
