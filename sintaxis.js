// Declaraciones de variables
var a = 1; // variable global
let b = 2; // "block-scoped" variable 
const c = 3; // block-scoped constante 

// Estructuras de control
if (a === 1) {
    console.log("a es 1");
} else if (a === 2) {
    console.log("a es 2");
} else {
    console.log("a no es ni 1 ni 2");
}

switch (b) {
    case 1:
        console.log("b es 1");
        break;
    case 2:
        console.log("b es 2");
        break;
    default:
        console.log("b no es ni 1 ni 2");
}

for (let i = 0; i < 3; i++) {
    console.log("indice i es", i);
}

let j = 0;
while (j < 3) {
    console.log("j es", j);
    j++;
}

do {
    console.log("Repetir hasta.. por lo que esto se imprime de todas formas");
} while (false);

// Declaracion de funciones
function greet(name) {
    console.log("Hola, " + name + "!");
}

// Llamada a la funcion
greet("IAW!");

// Arrow function
const alCuadrado = (x) => x * x;

console.log("El cuadrado de 5 es", alCuadrado(5));

// Declaracion de arreglo
let numbers = [12, 23, 34, 45, 56];

// Iteracion en un arreglo
numbers.forEach((number) => {
    console.log("El numero es", number);
});

// Declaracion de un objeto
let persona = {
    nombre: "John",
    edad: 30,
    legajo: 12345,
    activo: false
};

// Iteracion en campos de un objeto
for (let key in persona) {
    console.log(" - " + key + ":", persona[key]);
}

// Funciones First Class Citizens

let numeros = [-2, -1, 0, 1, 2];

let filtrado = numeros.filter(function (num) {
    return num >= 0;
 }
); 

console.log(filtrado);

a="Esto era un 1 mas arriba";
console.log(a);
