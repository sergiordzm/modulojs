const die = (dieNumber) => {
  switch (dieNumber) {
    case 1:
      return "Ganaste 5 puntos";
    case 3:
      return "Ganaste 10 puntos";
    case 5:
      return "Ganaste 15 puntos";
    default:
      return "Lo siento, no ganaste puntos";
  }
};

let result = die(4);

console.log(result);
