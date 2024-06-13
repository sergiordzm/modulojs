console.log("Hola Koders");

// Declaración
let myName = "Sergio Rodríguez";

// Reasignación
myName = "Sergio Morales";

let foo = "some value";

console.log(foo);

foo = "other value";

console.log(foo);

const BASE_URL = "my-users-api.com";

console.log(BASE_URL);

let myGlobalVariable = "Global value";

console.log(myGlobalVariable);

const myFunction = () => {
  console.log(myGlobalVariable);
  let myLocalVariable = "local variable";
  console.log(myLocalVariable);
};

myFunction();

// let x = 27;

// console.log(x);

// let y = x;

// console.log(y);

// x = 72;

// console.log(x);
// console.log(y);

// let koderList = ["Sergio", "Mariana"];

// console.log(koderList);

// let secondKoderList = koderList;

// console.log(secondKoderList);

// koderList.push("Mary");

// console.log(koderList);

// console.log(secondKoderList);

let myString = "Hola mundo";

console.log(typeof myString);

let myAge = 27;

console.log(typeof myAge);

let myThird = true;

console.log(typeof myThird);

let myFourthDataType;

console.log(typeof myFourthDataType);

let hobbies = null;

console.log(typeof hobbies);

// Objetos

let objeto = {
  nombre: "Sergio Rodríguez",
  lastname: "Rodríguez",
  age: 27,
  isold: true,
  greeting: () => {
    console.log("Hola");
  },
};

// Array

let kodersList = ["Sergio", "Mariana", "Mary"];

let dogs = [
  { breed: "Chihuahua", name: "Dog" },
  { breed: "French", name: "Dog" },
];

// Operadores aritméticos

// Suma

let number1 = 10;
let number2 = 5;

let adittion = number1 + number2;
console.log(adittion);

// Resta

let substraction = number1 - number2;
console.log(substraction);

// Multiplicación;=

let multplication = number1 * number2;
console.log(multplication);

// División

let division = number1 / number2;
console.log(division);

// Módulo

let modulus = number1 % number2;
console.log(modulus);

// Incremento

console.log(++number1);

// Decremento

console.log(--number1);

// Operadores de asignación

// Asignación
let assignment = "bar";

// Asignación aditiva
number1 += 14;

// Asignación sustractiva
number1 -= 15;

// Asignación multiplicativa
number1 *= 3;

// Asignación divisiva
number1 /= 3;

// Asignación modular
number1 %= 3;

// Operadores de comparación

/*Mayor que*/

//number1 > number2  ---- true

/*Menor que*/

// number1 < number2 ---- false

/*Mayor o igual que*/

// number1 >= number2 ---- true

/*Menor o igual que*/

// number1 <= number2 ---- false

/*Igual que ( evalua que el valor sea el mismo entre dos variables )*/

let varX = 10;
let varY = "10";

console.log(varX == varY); /*---true---*/

/*Idéntico a ( evalua que tanto el valor como el tipo de dato sea el mismo entre dos variables)*/

console.log(varX === varY); /*---false---*/

/*Operadores lógicos*/
/*Sirven para evaluar la relación entre 2 o más expresiones de javascript*/

let logicVariableA = 20;
let logicVariableB = 15;
let logicVariableC = 30;

/*And (&&): Devuelve verdadero sí y sólo sí todas las expresiones implicadas son verdaderas*/

console.log(
  logicVariableA > logicVariableB && logicVariableB < logicVariableC
); /*----true---*/
console.log(
  logicVariableA > logicVariableB && logicVariableB > logicVariableC
); /*----false---*/

/*Or ( || ): Devuelve verdadero cuando al menos una de las expresiones evaluadas es verdadera*/

console.log(
  logicVariableA > logicVariableB || logicVariableB < logicVariableC
); /*----true---*/
console.log(
  logicVariableA > logicVariableB || logicVariableB > logicVariableC
); /*----true---*/
console.log(
  logicVariableA < logicVariableB || logicVariableB > logicVariableC
); /*----false---*/

/*Not ( !expresion ): invierte el resultado de la expresion con la que se está operando*/

let myBoolean = true;
console.log(!myBoolean); /*---false---*/

console.log(!(logicVariableA > logicVariableB)); /*---false---*/

/*Falsys y truthys*/

//Falsys (es un valor que se interpreta como un false booleano)

/*
  0
  ""
  null
  undefined
  NaN
*/

//Truthy: es un valor que interpreta como verdadero

/* !falsy*/
