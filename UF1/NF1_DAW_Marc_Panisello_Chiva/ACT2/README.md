# Actividad 2 (ACT2) — Gestión de Tienda Virtual

## 📌 Información General
- **Módulo:** Desarrollo Web en Entorno Cliente (DAW - iFP)
- **Unidad Formativa:** UF1
- **Núcleo Formativo:** NF1
- **Autor:** Marc Panisello Chiva
- **Directorio:** `UF1/NF1_DAW_Marc_Panisello_Chiva/ACT2`

---

## 🎯 Objetivo de la Actividad
El propósito de esta práctica es afianzar los conceptos fundamentales de la sintaxis de JavaScript en el entorno del navegador:
1. Declaración correcta de constantes (`const`) y variables reasignables (`let`).
2. Manejo de tipos de datos primitivos: `string`, `number` y `boolean`.
3. Realización de operaciones aritméticas básicas para cálculos comerciales (subtotal y recargo de IVA).
4. Emisión de mensajes informativos hacia la consola del desarrollador (`console.log`).
5. Uso del operador unario `typeof` para la inspección y comprobación de tipos de datos en tiempo de ejecución.

---

## 📂 Archivos del Proyecto

| Archivo | Descripción |
| :--- | :--- |
| [`index.html`](./index.html) | Documento HTML5 mínimo que define la página y enlaza el archivo de script. |
| [`script.js`](./script.js) | Lógica en JavaScript con la definición de variables, cálculos matemáticos y salidas por consola. |

---

## 🔍 Explicación del Código (`script.js`)

### 1. Declaración de Constantes y Variables
```javascript
const nombreTienda = "Tiendecilla"; // Nombre inmutable del comercio
let producto = "Libro: El archivo de las tormentas"; // Nombre del producto (String)
let precioUnitario = 19.99; // Precio base por unidad (Number)
let cantidad = 12; // Unidades seleccionadas (Number)
let hayStock = true; // Estado de disponibilidad (Boolean)
```
- Se utiliza `const` para aquellos valores que no deben mutar a lo largo del ciclo de vida del script (`nombreTienda`).
- Se utiliza `let` para las variables susceptibles de actualización en la lógica de negocio.

### 2. Cálculos Aritméticos
```javascript
let subtotal = precioUnitario * cantidad; // 19.99 * 12 = 239.88 (sin impuestos)
let precioFinal = subtotal * 1.21; // Aplicación del 21% de IVA = 290.2548
```
- Se calcula el importe bruto multiplicando precio por cantidad.
- Se calcula el importe neto multiplicando el subtotal por el factor `1.21` (equivalente al 21% de IVA).

### 3. Salida de Datos y Diagnóstico de Tipos
```javascript
console.log("Bienvenido a nuestra " + nombreTienda + " el producto que usted ha seleccionado es " + producto);
console.log("El precio total del producto sin impuesto es: " + subtotal);
console.log("El precio total del producto con el impuesto al valor añadido (IVA del 21%) es: " + precioFinal);

console.log(typeof precioFinal); // Salida: "number"
console.log(typeof hayStock);    // Salida: "boolean"
```
- Concatena cadenas de texto con los valores calculados.
- Emplea el operador `typeof` para verificar qué tipo primitivo almacena cada variable.

---

## 🖥️ Salida Esperada en la Consola

Al cargar `index.html`, la consola de desarrollo mostrará:

```text
Bienvenido a nuestra Tiendecilla el producto que usted ha seleccionado es Libro: El archivo de las tormentas
El precio total del producto sin impuesto es: 239.88
El precio total del producto con el impuesto al valor añadido (IVA del 21%) es: 290.2548
number
boolean
```

---

## 🚀 Cómo Ejecutar y Probar

1. Abre el archivo [`index.html`](./index.html) directamente en cualquier navegador web (Google Chrome, Firefox, Edge, etc.).
2. Pulsa la tecla `F12` (o combinación `Ctrl + Shift + I` en Windows/Linux, `Cmd + Option + I` en macOS).
3. Dirígete a la pestaña **Consola** (*Console*) para ver los mensajes emitidos por el script.
