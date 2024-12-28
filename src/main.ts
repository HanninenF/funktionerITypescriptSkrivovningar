import "./style.scss";
import { people, animals, vehicles, heroes } from "./data";
import {
  Hobby,
  Person,
  Animal,
  Vehicle,
  Bike,
  Car,
  Hero,
  AllowedOccupation,
} from "./types";
import { NULL } from "sass";
/* Typa upp alla funktioner
OBS! Alla funkttioner skall vara typade på både värdet som funktionen tar emot och det som returneras.

All vår TS-kod skall vara typad och för dessa övningar betyder det att vi ibland måste lägga till ett Type alias eller liknande.

Tema siffror
Minsta värdet
Skriv en funktion som tar emot två tal och returnerar det tal som är minst av de två

*/

const getTheSmallestValue = (x: number, y: number): number => {
  const smallestNumber = Math.min(x, y);

  return smallestNumber;
};

console.log(getTheSmallestValue(78, 5));

/*Summa
Skriv en funktion som tar emot två tal och returnerar summan av talen

(TIPS: summera betyder addition dvs plus)

*/
const getSum = (x: number, y: number): number => {
  const sum: number = x + y;
  return sum;
};

console.log(getSum(45, 32));

/*Dubblera max
Skriv en funktion som tar emot två tal och returnerar det största av dem multiplicerat med 2.

*/
const getDoubbledMax = (x: number, y: number): number => {
  const max: number = Math.max(x, y);

  const doubbledMax: number = max * 2;

  return doubbledMax;
};

console.log(getDoubbledMax(8, 4));

/*Minus det minsta
Skriv en funktion som tar emot två tal. Funktionen ska ta det större av de två talen och subtrahera (minus) det mindre av de två talen. Returnera resultatet.

*/ const getBiggestMinusSmallest = (x: number, y: number): number => {
  const smallest: number = Math.min(x, y);
  let result: number = Math.max(x, y) - smallest;
  return result;
};

console.log(getBiggestMinusSmallest(6, 3));

/*
Tema strängar
Del av alfabetet
Skriv en funktion som tar emot en siffra n och som returnerar en array med de första n bokstäverna i alfabetet.

*/
const getLetterFromNumber = (x: number): string => {
  const letterResult: string = String.fromCharCode(64 + x);
  return letterResult;
};

console.log(getLetterFromNumber(12));
/*(kommer mer här)


Tema arrayer
Hitta max
Skriv en funktion som tar emot en array av siffror och returnerar den största siffran i arrayen.
*/
const getBiggestNumberFromNumbers = (numbers: number[]): number => {
  let biggestNumber: number = 0;
  numbers.forEach((number) => {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  });

  return biggestNumber;
};

const numbers = [
  40886,
  40886, // 2 gånger
  40620,
  40620, // 2 gånger
  313,
  313,
  313, // 3 gånger
  5779,
  5779,
  5779,
  5779, // 4 gånger
  7141,
  7141, // 2 gånger
  18628,
  18628, // 2 gånger
  18427,
  18427,
  18427, // 3 gånger
  20600,
  20600,
  20600,
  20600, // 4 gånger
  18309,
  18309, // 2 gånger
  33198,
  33198,
  33198, // 3 gånger
  22465,
  22465,
  22465,
  22465, // 4 gånger
  19296,
  19296, // 2 gånger
  25177,
  25177, // 2 gånger
  622,
  622,
  622, // 3 gånger
  9272,
  9272,
  9272,
  9272,
  9272, // 5 gånger
];

console.log(getBiggestNumberFromNumbers(numbers));

/* 
  Hitta längsta ordet
  Skriv en funktion som tar emot en array av strängar och returnerar den längsta strängen.

  */

const getLongestString = (stringsInput: string[]): number => {
  let longestString: string = "";
  let longestStringIndex: number = 0;
  stringsInput.forEach((string, index) => {
    if (string.length > longestString.length) {
      longestString = string;
      longestStringIndex = index;
    }
  });

  return longestStringIndex;
};

const stringType = [
  "Hello",
  "World!",
  "JavaScript",
  "is",
  "awesome",
  "I love coding",
  "short",
  "longer string here that says absolutely nothing",
  "example",
  "of",
  "different",
  "lengths",
  "arrays are great",
  "and fun",
  "JavaScript arrays",
] as const;

