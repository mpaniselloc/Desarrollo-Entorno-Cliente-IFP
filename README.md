# Desarrollo Web en Entorno Cliente (DAW - iFP)

Repositorio central de prácticas, actividades y proyectos de la asignatura **Desarrollo Web en Entorno Cliente**, correspondiente al ciclo formativo de grado superior en **Desarrollo de Aplicaciones Web (DAW)** impartido en **iFP (Innovación en Formación Profesional)**.

- **Autor:** Marc Panisello Chiva
- **Módulo:** Desarrollo Web en Entorno Cliente
- **Rama:** `main`

---

## 🗂️ Estructura Global del Repositorio

```text
Desarrollo-Entorno-Cliente-IFP/
├── README.md                              # Documentación general del repositorio (rama main)
│
├── UF1/                                   # Unidad Formativa 1: Sintaxis y objetos en cliente
│   ├── README.md                          # Documentación de UF1 / NF1
│   └── NF1_DAW_Marc_Panisello_Chiva/
│       ├── NF1_DAW_Marc_Panisello_Chiva.docx  # Memoria y entrega de la práctica
│       │
│       ├── ACT2/                          # Actividad 2: Tienda Virtual y operaciones básicas
│       │   ├── README.md                  # Documentación específica de ACT2
│       │   ├── index.html                 # Página de la tienda
│       │   └── script.js                  # Cálculos de IVA, variables y typeof
│       │
│       └── ACT3/                          # Actividad 3: Torneo de Pádel y Web Storage
│           ├── README.md                  # Documentación específica de ACT3
│           ├── usuario.html               # Registro y sessionStorage
│           ├── script.js                  # Lógica de captura y bienvenida
│           └── padel.html                 # Clasificación por categorías en DOM
│
└── UF2/                                   # Unidad Formativa 2 (Próximas entregas)
```

---

## 📚 Unidades Formativas

### 🔹 [UF1: Sintaxis, Control de Flujo y Entorno Cliente](./UF1/README.md)
Enfocada en el aprendizaje de la sintaxis moderna de JavaScript (ES6+), tipos de datos, control de flujo y manipulación del navegador.

#### Contenido del Núcleo Formativo 1 (NF1):
- **[Actividad 2 (ACT2)](./UF1/NF1_DAW_Marc_Panisello_Chiva/ACT2/README.md) — Tienda Virtual**:
  - Declaración semántica con `let` y `const`.
  - Tipos primitivos: `string`, `number`, `boolean`.
  - Operaciones de cálculo económico (subtotal e IVA del 21%).
  - Inspección dinámica de tipos con `typeof`.
  - Salidas descriptivas por consola con `console.log`.

- **[Actividad 3 (ACT3)](./UF1/NF1_DAW_Marc_Panisello_Chiva/ACT3/README.md) — Campeonato de Pádel**:
  - Aplicación interactiva multipágina.
  - Normalización de cadenas (`toUpperCase()`) y parseo numérico (`parseInt()`).
  - Persistencia en navegador entre páginas con la Web Storage API (`sessionStorage`).
  - Lógica condicional (`if`, `else if`, `else`) para clasificar según edad, sexo y ranking.
  - Modificación dinámica del DOM con `document.getElementById()` e `innerHTML`.

---

## 🛠️ Tecnologías Empleadas

- **HTML5:** Marcado semántico para la estructura de las vistas.
- **JavaScript (ES6+):** Programación y lógica en el lado del cliente.
- **DOM API:** Acceso y manipulación dinámica de elementos del documento.
- **Web Storage API:** Almacenamiento en sesión del usuario (`sessionStorage`).
- **Git & GitHub:** Control de versiones del código fuente.

---

## 🚀 Puesta en Marcha / Ejecución Local

Para clonar y explorar los proyectos localmente:

```bash
# 1. Clonar el repositorio
git clone https://github.com/mpaniselloc/Desarrollo-Entorno-Cliente-IFP.git

# 2. Acceder al directorio
cd Desarrollo-Entorno-Cliente-IFP

# 3. Abrir cualquiera de las actividades en el navegador
# Ejemplo ACT2:
# Abrir UF1/NF1_DAW_Marc_Panisello_Chiva/ACT2/index.html

# Ejemplo ACT3:
# Abrir UF1/NF1_DAW_Marc_Panisello_Chiva/ACT3/usuario.html
```

---

## 👤 Autor
- **Marc Panisello Chiva**
- Estudiante de DAW — *iFP (Innovación en Formación Profesional)*
