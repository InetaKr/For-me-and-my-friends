/*
FindIndex
  Syntax:
    findIndex((element, index, array) => { ... } )
  Pvz:
    const isLargeNumber = (element) => element > 13;
  Ką daro:
    Suranda ir grąžina indeksą to elemento esančio masyve, kuris pirmasis tenkina pateiktą salygą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

Find
  Syntax:
    find((element, index, array) => { ... } )
  Pvz:
    const found = array1.find(element => element > 10);
  Ką daro:
    Suranda ir grąžina tą masyvo elementą, kuris pirmasis tenkina pateiktą salygą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  Video:
    https://youtu.be/sBVaoFg2ww4

Some
  Syntax:
    some((element, index, array) => { ... } )
  Pvz:
    const even = (element) => element % 2 === 0;
  Ką daro:
    Tikrina ar bent vienas elementas masyve tenkina pateiktą salygą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  Video:
    https://youtu.be/RrvhtJYYKcw

Every
  Syntax:
    every((element, index, array) => { ... } )
  Pvz:
    const isBelowThreshold = (currentValue) => currentValue < 40;
  Ką daro:
    Tikrina ar visi elementas masyve tenkina pateiktą salygą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  Video:
    https://youtu.be/PJM3BaWu5Jw

Includes
  Syntax:
    includes(searchElement, fromIndex)
  Pvz:
    pets.includes('cat');
  Ką daro:
    Patikrina ar masyve yra bent vienas nurodytas elementas ir grąžina true arba false.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
*/

//1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).

function getIndexOfFirstLargerElement(array, A) {
    return array.findIndex(element => element > A);
  }
  

/*function getIndexOfFirstLargerElement(arr, A) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > A) {
        return i;
      }
    }
    return -1;
  }
  
const arr1 = [1, 2, 3, 4, 5];
console.log(getIndexOfFirstLargerElement(arr1, 3));  // prints 3
console.log(getIndexOfFirstLargerElement(arr1, 5));  // prints -1*/

//2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
function getIndexOfFirstSmallerElement(array, A) {
    return array.findIndex(element => element < A);
  }
  

/*function getIndexOfFirstSmallerElement(arr, A) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < A) {
        return i;
      }
    }
    return -1;
  }
  
  const arr2 = [1, 2, 3, 4, 5];
  console.log(getIndexOfFirstSmallerElement(arr2, 3));  // prints 1
  console.log(getIndexOfFirstSmallerElement(arr2, 0));  // prints -1*/
  
//3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.
function getIndexOfFirstLowercaseElement(array) {
    return array.findIndex(element => element[0] === element[0].toLowerCase());
  }
  

/*function getIndexOfFirstLowercaseElement(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === arr[i][0].toLowerCase()) {
        return i;
      }
    }
    return -1;
  }
  const arrT3 = ["Apple", "Banana", "Cherry", "Durian"];
console.log(getIndexOfFirstLowercaseElement(arrT3));  // prints 1

const arrT32 = ["apple", "banana", "cherry", "durian"];
console.log(getIndexOfFirstLowercaseElement(arrT32));  // prints 0

const arrT33 = ["Apple", "Banana", "Cherry", "Durian"];
console.log(getIndexOfFirstLowercaseElement(arrT33));  // prints -1*/

//4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.
function getIndexOfFirstUppercaseElement(array) {
    return array.findIndex(element => element[0] === element[0].toUpperCase());
  }
  

/*function getIndexOfFirstUppercaseElement(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === arr[i][0].toUpperCase()) {
        return i;
      }
    }
    return -1;
  }

  const arrT4 = ["Apple", "Banana", "Cherry", "Durian"];
console.log(getIndexOfFirstUppercaseElement(arrT4));  // prints 0

const arrT42 = ["apple", "banana", "cherry", "durian"];
console.log(getIndexOfFirstUppercaseElement(arrT42));  // prints -1

const arrT43 = ["apple", "Banana", "cherry", "Durian"];
console.log(getIndexOfFirstUppercaseElement(arrT43));  // prints 1*/

//5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
function getIndexOfFirstElementBetweenAAndB(array, A, B) {
    return array.findIndex(element => element > A && element < B);
  }
  

/*function getIndexOfFirstElementBetween(arr, A, B) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > B && arr[i] < A) {
        return i;
      }
    }
    return -1;
  }

const arrT5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getIndexOfFirstElementBetween(arrT5, 5, 7));  // prints 3
console.log(getIndexOfFirstElementBetween(arrT5, 7, 5));  // prints 3
console.log(getIndexOfFirstElementBetween(arrT5, 5, 5));  // prints -1
console.log(getIndexOfFirstElementBetween(arrT5, 11, 12));  // prints -1*/

//6++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

function getIndexOfFirstElementWithCaseAndLength(array, caseType, A, B) {
    return array.findIndex(element => ((caseType === "d" || caseType === true) && element[0] === element[0].toUpperCase()) || ((caseType === "s" || caseType === false) && element[0] === element[0].toLowerCase()) && element.length > A && element.length < B);
  }
  

