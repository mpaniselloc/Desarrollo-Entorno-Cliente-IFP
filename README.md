# Desarrollo Web en Entorno Cliente (DAW - iFP)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Patrón MVC](https://img.shields.io/badge/Architecture-MVC-6C5CE7?style=for-the-badge)
![DAW](https://img.shields.io/badge/DAW-IFP-green?style=for-the-badge)

Repositorio central de prácticas, actividades y proyectos de la asignatura **Desarrollo Web en Entorno Cliente (0612)**, correspondiente al Ciclo Formativo de Grado Superior en **Desarrollo de Aplicaciones Web (DAW)** impartido en **iFP (Innovación en Formación Profesional)**.

- **Autor:** Marc Panisello Chiva
- **Módulo:** Desarrollo Web en Entorno Cliente (0612)
- **Rama principal:** `main`

---

## 🗂️ Estructura Global del Repositorio

```text
Desarrollo-Entorno-Cliente-IFP/
├── README.md                              # Documentación general del repositorio
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
└── UF2/                                   # Unidad Formativa 2: Objetos predefinidos y estructuras del usuario
    ├── README.md                          # Documentación técnica completa de UF2
    ├── viajes.html                        # Estructura semántica de la aplicación PaniViajes
    ├── viajes.css                         # Hoja de estilos desacoplada
    ├── viajes.js                          # Lógica orientada a objetos (Patrón MVC)
    └── imagen/                            # Recursos gráficos de los destinos turísticos
        ├── china.jpg
        ├── coreasur.jpg
        ├── india.jpg
        ├── japon.jpg
        ├── tailandia.jpg
        └── vietnam.jpg
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

### 🔹 [UF2: Objetos del Lenguaje, Clases y Patrón MVC](./UF2/README.md)
Enfocada en la arquitectura de software en cliente mediante clases, separación de responsabilidades y estructuras de datos dinámicas (RA4).

#### Contenido del Núcleo Formativo 2 (NF2):
- **[PaniViajes](./UF2/README.md) — Plataforma de Gestión Turística y Sorteos**:
  - **Patrón de Diseño MVC**: Desacoplamiento total entre datos (`ViajesModelo`), interfaz (`ViajesVista`) y eventos (`ViajesControlador`).
  - **Estructuras de Datos**: Almacenamiento y sincronización de colecciones en arrays paralelos (destinos, imágenes y tarifas).
  - **Carrusel Circular**: Algoritmo de rotación continua infinita para 6 destinos internacionales.
  - **Persistencia en Cliente (`localStorage`)**: Acumulación y persistencia del contador de visitas del usuario entre sesiones.
  - **Motor de Sorteo Probabilístico**: Generación pseudoaleatoria con el objeto predefinido `Math`, condicionales compuestos y cálculo dinámico de descuentos comerciales (15%).

---

## 🛠️ Tecnologías y Conceptos Empleados

- **HTML5:** Marcado semántico y estructuración de interfaces de usuario.
- **CSS3:** Maquetación responsiva, diseño en tarjetas y control de visibilidad (`.oculto`).
- **JavaScript (ES6+):** Clases (`class`), constructores, métodos y manipulación del DOM.
- **Patrones de Arquitectura:** MVC (Modelo-Vista-Controlador) para aplicaciones web en cliente.
- **Web Storage API:** Persistencia de datos en el cliente (`localStorage` y `sessionStorage`).
- **Git & GitHub:** Control de versiones, ramas y documentación técnica.

---

## 🚀 Puesta en Marcha / Ejecución Local

Para clonar y explorar los proyectos localmente:

```bash
# 1. Clonar el repositorio
git clone https://github.com/mpaniselloc/Desarrollo-Entorno-Cliente-IFP.git

# 2. Acceder al directorio
cd Desarrollo-Entorno-Cliente-IFP

# 3. Abrir cualquiera de las actividades en el navegador
# Ejemplo UF1 - ACT2:
# Abrir UF1/NF1_DAW_Marc_Panisello_Chiva/ACT2/index.html

# Ejemplo UF1 - ACT3:
# Abrir UF1/NF1_DAW_Marc_Panisello_Chiva/ACT3/usuario.html

# Ejemplo UF2 - PaniViajes:
# Abrir UF2/viajes.html
```

---

## 👤 Autor
- **Marc Panisello Chiva**
- Estudiante de DAW — *iFP (Innovación en Formación Profesional)*
