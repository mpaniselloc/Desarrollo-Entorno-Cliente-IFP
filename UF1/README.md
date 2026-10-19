# Desarrollo Web en Entorno Cliente (DAW - iFP)
## Unidad Formativa 1 (UF1): Sintaxis, Control de Flujo y Entorno Cliente

Repositorio de prácticas y actividades formativas de la asignatura **Desarrollo Web en Entorno Cliente**, perteneciente al ciclo formativo de grado superior en **Desarrollo de Aplicaciones Web (DAW)** en **iFP**.

- **Autor:** Marc Panisello Chiva
- **Módulo:** Desarrollo Web en Entorno Cliente
- **Unidad Formativa:** UF1
- **Núcleo Formativo:** NF1

---

## 📁 Estructura del Proyecto

```text
UF1/
└── NF1_DAW_Marc_Panisello_Chiva/
    ├── NF1_DAW_Marc_Panisello_Chiva.docx   # Documento descriptivo y memoria de la entrega
    ├── ACT2/                              # Actividad 2: Fundamentos y cálculos en tienda
    │   ├── index.html                     # Estructura HTML de la tienda
    │   └── script.js                      # Variables, tipos de datos, IVA y typeof
    └── ACT3/                              # Actividad 3: Campeonato de Pádel y Web Storage
        ├── usuario.html                   # Registro inicial del participante
        ├── script.js                      # Captura de datos, sessionStorage y saludo DOM
        └── padel.html                     # Clasificación por categorías y renderizado final
```

---

## 🎯 Contenido de la Unidad: NF1

El objetivo formativo de la **NF1** es dominar los cimientos del lenguaje JavaScript moderno (ES6+) ejecutado en el navegador, incluyendo:

- Declaración y ámbito de variables (`let`) y constantes (`const`).
- Tipos de datos primitivos (`string`, `number`, `boolean`) y su comprobación con el operador `typeof`.
- Operadores aritméticos, lógicos y de asignación.
- Estructuras condicionales y de toma de decisiones (`if`, `else if`, `else`).
- Interacción básica con el usuario (`prompt()`, `console.log()`).
- Manipulación básica del Document Object Model (DOM) mediante `document.getElementById()` y `innerHTML`.
- Persistencia temporal en el navegador mediante el objeto `sessionStorage` (Web Storage API).

---

## 🛒 Actividad 2 (ACT2) — Tienda Virtual y Gestión de Precios

### 📄 Archivos
- `ACT2/index.html`
- `ACT2/script.js`

### 💡 Descripción
Simulación de la lógica básica de facturación de un producto en un comercio en línea ("Tiendecilla"). Trabaja la declaración semántica de identificadores, operaciones numéricas básicas y diagnóstico de tipos.

### ⚙️ Funcionalidades Implementadas
1. **Definición de Datos**:
   - `const nombreTienda`: Nombre inmutable del comercio (`"Tiendecilla"`).
   - `let producto`: Nombre del artículo seleccionado (`"Libro: El archivo de las tormentas"`).
   - `let precioUnitario`: Precio base por unidad (`19.99`).
   - `let cantidad`: Unidades adquiridas (`12`).
   - `let hayStock`: Estado booleano de disponibilidad (`true`).
2. **Cálculos Aritméticos**:
   - `subtotal`: Multiplicación de precio unitario por cantidad sin impuestos (`precioUnitario * cantidad`).
   - `precioFinal`: Aplicación del Impuesto sobre el Valor Añadido (IVA del 21%) sobre el subtotal (`subtotal * 1.21`).
3. **Salida y Diagnóstico**:
   - Mensaje de bienvenida y resumen de la compra concatenando texto y valores.
   - Salida del desglose económico en la consola del navegador (`console.log`).
   - Verificación del tipo de dato de las variables `precioFinal` y `hayStock` mediante el operador `typeof`.

### 🚀 Cómo Ejecutar la ACT2
1. Abrir `ACT2/index.html` en cualquier navegador web.
2. Abrir las **Herramientas de Desarrollador** (`F12` o `Ctrl + Shift + I`) y seleccionar la pestaña **Consola** (*Console*) para ver los resultados de los cálculos y las comprobaciones de tipo.