/*function getIndexOfFirstElementWithLengthBetween(arr, startCase, A, B) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > A && arr[i].length < B) {
        if (startCase) {
          if (arr[i][0] === arr[i][0].toUpperCase()) {
            return i;
          }
        } else {
          if (arr[i][0] === arr[i][0].toLowerCase()) {
            return i;
          }
        }
      }
    }
    return -1;
  }

const arrT6 = ["Apple", "Banana", "Cherry", "Durian", "Elderberry", "Fig", "Grapefruit"];
console.log(getIndexOfFirstElementWithLengthBetween(arrT6, true, 5, 7));  // prints 0
console.log(getIndexOfFirstElementWithLengthBetween(arrT6, false, 5, 7));  // prints 2
console.log(getIndexOfFirstElementWithLengthBetween(arrT6, true, 7, 5));  // prints -1
console.log(getIndexOfFirstElementWithLengthBetween(arrT6, false, 7, 5));  // prints -1
console.log(getIndexOfFirstElementWithLengthBetween(arrT6, true, 5, 5));  // prints -1
console.log(getIndexOfFirstElementWithLengthBetween(arrT6, false, 5, 5));  // prints -1*/

//7) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didenis už A (A - funkcijos parametras skaičius).

function getFirstLargerElement(array, A) {
    return array.find(element => element > A);
  }
  

/*function getFirstLargerElement(arr, A) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > A) {
        return arr[i];
      }
    }
    return null;
  }

const arrT7 = [1, 2, 3, 4, 5];
console.log(getFirstLargerElement(arrT7, 3));  // prints 4
console.log(getFirstLargerElement(arrT7, 5));  // prints null*/

//8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).

function getFirstSmallerElement(array, A) {
    return array.find(element => element < A);
  }
  

/*function getFirstSmallerElement(arr, A) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < A) {
        return arr[i];
      }
    }
    return null;
  }

const arrT8 = [1, 2, 3, 4, 5];
console.log(getFirstSmallerElement(arrT8, 3));  // prints 2
console.log(getFirstSmallerElement(arrT8, 0));  // prints null*/

//9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.
//10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.

function getFirstLowercaseElement(array) {
    return array.find(element => element[0] === element[0].toLowerCase());
}

function getFirstUppercaseElement(array) {
    return array.find(element => element[0] === element[0].toUpperCase());
}
  

/*function getFirstLowercaseElement(arr) {
    for (let element of arr) {
      if (element[0].toLowerCase() === element[0]) {
        return element;
      }
    }
    return null;
  }
  
  function getFirstUppercaseElement(arr) {
    for (let element of arr) {
      if (element[0].toUpperCase() === element[0]) {
        return element;
      }
    }
    return null;
  }

  const arrT9 = ['apple', 'banana', 'Carrot', 'Duck'];
  console.log(getFirstLowercaseElement(arrT9));  // grąžina: 'apple'
  console.log(getFirstUppercaseElement(arrT9));  // grąžina: 'Carrot'*/
   
//11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

function getFirstElementBetweenAAndB(array, A, B) {
    return array.find(element => element > A && element < B);
  }
  

/*function getFirstElementBetween(arr, a, b) {
    for (let element of arr) {
      if (element > a && element < b) {
        return element;
      }
    }
    return null;
  }

const arrT11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getFirstElementBetween(arrT11, 3, 7));  // grąžina: 4*/

//12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

function getFirstElementWithCaseAndLength(array, caseType, A, B) {
    return array.find(element => ((caseType === "d" || caseType === true) && element[0] === element[0].toUpperCase()) || ((caseType === "s" || caseType === false) && element[0] === element[0].toLowerCase()) && element.length > A && element.length < B);
  }
  

//13) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didenis už A (A - funkcijos parametras skaičius).
function hasLargerElement(array, A) {
    return array.some(element => element > A);
  }
  
//14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).
function hasSmallerElement(array, A) {
    return array.some(element => element < A);
  }
  

//15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.
function hasLowercaseElement(array) {
    return array.some(element => element[0] === element[0].toLowerCase());
  }
  
//16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.
function hasUppercaseElement(array) {
    return array.some(element => element[0] === element[0].toUpperCase());
  }
  
//17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
function hasElementBetweenAAndB(array, A, B) {
    return array.some(element => element > A && element < B);
  }
  
//18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

function hasElementWithCaseAndLength(array, caseType, A, B) {
    return array.some(element => ((caseType === "d" || caseType === true) && element[0] === element[0].toUpperCase()) || ((caseType === "s" || caseType === false) && element[0] === element[0].toLowerCase()) && element.length > A && element.length < B);
  }
  
//19) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didenis už A (A - funkcijos parametras skaičius).
function allElementsLargerThanA(array, A) {
    return array.every(element => element > A);
  }
  
//20) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A (A - funkcijos parametras skaičius).
function allElementsSmallerThanA(array, A) {
    return array.every(element => element < A);
  }
  
//21) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda mažąja raide.
function allElementsStartWithLowercase(array) {
    return array.every(element => element[0] === element[0].toLowerCase());
  }
  

//22) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja raide.
function allElementsStartWithUppercase(array) {
    return array.every(element => element[0] === element[0].toUpperCase());
  }
  
//23+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
function allElementsBetweenAAndB(array, A, B) {
    return array.every(element => element > A && element < B);
  }
  
//24++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).   
function allElementsStartWithCaseAndLengthBetweenAAndB(array, caseType, A, B) {
    return array.every(element => {
      if (caseType === "d") {
        return element[0] === element[0].toUpperCase() && element.length > A && element.length < B;
      } else if (caseType === "s") {
        return element[0] === element[0].toLowerCase() && element.length > A && element.length < B;
      }
    });
  }
  
//25) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė.
function includesValue(array, value) {
    return array.includes(value);
  }
  
//26) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė, nuo pasirinkto indekso.
function includesValueFromIndex(array, value, index) {
    return array.includes(value, index);
  }
  