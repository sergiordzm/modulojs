/*2.- Necesitamos organizar jugadores con base en el color de su uniforme, 
      si el uniforme es gris, pertenecen al equipo 1
      si es negro, pertenecen al equipo 2
      si es azul, pertenecen al equipo 3
      cualquier otro color no tiene equipo ( no juega)*/

const player = (color) => {
  switch (color) {
    case "gris":
      return "Pertenecen al equipo 1";
    case "negro":
      return "Pertenecen al equipo 2";
    case "azul":
      return "Pertenecen al equipo 3";
    default:
      return "Lo siento, no jugarán";
  }
};

let result = player("rosa");

console.log(result);
