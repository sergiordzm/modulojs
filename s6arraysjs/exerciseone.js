/*
  con el array numbers:
    1.- Obtener la suma total de todos los números que estan dentro del array
    2.- Necesitamos obtener una nueva lista con únicamente los números que sean pares
    3.- Necesitamos obtener una nueva lista con únicamente los números que sean nones*/
let numbers = [12, 45, 7, 33, 22, 14, 49, 27, 5, 38];

const addNumbers = (arrayNumbers) => {
  let add = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    add = add + arrayNumbers[i];
  }
  return add;
};

let addResult = addNumbers(numbers);
console.log(addResult);

const parNumbers = (arrayParNumbers) => {
  let arrayNew = [];
  for (let i = 0; i < arrayParNumbers.length; i++) {
    if (arrayParNumbers[i] % 2 == 0) {
      arrayNew.push(arrayParNumbers[i]);
    } else {
    }
  }
  return arrayNew;
};

let parResult = parNumbers(numbers);
console.log(parResult);

const nonNumbers = (arrayNonNumbers) => {
  let arrayNewNon = [];
  for (let i = 0; i < arrayNonNumbers.length; i++) {
    if (arrayNonNumbers[i] % 2 !== 0) {
      arrayNewNon.push(arrayNonNumbers[i]);
    } else {
    }
  }
  return arrayNewNon;
};

let nonResult = nonNumbers(numbers);
console.log(nonResult);
/*con el array people:
    1.- Necesitamos una nueva lista con únicamente los nombres de las personas 
    2.- Necesitamos una nueva lista que tenga los nombres completos de las personas*/

let people = [
  ["Juan", "Gómez", "Martínez"],
  ["Ana", "Pérez", "López"],
  ["Carlos", "Rodríguez", "García"],
  ["María", "Fernández", "Sánchez"],
  ["Luis", "Hernández", "Torres"],
];

const nameArray = (names) => {
  let arrayNames = [];
  for (let i = 0; i < names.length; i++) {
    arrayNames.push(names[i][0]);
  }
  return arrayNames;
};

let resultNames = nameArray(people);
console.log(resultNames);

const fullNameArray = (fullName) => {
  let fullNameArray = [];
  for (let i = 0; i < fullName.length; i++) {
    fullNameArray.push(fullName[i].join(" "));
  }
  return fullNameArray;
};

let resultFulllName = fullNameArray(people);
console.log(resultFulllName);

/*con el array users:
    1.- Necesito una nueva lista, que contenga únicamente los nombres completos de los usuarios
    2.- Necesito saber la edad promedio de los usuarios
    3.- Necesito poder obtener una nueva lista de los usuarios con base en su país
    4.- Necesito obtener una nueva lista con base en un hobbie ( includes )
    5.- Necesito una lista que contenga los diferentes hobbies de nuestros usuarios sin repetir
*/

let users = [
  {
    name: "Juan",
    lastname: "Pérez",
    age: 25,
    hobbies: ["leer", "correr"],
    country: "México",
  },
  {
    name: "Ana",
    lastname: "García",
    age: 30,
    hobbies: ["viajar", "pintar", "nadar"],
    country: "Argentina",
  },
  {
    name: "Carlos",
    lastname: "López",
    age: 45,
    hobbies: ["cantar"],
    country: "Chile",
  },
  {
    name: "María",
    lastname: "Fernández",
    age: 22,
    hobbies: ["leer", "correr", "bailar"],
    country: "Colombia",
  },
  {
    name: "Luis",
    lastname: "Gómez",
    age: 35,
    hobbies: ["jugar fútbol", "viajar"],
    country: "México",
  },
  {
    name: "Sofía",
    lastname: "Rodríguez",
    age: 28,
    hobbies: ["cocinar", "leer"],
    country: "Chile",
  },
  {
    name: "José",
    lastname: "Sánchez",
    age: 40,
    hobbies: ["nadar", "escribir"],
    country: "Argentina",
  },
  {
    name: "Laura",
    lastname: "Martínez",
    age: 26,
    hobbies: ["pintar", "cantar"],
    country: "México",
  },
  {
    name: "Miguel",
    lastname: "Hernández",
    age: 33,
    hobbies: ["correr", "jugar fútbol"],
    country: "Colombia",
  },
  {
    name: "Lucía",
    lastname: "Torres",
    age: 29,
    hobbies: ["viajar", "bailar"],
    country: "Chile",
  },
];

const namesObjects = (fullNames) => {
  let fullNamesArray = [];
  for (let i = 0; i < fullNames.length; i++) {
    fullNamesArray.push(fullNames[i]["name"]);
    fullNamesArray.push(fullNames[i]["lastname"]);
  }
  return fullNamesArray;
};

let resultFullNameObjects = namesObjects(users);

console.log(resultFullNameObjects);

const averageAge = (ageUsers) => {
  let addition = 0;
  let average = "";
  for (let i = 0; i < ageUsers.length; i++) {
    addition += ageUsers[i]["age"];
    average = addition / ageUsers.length;
  }
  return average;
};

let resultAverage = averageAge(users);
console.log(resultAverage);

const country = (countryUsers) => {
  let country = [];
  for (let i = 0; i < countryUsers.length; i++) {
    country.push(countryUsers[i]["country"]);
  }
  return country;
};

let resultCountry = country(users);
console.log(resultCountry);

const hobbie = (hobbierUsers) => {
  for (let i = 0; i < hobbierUsers.length; i++) {
    if (hobbierUsers[i][""]) {
    }
  }
};

const filterByHobbie = (dataArray, hobbyToSearch) => {
  let result = [];
  for (let i = 0; i < dataArray.length; i++) {
    let user = dataArray[i];
    let userHasHobby = user.hobbies.includes(hobbyToSearch);
    if (userHasHobby) result.push(user);
  }
  return result;
};

let pamboleros = filterByHobbie(users, "correr");

let uniqueSetHobbies = (dataArray) => {
  let allHobbies = [];
  for (let i = 0; i < dataArray.length; i++) {
    let userHobbies = dataArray[i].hobbies;
    allHobbies = [...allHobbies, ...userHobbies];
  }
  uniqueHobbies = new Set([...allHobbies]);
  return uniqueHobbies;
};

let resultUniqueHobbies = uniqueSetHobbies(users);

console.log(resultUniqueHobbies);

let user = {
  name: "Lucía",
  lastname: "Torres",
  age: 29,
  hobbies: ["viajar", "bailar"],
  country: "Chile",
};

let scores = {
  html: 9,
  css: 9,
  js: 10,
};

let spreadedUser = { ...user, ...scores, isRegistered: true, generation: 34 };

console.log(spreadedUser);