const strings = [
  "Hello",
  "Hello", // 2 gånger
  "World!",
  "World!", // 2 gånger
  "JavaScript",
  "JavaScript",
  "JavaScript", // 3 gånger
  "another hour",
  "awesome",
  "awesome",
  "awesome",
  "awesome",
  "awesome", // 5 gånger
  "I love coding",
  "I love coding", // 2 gånger
  "short",
  "short", // 2 gånger
  "longer string here that says absolutely nothing",
  "longer string here that says absolutely nothing", // 2 gånger
  "example",
  "example",
  "example",
  "example", // 4 gånger
  "of",
  "of",
  "of", // 3 gånger
  "different",
  "different",
  "different", // 3 gånger
  "lengths",
  "lengths",
  "lengths", // 3 gånger
  "arrays are great",
  "arrays are great", // 2 gånger
  "and fun",
  "and fun", // 2 gånger
  "JavaScript arrays",
  "JavaScript arrays",
  "JavaScript arrays", // 3 gånger
  "best of the best",
  "best of the best", // 2 gånger
  "don't bother me",
  "don't bother me", // 2 gånger
  "alrighty",
  "alrighty", // 2 gånger
  "doddle of birds",
  "doddle of birds", // 2 gånger
];

const strings2 = [
  "Hello",
  "Hello", // 2 gånger
  "World!",
  "World!", // 2 gånger
  "JavaScript",
  "starlight",
  "JavaScript",
  "JavaScript", // 3 gånger
  "awesome",
  "awesome",
  "awesome",
  "awesome",
  "awesome", // 5 gånger
  "I love coding",
  "I love coding", // 2 gånger
  "short",
  "short", // 2 gånger
  "longer string here that says absolutely nothing",
  "longer string here that says absolutely nothing", // 2 gånger
  "example",
  "example",
  "example",
  "example", // 4 gånger
  "of",
  "of",
  "of", // 3 gånger
  "different",
  "different",
  "different", // 3 gånger
  "lengths",
  "lengths",
  "lengths", // 3 gånger
  "arrays are great",
  "arrays are great", // 2 gånger
  "and fun",
  "and fun", // 2 gånger
  "JavaScript arrays",
  "JavaScript arrays",
  "JavaScript arrays", // 3 gånger
  "best of the best",
  "best of the best", // 2 gånger
  "don't bother me",
  "don't bother me", // 2 gånger
  "alrighty",
  "alrighty", // 2 gånger
  "doddle of birds",
  "doddle of birds", // 2 gånger
];
type AllowedStrings = (typeof stringType)[number];
console.log(getLongestString(strings));

/* 
  Hitta längsta ordet
  Skriv en funktion som tar emot en array av strängar och returnerar den längsta strängen.

  */
/*
  UTMANING: Returnera ett objekt med den längsta strängen och dess index i arrayen.

  */

const longestStringIndex: number = getLongestString(strings);
const longestStringType = strings[longestStringIndex];
const longestString = [longestStringType] as const;
type LongestString = (typeof longestString)[number];

console.log(`longestString= ${longestStringType}`);
type stringObject = {
  longestString: LongestString;
  index: number;
};

const getObjectFromLongestString = (
  stringsArray: string[],
  stringInput: LongestString
): stringObject => {
  let stringObj: stringObject = { longestString: "", index: -1 };
  let longestString: string = "";
  stringsArray.forEach((string, index) => {
    if (string.length > longestString.length) {
      stringObj = { longestString: stringInput, index: index };
      longestString = string;
    }
  });

  return stringObj;
};

console.log(getObjectFromLongestString(strings, strings[longestStringIndex]));

const foo = (x: LongestString) => {
  console.log(x);
};

foo("d");

