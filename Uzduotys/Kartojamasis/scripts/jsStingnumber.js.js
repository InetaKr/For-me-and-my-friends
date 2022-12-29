// 1) Pasirašyti / susikurti string kintamąjį
let stringVariable = "abc";

// 2) Pasirašyti / susikurti number kintmąjį
let numberVariable = 123;

// 3) Pasirašyti / susikurti masyvą tik su string kintamaisiais
let stringArray = ["abc", "def", "ghi"];

// 4) Pasirašyti / susikurti masyvą tik su number kintamaisiais
let numberArray = [1, 2, 3, 4, 5];

// 5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais
let mixedArray = [1, "abc", 2, "def", 3, "ghi", 4, 5];

// 6) Išvesti pirmąją 1'os užduoties kintamojo raidę
console.log(stringVariable[0]);

// 7) Išvesti paskutinę 1'os užduoties kintamojo raidę
console.log(stringVariable[stringVariable.length - 1]);

// 8) Išvesti viduriniąją 1'os užduoties kintamojo raidę
let middleIndex = Math.floor(stringVariable.length / 2);
console.log(stringVariable[middleIndex]);

// 9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją).
// Pvz.:(uzd9("labas", 3) => "b")
function getNthCharacter(string, index) {
  return string[index - 1];
}

console.log(getNthCharacter("labas", 3));

// 10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius
console.log(numberVariable % 2 === 0);

// 11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius
console.log(numberVariable % 2 !== 0);

// 12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius
console.log(Number.isInteger(numberVariable));

//13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);
function isEven(number) {
    if (number % 2 === 0) {
      return "lyginis";
    } else {
      return "nelyginis";
    }
  }
  
  console.log(isEven(5)); // nelyginis
  console.log(isEven(6)); // lyginis
  
//14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.
let longWords = stringArray.filter(function(word) {
    return word.length > 5;
  });
  
  console.log(longWords); // ["abcdef", "ghijkl"]
  
//15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.

let shortWords = stringArray.filter(function(word) {
    return word.length < 8;
  });
  
  console.log(shortWords); // ["abc", "def", "ghi"]

  /*function filterWordsByLength(array, min, max) {
    return array.filter(function(word) {
      return word.length >= min && word.length <= max;
    });
  }
  
  let longWords = filterWordsByLength(stringArray, 5, Number.MAX_VALUE);
  console.log(longWords); // ["abcdef", "ghijkl"]
  
  let shortWords = filterWordsByLength(stringArray, 0, 7);
  console.log(shortWords); // ["abc", "def", "ghi"]*/
  
  
//16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.

function getFirstLetters(array) {
    return array.map(function(word) {
      return word[0];
    });
  }
  
  console.log(getFirstLetters(stringArray)); // ["a", "d", "g"]

  /*function getFirstLetters(array) {
    return array.map(function(word) {
      return word.charAt(0);
    });
  }
  
  console.log(getFirstLetters(stringArray)); // ["a", "d", "g"]*/
  
  
//17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.

function getLastLetters(array) {
    return array.map(function(word) {
      return word[word.length - 1];
    });
  }
  
 /* console.log(getLastLetters(stringArray)); // ["c", "f", "l"]

  function getLastLetters(array) {
    return array.map(function(word) {
      return word.charAt(word.length - 1);
    });
  }
  
  console.log(getLastLetters(stringArray)); // ["c", "f", "l"]*/
  

//18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")
function filterWordsByLength(array, min, max) {
    return array.filter(function(word) {
      return word.length >= min && word.length <= max;
    });
  }
  
  console.log(filterWordsByLength(["Labas", "ate", "Katašunis"], 4, 8)); // ["Labas"]
  
  function filterWordsByLength(array, min, max) {
    return array.filter(function(word) {
      return word.length >= min && word.length <= max;
    });
  }
  
  console.log(filterWordsByLength(["Labas", "ate", "Katašunis"], 4, 8)); // ["
   
//19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.
let numberArray1 = [1, 2, 3, 4, 5];

let sum = numberArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15



//20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.
let sum1 = 0;
for (let i = 1; i < numberArray.length; i += 2) {
  sum += numberArray[i];
}

console.log(sum1); // 6

//21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.
function sumEveryNthElement(array, n) {
    let sum = 0;
    for (let i = n - 1; i < array.length; i += n) {
      sum += array[i];
    }
    return sum;
  }
  
  console.log(sumEveryNthElement([1, 2, 3, 4, 5], 2)); // 6
  console.log(sumEveryNthElement([1, 2, 3, 4, 5], 3)); // 3
  
//22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8], 3, false) => 3)
function sumEveryNthElement(array, n, isEven) {
    let sum = 0;
    for (let i = n - 1; i < array.length; i += n) {
      if (isEven) {
        if (array[i] % 2 === 0) {
          sum += array[i];
        }
      } else {
        if (array[i] % 2 !== 0) {
          sum += array[i];
        }
      }
    }
    return sum;
  }
  
  console.log(sumEveryNthElement([1, 2, 3, 4, 5, 6, 7, 8], 3, false)); // 3
  console.log(sumEveryNthElement([1, 2, 3, 4, 5, 6, 7, 8], 3, true)); // 6
  
//23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.

let mixedArray1 = [1, "du", 3, "keturi", 5, "šeši"];
let numbers = [];
let strings = [];

for (let element of mixedArray) {
  if (typeof element === "number") {
    numbers.push(element);
  } else {
    strings.push(element);
  }
}

console.log(numbers); // [1, 3, 5]
console.log(strings); // ["du", "keturi", "šeši"]


//let numbers = mixedArray.filter(element => typeof element === "number");
//let strings = mixedArray.filter(element => typeof element === "string");
