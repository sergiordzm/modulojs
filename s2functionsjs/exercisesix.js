/*3.- Tenemos un juego en el que se usan dos dados, y las reglas son las siguientes:
    - El juego se gana si se obtiene alguno de los siguientes puntajes:
          7, 11, 3
    - Se obtiene una tirada extra con las siguientes condiciones:
      --Obteniendo dos números iguales
      --Obteniendo un número divisible entre 3, pero que no sea 3*/

const die = (number1, number2) => {
  let addDie = number1 + number2;
  if (addDie) {
    switch (addDie) {
      case 7:
        return "Has ganado";
      case 11:
        return "Has ganado";
      case 3:
        return "Has ganado";
      default:
        if (number1 === number2 || (addDie % 3 === 0 && addDie !== 3)) {
          return "Vuelve a tirar";
        } else {
          return "Suerte para la próxima";
        }
    }
  }
};

let result = die(2, 3);

console.log(result);
