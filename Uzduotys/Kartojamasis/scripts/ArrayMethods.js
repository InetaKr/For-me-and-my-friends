

let stringArray =['Labas', 'ate', 'Meow', 'nesusipratelis', 'Konfederacija', "dream", "as", "snaige" ];
let numberArray = [3,567,78,69,123,4,7,2020202];
let mixedArray = ['Labas', 'meow', 4,69, true, 'nesusipratelis', 'sleep', false, 567, 23435];



//1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.

function arrayToString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }

//2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)

function printNumbersWithDashes(num) {
    let result = '';
    let numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
      result += numString[i];
      if (i % 2 === 0 && i !== numString.length - 1) {
        result += '-';
      }
    }
    console.log(result);
  }

//3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)

function reverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  }

//4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).

function filterValues(arr, ...valuesToFilter) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!valuesToFilter.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
    console.log(result);
  }

//5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.

function findMinAndMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    console.log(`Min: ${min}, Max: ${max}`);
  }


//6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

function findDuplicates(arr1, arr2) {
    let duplicates = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i]) && !duplicates.includes(arr1[i])) {
        duplicates.push(arr1[i]);
      }
    }
    console.log(duplicates);
  }

//7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])

function getValuesAtIndices(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr2.length; i++) {
      result.push(arr1[arr2[i]]);
    }
    return result;
  }

//8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.

function printUniqueValues(arr) {
    let uniqueValues = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueValues.includes(arr[i])) {
        uniqueValues.push(arr[i]);
      }
    }
    console.log(uniqueValues);
  }

//9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.

function findCommonValues(arrays) {
    let commonValues = [];
    for (let i = 0; i < arrays[0].length; i++) {
      let value = arrays[0][i];
      let isCommon = true;
      for (let j = 1; j < arrays.length; j++) {
        if (!arrays[j].includes(value)) {
          isCommon = false;
          break;
        }
      }
      if (isCommon && !commonValues.includes(value)) {
        commonValues.push(value);
      }
    }
    console.log(commonValues);
  }
        
        
//10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).

function findNthLargestNumber(arr, n) {
    let sortedArray = arr.sort((a, b) => b - a);
    return sortedArray[n - 1];
  }
