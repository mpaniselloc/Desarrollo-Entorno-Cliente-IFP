
//Bloque de declaracion de constantes y variables con cons y let

const nombreTienda = "Tiendecilla"; //Declaracion de constante inicializada como Tiendecilla


let producto = "Libro: El archivo de las tormentas"; //Declaracion variable producto, inicializada como libro


let precioUnitario = 19.99; //Declaracion variable  precio, inicializada como 19.99


let cantidad = 12; //Declaracion variable de cantidad, inicializada como 12


let hayStock = true; // Declaracion variable stock como boolean, inicializada en true


// Apartado de calculos


let subtotal = precioUnitario * cantidad; // Declaracion e inicializacion del subtotal comop resultado del precioUnitario por la cantidad sin impuestos


let precioFinal = subtotal * 1.21; // Declaracion del total con impuestos del 21% IVA

//Bloque de salida de datos

//Mensaje de bienvenida a la tienda con el producto seleccionado

console.log("Bienvenido a nuestra " + nombreTienda + " el producto que usted ha seleccionado es " + producto); //Concatenacion con la constante nombreTienda y la variable producto

//Mostrar el resultado de las variables subtotal y precioFinal

console.log ("El precio total del producto sin impuesto es: "+ subtotal); //Concatenacion con el subtotal
console.log ("El precio total del producto con el impuesto al valor añadido (IVA del 21%) es: "+ precioFinal); //Concatenacion con el precioFinal


// Salida por consola con typeof del tipo de las variables precioFinal y hayStock
console.log(typeof precioFinal); //Mostramos el tipo de dato de precioFinal
console.log (typeof hayStock); // Mostramos el tipo de dato de hayStock