/*Hitta vanligaste bokstaven
Skriv en funktion som tar emot en array av strängar och returnerar den bokstav som är vanligast bland strängarna.

UTMANING: Returnera ett objekt med den vanligaste bokstaven, den strängen i arrayen som har flest sådana bokstäver av alla strängar i arrayen och den strängens position i arrayen.


*/
const getMostComonLetterFromStrings = (stringInput: string[]): string => {
  let allLetters: string[] = [];
  stringInput.forEach((str) => {
    allLetters.push(...str.toLowerCase().split(""));
  });

  const alphabet: { [key: string]: string[] } = {
    a: [""],
    b: [""],
    c: [""],
    d: [""],
    e: [""],
    f: [""],
    g: [""],
    h: [""],
    i: [""],
    j: [""],
    k: [""],
    l: [""],
    m: [""],
    n: [""],
    o: [""],
    p: [""],
    q: [""],
    r: [""],
    s: [""],
    t: [""],
    u: [""],
    v: [""],
    w: [""],
    x: [""],
    y: [""],
    z: [""],
  };

  allLetters.forEach((letter) => {
    if (alphabet[letter]) {
      alphabet[letter].push(letter);
    }
  });

  console.log(alphabet);

  console.log(allLetters);

  let maxCount: number = 0;
  let mostCommonLetter: string = "";

  // Använd forEach för att iterera över objektet
  Object.entries(alphabet).forEach(([letter, occurrences]) => {
    const count = occurrences.length - 1; // Vi subtraherar 1 för att ta bort den tomma strängen
    if (count > maxCount) {
      maxCount = count;
      mostCommonLetter = letter; // Uppdatera den mest frekventa bokstaven
    }
  });

  const keys = Object.keys(alphabet);
  console.log("the keys are: ", keys);

  console.log("first letter is:", alphabet.a);

  if (alphabet.a.includes("b")) {
    console.log("error");
  }

  return mostCommonLetter;
};
console.log(getMostComonLetterFromStrings(strings));

/*
Generera siffer-array
Skriv en funktion som tar emot tre siffror och returnerar en array av siffror.

Siffrorna funktionen tar emot är:

start = första elementet i arrayen
step = nästa element i arrayen är step större än elementet innan
amount = antal siffror i arrayen (dvs dess length när arrayen är klar)
Arrayen med siffror ska byggas med hjälp av dessa tre värden som funktionen tar emot.



*/

const getArrayFromThreeNumbers = (
  x: number,
  y: number,
  z: number
): number[] => {
  let numbersInput: number[] = [x, y, z];
  let sortedNumbers: number[] = [];

  let biggestNumber = Math.max(...numbersInput);
  let middleNumber: number = 0;
  let smallestNumber = Math.min(...numbersInput);

  numbersInput.forEach((number) => {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  });

  numbersInput.forEach((number) => {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  });

  numbersInput.forEach((number) => {
    if (number !== biggestNumber && number !== smallestNumber) {
      {
        middleNumber = number;
      }
    }
  });

  sortedNumbers.push(smallestNumber, middleNumber, biggestNumber);

  return sortedNumbers;
};

console.log(getArrayFromThreeNumbers(44, 89, 23323));

//UTMANING: Funktionen tar emot ett objekt istället för tre siffror. Objektet har dessa tre siffror.

type threeNumberObject = {
  x: number;
  y: number;
  z: number;
};

const getArrayFromObject = (x: threeNumberObject): number[] => {
  let numbersInput: number[] = [x.x, x.y, x.z];
  let sortedNumbers: number[] = [];

  let biggestNumber = Math.max(...numbersInput);
  let middleNumber: number = 0;
  let smallestNumber = Math.min(...numbersInput);

  numbersInput.forEach((number) => {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  });

  numbersInput.forEach((number) => {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  });

  numbersInput.forEach((number) => {
    if (number !== biggestNumber && number !== smallestNumber) {
      {
        middleNumber = number;
      }
    }
  });

  sortedNumbers.push(smallestNumber, middleNumber, biggestNumber);

  return sortedNumbers;
};

console.log(getArrayFromObject({ x: 230000, y: 43, z: 3000 }));

/*

Exempel
Om vi döper funktionen till foo

foo(1,2,5)

ger

[1,3,5,7,9]

Summera största
Skriv en funktion som tar emot en array av siffror och returnerar summan av de två största talen i arrayen.

UTMANING: Skriv om funktionen så den tar emot en array av siffror och siffran n och returnerar summan av de n största talen i arrayen.


*/
const getSumOfBiggestNumbers = (x: number[]): number => {
  let biggestNumber = Math.max(...x);
  let newNumbers: number[] = [];
  x.forEach((number) => {
    if (number !== biggestNumber) {
      newNumbers.push(number);
    }
  });
  let secondBiggestNumber = Math.max(...newNumbers);

  return biggestNumber + secondBiggestNumber;
};

