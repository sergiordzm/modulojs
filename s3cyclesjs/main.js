let phrase = "No lo intentes. Hazlo, o no lo hagas, pero no lo intentes.";

let phrase2 = "ay";

let n = 0;

/*n = 0*/
let firstChar = phrase[n++];
/*n = 1*/
let secondChar = phrase[n++];
/*n = 2*/
let thirdChar = phrase[n++];
/*n = 3*/
let fourthChar = phrase[n++];

/*Ciclo for*/
/*Permite repetir un proceso tantas veces como indiquemos en las instrucciones del ciclo*/

/*Ejemplo: imprimir cada uno de los caracteres de un string*/
let phrase1 = "hola"; /* string.length => 4*/

for (let i = 0; i < phrase1.length; i++) {
  console.log("i: ", i);
  console.log("phrase1: ", phrase1);
  console.log("char: ", phrase1[i]);
  console.log("---");
}
