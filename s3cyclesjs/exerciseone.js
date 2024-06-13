/*
    considerar la siguiente frase para todos los ejercicios:

    En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.

    1.- necesito saber la cantidad de caracteres de la frase
    2.- necesito poder ver caracter por caracter cada uno de los caracteres de la frase (sólo imprimirlos)
    3.- necesito saber la cantidad de vocales que tiene la frase
    4.- necesito saber la cantidad de consonantes que tiene la frase
        // regex
        // test

*/

// 1
const lengthPhrase = (phrase) => {
  return phrase.length;
};

let result = lengthPhrase(
  "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino."
);

console.log(result);

// 2
const charPhrase = (phrase) => {
  for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
  }
};

let charResult = charPhrase(
  "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino."
);

console.log(charResult);

// 3

let regex = /[aeiouAEIOU]/;
let phrase =
  "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";
let vocals = 0;

for (let i = 0; i < phrase.length; i++) {
  if (regex.test(phrase[i])) {
    vocals++;
  }
}

console.log(vocals);

// 4

let regexTwo = /[bBcCdDfFgGhHjJkKlLmMnNñÑpPqQrRsStTvVwWxXyYzZ]/;
let phraseTwo =
  "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";
let vocalsTwo = 0;

for (let i = 0; i < phraseTwo.length; i++) {
  if (regexTwo.test(phraseTwo[i])) {
    vocalsTwo++;
  }
}

console.log(vocalsTwo);