---

## 🎾 Actividad 3 (ACT3) — Gestión del Campeonato de Pádel

### 📄 Archivos
- `ACT3/usuario.html`
- `ACT3/script.js`
- `ACT3/padel.html`

### 💡 Descripción
Aplicación web multipágina que simula el proceso de inscripción y asignación automática de categoría para un torneo de pádel. Implementa la persistencia de datos entre páginas sin necesidad de backend, usando `sessionStorage` y lógica condicional avanzada.

### 🔄 Flujo de la Aplicación

#### 1. Registro del Jugador (`usuario.html` + `script.js`)
- Solicita al usuario su **nombre** y **apellido** mediante cuadros de diálogo emergentes `prompt()`.
- Normaliza los textos convirtiéndolos a mayúsculas con `.toUpperCase()`.
- Concatena ambos valores para formar el nombre completo.
- Almacena el valor resultante en la sesión del navegador:
  ```javascript
  sessionStorage.setItem("nombreJugadorCompleto", nombreCompleto);
  ```
- Muestra un mensaje dinámico de bienvenida en el elemento `<p id="mensajeBienvenida">` mediante manipulación del DOM.
- Ofrece un enlace de navegación para continuar hacia `padel.html`.

#### 2. Categorización y Asignación (`padel.html`)
- Recupera el nombre del jugador almacenado previamente:
  ```javascript
  let nombreJugadorCompleto = sessionStorage.getItem("nombreJugadorCompleto");
  ```
- Solicita mediante `prompt()` los datos adicionales necesarios, parseando números con `parseInt()`:
  - **Edad** del jugador.
  - **Sexo** (`M`/`F`), estandarizado en mayúsculas.
  - **Posición en el Ranking** oficial de pádel.
- Evalúa los datos con sentencias condicionales (`if / else / else if`):
  - **Género**: `Masculino` (si `M`) o `Femenino`.
  - **Liguilla**:
    - Si la edad es **mayor a 30**: asigna a la liguilla de **"Veteranos"**.
    - Si la edad es **30 o inferior**: asigna a la liguilla de **"Senior"**.
  - **Categoría (exclusiva para Senior)**:
    - Ranking entre 1 y 50: **1ª categoría**.
    - Ranking entre 51 y 100: **2ª categoría**.
    - Ranking mayor a 100: **3ª categoría**.
- Formatea e inyecta la resolución final directamente en el documento web dentro del elemento con id `informacionJugador`:
  ```html
  <p id="informacionJugador">[Nombre Completo] jugara en la liguilla <b>[Liguilla] [Género]</b> en <b>[Categoría]</b>.</p>
  ```

### 🚀 Cómo Ejecutar la ACT3
1. Abrir `ACT3/usuario.html` en el navegador.
2. Introducir nombre y apellido en las ventanas emergentes.
3. Observar el saludo en pantalla y hacer clic en el enlace **"Ir a padel.html"**.
4. Completar edad, sexo y puesto de ranking en los avisos del navegador.
5. Visualizar la liguilla y categoría asignada directamente en la página web.

---

## 🛠️ Tecnologías y Conceptos Utilizados

| Tecnología / Concepto | Uso en el Proyecto |
| :--- | :--- |
| **HTML5** | Estructura semántica básica de las páginas web. |
| **JavaScript (ES6+)** | Lógica de negocio, variables (`let`, `const`), tipos primitivos, operadores y condicionales. |
| **DOM API** | Selección (`document.getElementById`) y modificación del contenido (`innerHTML`). |
| **Web Storage API** | Almacenamiento y persistencia de datos entre páginas de una misma sesión (`sessionStorage`). |
| **BOM (Browser Object Model)** | Entrada y salida de datos del usuario (`prompt()`, `console.log()`). |

---

## 👤 Autor
- **Marc Panisello Chiva**
- Estudiante de DAW — *iFP (Innovación en Formación Profesional)*
