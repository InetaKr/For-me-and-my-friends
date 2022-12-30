//1.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.

function greaterThanA(numbers, A) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > A) {
        result.push(numbers[i]);
      }
    }
    return result;
  }
  
  
  
  //1.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B.
  function betweenAandB(numbers, A, B) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > A && numbers[i] < B) {
        result.push(numbers[i]);
      }
    }
    return result;
  }
  
  //1.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B ir yra lyginiai arba nelyginiai (true/false).
  
  function betweenAandBwithParity(numbers, A, B, parity) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > A && numbers[i] < B && numbers[i] % 2 === parity) {
        result.push(numbers[i]);
      }
    }
    return result;
  }
  
  //1.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 1.1, 1.2 ir 1.3 užduotis.
  
  const greaterThanA2 = (numbers, A) => numbers.filter(num => num > A);
  
  const betweenAandB2 = (numbers, A, B) => numbers.filter(num => num > A && num < B);
  
  const betweenAandBwithParity1 = (numbers, A, B, parity) =>
    numbers.filter(num => num > A && num < B && [0, 1].includes(num % 2) === parity);
  
  
  //2.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A.
  
  function longerThanA(words, A) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > A) {
        result.push(words[i]);
      }
    }
    return result;
  }
  
  //2.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B.
  function betweenAandB(words, A, B) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > A && words[i].length < B) {
        result.push(words[i]);
      }
    }
    return result;
  }
  
  
  //2.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B ir prasideda didžiąja arba mažąja raidėmis (true/false).
  
  function betweenAandBwithCase(words, A, B, isUppercase) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > A && words[i].length < B && (words[i][0] === words[i][0].toUpperCase()) === isUppercase) {
        result.push(words[i]);
      }
    }
    return result;
  }
  
  //2.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 2.1, 2.2 ir 2.3 užduotis.  
  
  const longerThanA1 = (words, A) => words.filter(word => word.length > A);
  
  const betweenAandB1 = (words, A, B) => words.filter(word => word.length > A && word.length < B);
  
  const betweenAandBwithCase1 = (words, A, B, isUppercase) =>
    words.filter(word => word.length > A && word.length < B && [true, false].includes(word[0] === word[0].toUpperCase()) === isUppercase);
  
  //3) Parašykite funkciją, kuri iš mišraus masyvo atrinktų tik number arba tik string kintamuosiuos (true/false).
  
    function filterByType(array, type) {
      let filteredArray = array.filter(function(element) {
        if (type === "number") {
          return typeof element === "number";
        } else if (type === "string") {
          return typeof element === "string";
        }
      });
    
      return filteredArray;
    }
    
  let mixedArray2 = [1, "abc", 3, "def", 5, "ghi", 7, "jkl"];
  
  let numbers = filterByType(mixedArray2, "number");
  // numbers = [1, 3, 5, 7]
  
  let strings = filterByType(mixedArray2, "string");
  // strings = ["abc", "def", "ghi", "jkl"]
  
  //3.1.1) Jeigu atrinkinėja skaičius, tai juos surikiuoti didėjimo arba mažėjimo tvarka (true/false) ir grąžintų sutvarkytą masyvą.
  
  function filterAndSortNumbers(array, ascending) {
    // Atrinkti tik skaičius
    let numbers = array.filter(function(element) {
      return typeof element === "number";
    });
  
    // Surikiuoti skaičius pagal nurodytą tvarką
    numbers.sort(function(a, b) {
      if (ascending) {
        return a - b;
      } else {
        return b - a;
      }
    });
  
    return numbers;
  }
  //let mixedArray = [1, "abc", 3, "def", 5, "ghi", 7, "jkl"];
  //let sortedNumbersAscending = filterAndSortNumbers(mixedArray, true);
  // sortedNumbersAscending = [1, 3, 5, 7]
  //let sortedNumbersDescending = filterAndSortNumbers(mixedArray, false);
  // sortedNumbersDescending = [7, 5, 3, 1]
  
  //3.1.2) Prie 3.1.1 pridėti ir dydžio tikrinimą (ne mažesni negu A ir ne didesni negu B skaičiai (A<skaičius<B)).
  
  function filterAndSortNumbersBySize(array, ascending, min, max) {
    // Atrinkti tik skaičius
    let numbers = array.filter(function(element) {
      return typeof element === "number";
    });
  
    // Surikiuoti skaičius pagal nurodytą tvarką
    numbers.sort(function(a, b) {
      if (ascending) {
        return a - b;
      } else {
        return b - a;
      }
    });
  
    // Atrinkti elementus pagal nurodytus dydžio ribojimus
    numbers = numbers.filter(function(element) {
      return element >= min && element <= max;
    });
  
    return numbers;
  }
  
  //let mixedArray = [1, "abc", 3, "def", 5, "ghi", 7, "jkl"];
  //let sortedNumbersAscending = filterAndSortNumbersBySize(mixedArray, true, 3, 6);
  // sortedNumbersAscending = [5, 3]
  
  //let sortedNumbersDescending = filterAndSortNumbersBySize(mixedArray, false, 3, 6);
  // sortedNumbersDescending = [3, 5]
  
  //3.2.1) Jeigu atrinkinėja žodžius, tai juos surikiuoti pagal abėcėlę A->Z arba Z->A (true/false) ir grąžintų sutvarkytą masyvą.
  
  function filterAndSortStrings(array, ascending) {
    // Atrinkti tik žodžius
    let strings = array.filter(function(element) {
      return typeof element === "string";
    });
  
    // Surikiuoti žodžius pagal nurodytą tvarką
    strings.sort(function(a, b) {
      if (ascending) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a > b) {
          return -1;
        } else if (a < b) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  
    return strings;
  }
  
  //let mixedArray = [1, "abc", 3, "def", 5, "ghi", 7, "jkl"];
  //let sortedStringsAscending = filterAndSortStrings(mixedArray, true);
  // sortedStringsAscending = ["abc", "def", "ghi", "jkl"]
  
  //let sortedStringsDescending = filterAndSortStrings(mixedArray, false);
  // sortedStringsDescending = ["jkl", "ghi", "def", "abc"]
  
  //3.2.2) Prie 3.2.1 pridėti ir ilgio tikrinimą (ne trumpesni negu A ir ne ilgesni negu B žodžiai (A<=žodis.length<=B)).
  
  function filterAndSortStringsByLength(array, ascending, min, max) {
    // Atrinkti tik žodžius
    let strings = array.filter(function(element) {
      return typeof element === "string";
    });
  
    // Surikiuoti žodžius pagal nurodytą tvarką
    strings.sort(function(a, b) {
      if (ascending) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a > b) {
          return -1;
        } else if (a < b) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  
    // Atrinkti elementus pagal nurodytus ilgio ribojimus
    strings = strings.filter(function(element) {
      return element.length >= min && element.length <= max;
    });
  
    return strings;
  }
  
  
  //let mixedArray = [1, "abc", 3, "def", 5, "ghi", 7, "jkl"];
  //let sortedStringsAscending = filterAndSortStringsByLength(mixedArray, true, 3, 6);
  // sortedStringsAscending = ["def", "jkl", "abc", "ghi"]
  
  //let sortedStringsDescending = filterAndSortStringsByLength(mixedArray, false, 3, 6);
  // sortedStringsDescending = ["ghi", "abc", "jkl", "def"]
  