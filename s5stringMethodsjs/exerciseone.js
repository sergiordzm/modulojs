/*considerando la frase "Si creer no puedes, es por eso que fallas."
    1.- necesito poder reemplazar todas las coincidencias de un grupo de caracteres dentro de la frase
        grupo de caracteres = "es"
        reemplazo = "xx"
        => Si creer no puedxx, xx por xxo que fallas.
    2.- necesito invertir completamente la frase
        frase: hola koders
        resultado: sredok aloh
    3.- necesito obtener la cantidad de palabras que hay en la frase
    4.- Necesito conocer la cantidad de palabras cortas y de palabras largas que hay en la frase, considerando una palabra corta como aquella que tiene menos de 5 caracteres*/

// 1

let phrase = "Si creer no puedes, es por eso que fallas.";

const replaceChar = (fullPharse) => {
  let replacePhrase = fullPharse.replace(/es/g, "xx");
  return replacePhrase;
};

let replace = replaceChar(phrase);
console.log(replace);

// 2

let shortPhrase = "hola koders";

const reinvestChar = (shortPhrase) => {
  let result = "";
  let splitPhrase = shortPhrase.split("");
  let reverArray = splitPhrase.reverse();
  let joinArray = reverArray.join("");
  result = joinArray;
  return result;
};

let reverse = reinvestChar(shortPhrase);
console.log(reverse);

// 3

const lengthChar = (samePhrase) => {
  let result = "";
  let splitSamePhrase = samePhrase.split(" ");
  let lengthSamePhrase = splitSamePhrase.length;
  result = lengthSamePhrase;
  return result;
};

let length = lengthChar(phrase);
console.log(length);

// 4

const counterByWord = (myPhrase) => {
  let splitPhrase = myPhrase.split(" ");
  let shor = 0;
  let long = 0;
  for (let i = 0; i < splitPhrase.length; i++) {
    let word = splitPhrase[i];
    if (word.length < 5) {
      shor++;
    } else if (word.length > 5) {
      long++;
    }
  }
  return {
    shor: shor,
    long: long,
  };
};

let resultCount = counterByWord(phrase);
console.log(resultCount);
