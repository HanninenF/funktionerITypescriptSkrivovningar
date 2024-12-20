import "./style.scss";
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
  40886, 40620, 313, 5779, 7141, 18628, 18427, 20600, 18309, 33198, 22465,
  19296, 25177, 622, 9272,
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
  "best of the best",
  "don't bother me",
  "alrighty",
  "doddle of birds",
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

Räkna ett ord
Skriv en funktion som tar emot en array av strängar och en specifik sträng. Funktionen ska returnera hur många gånger strängen förekommer i arrayen.

Inga dubletter
Skriv en funktion som tar emot en array med siffror där vissa värden kan förekomma flera gånger. Funktionen ska returnera en ny array med endast de unika värdena.

Inga dubletter av strängar
Skriv en funktion som tar emot två arrayer av strängar och returnerar en ny array av strängar som är en sammanslagning av de båda arrayerna, men utan dubbletter.

Börjar med
Skriv en funktion som tar emot en array av strängar och en bokstav. Funktionen ska returnera en ny array med alla strängar som börjar med den angivna bokstaven.

UTMANING: Se till att funktionen kan hantera att arrayens strängar består av flera ord dvs om strängen är flera ord så ska vi plocka ut alla ord som börjar på den angivna bokstaven.

Näst störst
Skriv en funktion som tar emot en array av siffror och returnerar det näst största talet i arrayen.

Tema objekt
18+
Skriv en funktion som tar emot en array av objekt där varje objekt representerar en person med name och age. Returnera en ny array med personer som är över 18 år.

En viss hobby
Skriv en funktion som tar emot en sträng h och en array av objekt där varje objekt representerar en person med name, age och hobbies. Hobbies är en array av strängar. Returnera en ny array med personer som har en viss hobby h.

Summera från objekt
Skriv en funktion som tar emot en sträng av djur-objekt som alla har namn och vikt. Funktionen returnerar summan av alla djurens vikt.

Cykel eller bil
Skriv en funktion som tar emot ett objekt som antingen är av typen Vehicle (vilket är en bil eller en cykel). Funktionen ska returnera en beskrivande sträng baserat på vilken typ av fordon det är. Använd Narrowing i någon form.

UTMANING: Lös uppgiften en gång till men på ett annat sätt! Narrowing går lösa på flera sätt.

Tips Vehicle-typen
type Car = { type: "car"; brand: string; horsepower: number };
type Bike = { type: "bike"; brand: string; gears: number };

type Vehicle = Car | Bike;
Största hjälten
Skriv en funktion som tar emot en array av Hero-objekt. Varje hjälte har ett namn, yrke och level. Funktionen returnerar det objekt med högst level.

UTMANING: Skriv en ny version av funktionen som returnerar en array av Hero-objekt som är sorterade på level fallande, dvs den hjälte med högst level kommer först i arrayen.

Bloggpost per thing
Vi har en array av Blogginlägg-objekt. Ett inlägg har titel, body, datum, författare och kategori.

Skriv en funktion som tar emot arrayen och en kategori-sträng och returnerar alla inlägg inom kategorin.

Skriv en funktion som tar emot arrayen och en författare-sträng och returnerar alla inlägg med den författaren.

Skriv en funktion som tar emot arrayen och returnerar en array med alla författare.

Skriv en funktion som tar emot arrayen och returnerar en array med alla kategorier.

Skriv en funktion som tar emot arrayen och returnerar det senaste inlägget. */