console.log(getSumOfBiggestNumbers(numbers));

const getSumOfNumberOfBiggestNumbers = (x: number[], n: number): number => {
  let sum: number = 0;

  //bubble sort
  for (let i = 0; i < x.length; i++) {
    console.log("// Yttre loop");
    for (let j = 0; j < x.length - 1 - i; j++) {
      console.log("// Inre loop"); //(skippa de sista redan sorterade elementen)
      if (x[j] > x[j + 1]) {
        // Om det nuvarande elementet är större än nästa
        // Byt plats på elementen
        const temp: number = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
      }
    }
  }

  console.log(`newNumbers: ${x}`);

  const numbersToBeSummed = x.slice(-n);

  numbersToBeSummed.forEach((number) => {
    sum += number;
    console.log(`number: ${number}`);
  });

  return sum;
};

console.log(getSumOfNumberOfBiggestNumbers(numbers, 3));
/*
Ord med bokstav
Skriv en funktion som tar emot en array av ord och bokstaven b, sen returnerar en array med de ord som innehåller bokstaven b.


*/
const getStringsFromB = (
  stringsInput: string[],
  letter: string
): string[] | string => {
  let stringsFromB: string[] = [];

  stringsInput.forEach((str) => {
    if (str.includes(letter)) {
      stringsFromB.push(str);
    }
  });

  if (stringsFromB.length > 0) {
    return stringsFromB;
  } else return `there's no word with the letter ${letter}`;
};

console.log(getStringsFromB(strings, "f"));
/*
Summera större än n
Skriv en funktion som tar emot en array av siffror och en siffra n. Funktionen ska returnera summan av alla siffror i arrayen som är större än n.

*/
const getSumOfBiggerThanNumber = (numbers: number[], num: number): number => {
  let sum: number = 0;
  const newNumbers: number[] = [];
  numbers.forEach((number) => {
    if (number > num) {
      newNumbers.push(number);
    }
  });
  console.log(newNumbers);
  newNumbers.forEach((number) => {
    sum += number;
  });

  return sum;
};

console.log(getSumOfBiggerThanNumber(numbers, 23000));

/*
Räkna ett ord
Skriv en funktion som tar emot en array av strängar och en specifik sträng. Funktionen ska returnera hur många gånger strängen förekommer i arrayen.

*/
const getCountOfstring = (
  stringsInput: string[],
  stringInput: string
): number => {
  let countOfString: number = 0;

  stringsInput.forEach((string) => {
    if (string === stringInput) {
      countOfString++;
    }
  });

  return countOfString;
};

console.log(getCountOfstring(strings, strings[4]));

/*

Inga dubletter
Skriv en funktion som tar emot en array med siffror där vissa värden kan förekomma flera gånger. Funktionen ska returnera en ny array med endast de unika värdena.
*/
const getNumbersWithoutDoubles = (numbers: number[]): number[] => {
  const numbersWithoutDoubles: number[] = [];

  numbers.forEach((number) => {
    if (!numbersWithoutDoubles.includes(number)) {
      numbersWithoutDoubles.push(number);
    }
  });

  return numbersWithoutDoubles;
};

console.log(getNumbersWithoutDoubles(numbers));
/*

Inga dubletter av strängar
Skriv en funktion som tar emot två arrayer av strängar och returnerar en ny array av strängar som är en sammanslagning av de båda arrayerna, men utan dubbletter.
*/
const getStringsWithoutDoublesFromTwoArrays = (
  stringsInputX: string[],
  stringsInputY: string[]
): string[] => {
  const stringsWithoutDoubles: string[] = [];

  stringsInputX.forEach((str) => {
    if (!stringsWithoutDoubles.includes(str)) {
      stringsWithoutDoubles.push(str);
    }
  });

  stringsInputY.forEach((str) => {
    if (!stringsWithoutDoubles.includes(str)) {
      stringsWithoutDoubles.push(str);
    }
  });

  return stringsWithoutDoubles;
};

console.log(getStringsWithoutDoublesFromTwoArrays(strings, strings2));

