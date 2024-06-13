/*1.- Necesitamos poder evaluar cualquier frase, y determinar si es una frase corta o es una frase larga, teniendo en cuenta que una frase corta tiene menos de 20 letras y una larga tiene 20 letras o más*/

const lengthPhrase = (phrase) => {
  let length = phrase.length;
  if (length < 20) {
    return "Esta es una frase corta";
  } else if (length >= 20) {
    return "Esta es una frase larga";
  }
};

let result = lengthPhrase("Mi perro se portó muy bien en la plaza");

console.log(result);
