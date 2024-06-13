const die = (dieNumber) => {
  if (dieNumber % 2 === 0 && dieNumber <= 4) {
    return "Felicidades, has ganado!";
  } else if (dieNumber % 2 !== 0 && dieNumber > 2) {
    return "Lo siento, has perdido";
  }
};

let result = die(3);
console.log(result);