/*

Börjar med
Skriv en funktion som tar emot en array av strängar och en bokstav. Funktionen ska returnera en ny array med alla strängar som börjar med den angivna bokstaven.

*/
const getStringsStartingWithLetter = (
  stringsInput: string[],
  letter: string
): string[] => {
  const stringsStartingWithLetter: string[] = [];

  stringsInput.forEach((string) => {
    if (string.charAt(0).toLowerCase() === letter.toLowerCase()) {
      stringsStartingWithLetter.push(string);
    }
  });

  return stringsStartingWithLetter;
};

console.log(getStringsStartingWithLetter(strings, "h"));
/*
UTMANING: Se till att funktionen kan hantera att arrayens strängar består av flera ord dvs om strängen är flera ord så ska vi plocka ut alla ord som börjar på den angivna bokstaven.
*/
const getStringsFromAllStringsStartingWithLetter = (
  stringsInput: string[],
  letter: string
): string[] => {
  const stringsStartingWithLetter: string[] = [];

  stringsInput.forEach((string) => {
    const words = string.split(" ");

    words.forEach((word) => {
      if (word.charAt(0).toLowerCase() === letter.charAt(0).toLowerCase()) {
        stringsStartingWithLetter.push(string);
      }
    });
  });

  return stringsStartingWithLetter;
};

console.log(getStringsFromAllStringsStartingWithLetter(strings, "t"));

/*


Näst störst
Skriv en funktion som tar emot en array av siffror och returnerar det näst största talet i arrayen.
*/

const numbersWithoutDoubles = getNumbersWithoutDoubles(numbers);

const getSecondBiggestNumber = (numbersInput: number[]): number => {
  const max = Math.max(...numbersInput);

  numbersInput.forEach((number, index) => {
    if (number === max) {
      numbersInput.splice(index, 1); // Tar bort elementet vid index
    }
  });

  const secondBiggestNumber: number = Math.max(...numbersInput);

  return secondBiggestNumber;
};

console.log(getSecondBiggestNumber(numbersWithoutDoubles));

/*

Tema objekt
18+
Skriv en funktion som tar emot en array av objekt där varje objekt representerar en person med name och age. Returnera en ny array med personer som är över 18 år.


*/

const legalAge: number = 18;
const getPersonsOverEighteen = (persons: Person[]): Person[] => {
  const personOverEighteen: Person[] = [];

  persons.forEach((person) => {
    if (person.age > legalAge) {
      personOverEighteen.push(person);
    }
  });

  return personOverEighteen;
};

console.log(getPersonsOverEighteen(people));

/*
En viss hobby
Skriv en funktion som tar emot en sträng h och en array av objekt där varje objekt representerar en person med name, age och hobbies. Hobbies är en array av strängar. Returnera en ny array med personer som har en viss hobby h.

*/
const getPersonsFromHobby = (persons: Person[], hobby: Hobby): Person[] => {
  const personsFromHobby: Person[] = [];

  persons.forEach((person) => {
    if (person.hobbies?.includes(hobby)) {
      personsFromHobby.push(person);
    }
  });

  return personsFromHobby;
};

console.log(getPersonsFromHobby(people, "sewing"));

/*

Summera från objekt
Skriv en funktion som tar emot en sträng av djur-objekt som alla har namn och vikt. Funktionen returnerar summan av alla djurens vikt.

*/
const sumOfAnimalsWeight = (animals: Animal[]): number => {
  let sumOfAnimalsWeight: number = 0;
  animals.forEach((animal) => {
    sumOfAnimalsWeight += animal.weight;
  });
  return sumOfAnimalsWeight;
};

console.log(sumOfAnimalsWeight(animals));

/*




Cykel eller bil
Skriv en funktion som tar emot ett objekt som antingen är av typen Vehicle (vilket är en bil eller en cykel). Funktionen ska returnera en beskrivande sträng baserat på vilken typ av fordon det är. Använd Narrowing i någon form.
*/

const isBike = (vehicle: Vehicle): vehicle is Bike => {
  return "type" in vehicle;
};

