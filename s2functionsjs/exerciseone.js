/*sumar dos números*/

const add = (firstNumber, secondNumber) => {
  let add = firstNumber + secondNumber;
  return add;
};

let firstVariable = add(10, 20);
console.log(firstVariable);

/*restar dos numeros*/

const subtract = (firstNumber, secondNumber) => {
  let sub = secondNumber - firstNumber;
  return sub;
};

let secondVariable = subtract(10, 20);
console.log(secondVariable);

/*multiplicar dos numeros*/
const multi = (firstNumber, secondNumber) => {
  let mult = firstNumber * secondNumber;
  return mult;
};

let thirdvariable = multi(10, 20);

/*divir dos numeros*/
const division = (firstNumber, secondNumber) => {
  let div = secondNumber / firstNumber;
  return div;
};

let fourthVariable = division(10, 20);
console.log(fourthVariable);

/*saber si un numero es par*/

const modul = (firstNumber) => {
  let mod = firstNumber % 2 === 0;
  return mod;
};

let fifthVariable = modul(10);
console.log(fifthVariable);