const getVehicleInfo = (VehicleInput: Vehicle): string => {
  if (isBike(VehicleInput)) {
    // Skapa en lokal description istället för att ändra på originalobjektet
    let description = `${VehicleInput.description}`;
    if (VehicleInput.hasBasket) description += "\nIt is equipped with a basket";
    if (VehicleInput.hasBell) description += "\nIt is equipped with a bell";
    if (VehicleInput.hasLights) description += "\nIt is equipped with lights";
    const bikeInfo = `Brand: ${VehicleInput.brand}\nColor: ${VehicleInput.color}\nType: ${VehicleInput.type}\nWeight: ${VehicleInput.weight}\nWheels: ${VehicleInput.wheels}\n${description}`;
    return bikeInfo;
  } else {
    const carInfo = VehicleInput.brand;
    return carInfo;
  }
};

console.log(getVehicleInfo(vehicles[3]));

/* let fooA = function (i: number): number {
  return 2 * i * i;
};

let goo = function (x: Function, y: number) {
  return x(y); //2*i*i(3  )
};

let a = goo(fooA, 3);
console.log(a); */

/* let a: number = 5;

function fooB() {
  return ++a;
}

a += fooB() * 2;
console.log(a); */
/*

Cykel eller bil
Skriv en funktion som tar emot ett objekt som antingen är av typen Vehicle (vilket är en bil eller en cykel). Funktionen ska returnera en beskrivande sträng baserat på vilken typ av fordon det är. Använd Narrowing i någon form.

UTMANING: Lös uppgiften en gång till men på ett annat sätt! Narrowing går lösa på flera sätt.
*/
const getInfoFromVehicle = (vehicleInput: Bike | Car): string => {
  if ("type" in vehicleInput) {
    return vehicleInput.brand;
  } else return vehicleInput.color;
};
console.log(getInfoFromVehicle(vehicles[2]));
/*

Tips Vehicle-typen
type Car = { type: "car"; brand: string; horsepower: number };
type Bike = { type: "bike"; brand: string; gears: number };

type Vehicle = Car | Bike;
Största hjälten
Skriv en funktion som tar emot en array av Hero-objekt. Varje hjälte har ett namn, yrke och level. Funktionen returnerar det objekt med högst level.

*/

const heroJanne: Hero = {
  name: "Super-Janne",
  Occupation: "Priest",
  level: 89,
};

const KlantOla: Hero = {
  name: "KlantOla",
  Occupation: "Rogue",
  level: 2,
};

heroes.push(heroJanne, KlantOla);

const getHighestLevelHero = (heroes: Hero[]): Hero => {
  let highestLevelHero: Hero = { name: "", Occupation: "", level: 0 };

  heroes.forEach((hero) => {
    if (hero.level > highestLevelHero.level) {
      highestLevelHero = hero;
    }
  });

  return highestLevelHero;
};

const getLowestLevelHero = (heroes: Hero[]): Hero => {
  let highestLevelHero: Hero = { name: "", Occupation: "", level: Infinity };

  heroes.forEach((hero) => {
    if (hero.level < highestLevelHero.level) {
      highestLevelHero = hero;
    }
  });

  return highestLevelHero;
};

console.log(getHighestLevelHero(heroes));

console.log(getLowestLevelHero(heroes));

console.log();

//Hjälte av yrke
//Skriv en funktion som tar emot en array av Hero-objekt och ett yrke. Varje hjälte har ett namn, yrke och level. Funktionen returnerar en array av objekt med de som har matchande yrke.

const getHeroesByOccupation = (
  heroes: Hero[],
  occupation: AllowedOccupation
): Hero[] => {
  const heroesByOccupation: Hero[] = [];

  heroes.forEach((hero) => {
    if (hero.Occupation === occupation) {
      heroesByOccupation.push(hero);
    }
  });

  return heroesByOccupation;
};

console.log(getHeroesByOccupation(heroes, "Mage"));

const divElement = document.querySelector("#app") as HTMLElement;
const selectElement = document.createElement("select") as HTMLSelectElement;
selectElement.id = "input";

selectElement.name = "level";

const highestLevelOptionElement = document.createElement(
  "option"
) as HTMLOptionElement;
highestLevelOptionElement.value = "highest level";
highestLevelOptionElement.textContent = "highest level";

const lowestLevelOptionElement = document.createElement(
  "option"
) as HTMLOptionElement;
lowestLevelOptionElement.value = "lowest level";
lowestLevelOptionElement.textContent = "lowest level";

divElement.appendChild(selectElement);
selectElement.append(highestLevelOptionElement, lowestLevelOptionElement);

const buttonElement = document.createElement("button") as HTMLButtonElement;
const getHero = document.createElement("button") as HTMLButtonElement;
getHero.textContent = "get hero";
buttonElement.textContent = "get hero";
divElement.appendChild(buttonElement);

const divMiddle = document.querySelector("#middle") as HTMLElement;
divMiddle.appendChild(getHero);

const highestLevelHero = getHighestLevelHero(heroes);
const lowestLevelHero = getLowestLevelHero(heroes);

const ulElement = document.createElement("ul") as HTMLUListElement;
const heroNameLiElement = document.createElement("li") as HTMLLIElement;
const heroOccupationLiElement = document.createElement("li") as HTMLLIElement;
const heroLevelLiElement = document.createElement("li") as HTMLElement;

const selectOccupation = document.querySelector(
  "#selectMiddle"
) as HTMLSelectElement;

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();

  heroNameLiElement.textContent = "";
  heroOccupationLiElement.textContent = "";
  heroLevelLiElement.textContent = "";
  if (selectElement.value.includes("high")) {
    heroNameLiElement.textContent = highestLevelHero.name;
    heroOccupationLiElement.textContent = highestLevelHero.Occupation;
    heroLevelLiElement.textContent = highestLevelHero.level.toString();
    heroLevelLiElement.id = "currentLevel";
    heroOccupationLiElement.id = "currentOccupation";
    heroNameLiElement.id = "currentName";

    divElement.append(ulElement);
    ulElement.appendChild(heroNameLiElement);
    ulElement.appendChild(heroOccupationLiElement);
    ulElement.appendChild(heroLevelLiElement);
  }

  if (selectElement.value.includes("low")) {
    heroNameLiElement.textContent = lowestLevelHero.name;
    heroOccupationLiElement.textContent = lowestLevelHero.Occupation;
    heroLevelLiElement.textContent = lowestLevelHero.level.toString();

    heroOccupationLiElement.id = "currentOccupation";
    heroLevelLiElement.id = "currentLevel";

    divElement.appendChild(ulElement);
    ulElement.appendChild(heroNameLiElement);
    ulElement.appendChild(heroOccupationLiElement);
    ulElement.appendChild(heroLevelLiElement);
  }
});

getHero.addEventListener("click", (e) => {
  e.preventDefault();
  ulElement.innerHTML = "";
  heroNameLiElement.textContent = "";
  heroOccupationLiElement.textContent = "";
  heroLevelLiElement.textContent = "";

  const heroesByOccupation: Hero[] = getHeroesByOccupation(
    heroes,
    selectOccupation.value as AllowedOccupation
  );

  console.log(`selectedHeroesFromOccupation= `, heroesByOccupation);
  heroesByOccupation.forEach((hero) => {
    const heroInfo = document.createElement("li") as HTMLLIElement;
    heroInfo.textContent = `Name: ${hero.name}\nOccupation: ${hero.Occupation}\nLevel: ${hero.level}\n-------------`;

    divMiddle.appendChild(ulElement);
    ulElement.appendChild(heroInfo);
  });
});
/*

UTMANING: Skriv en ny version av funktionen som returnerar en array av Hero-objekt som är sorterade på level fallande, dvs den hjälte med högst level kommer först i arrayen.

*/

const getBestToWorstHeroes = (heroes: Hero[]): Hero[] => {
  //bubble sort
  for (let i = 0; i < heroes.length; i++) {
    for (let j = 0; j < heroes.length - 1 - i; j++) {
      if (heroes[j].level < heroes[j + 1].level) {
        const temp: Hero = heroes[j];
        heroes[j] = heroes[j + 1];
        heroes[j + 1] = temp;
      }
    }
  }

  return heroes;
};

console.log(getBestToWorstHeroes(heroes));

/*

Bloggpost per thing
Vi har en array av Blogginlägg-objekt. Ett inlägg har titel, body, datum, författare och kategori.

Skriv en funktion som tar emot arrayen och en kategori-sträng och returnerar alla inlägg inom kategorin.

Skriv en funktion som tar emot arrayen och en författare-sträng och returnerar alla inlägg med den författaren.

Skriv en funktion som tar emot arrayen och returnerar en array med alla författare.

Skriv en funktion som tar emot arrayen och returnerar en array med alla kategorier.

Skriv en funktion som tar emot arrayen och returnerar det senaste inlägget. */
