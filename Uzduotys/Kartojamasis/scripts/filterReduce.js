/*
Filter
  syntax:
    filter((element, index, array) => { ... });
  pvz:
    items.filter( item => item > 10);
  Ką daro:
    Pereina per kiekvieną masyvo elementą ir jį prafiltruoja (taip kaip nurodyta iškviečiamojoje funkcijoje) ir sugrąžina tik tuos, kurie atitiko filtrą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  Videos:
    https://youtu.be/8kyLmsMYBBI
    https://youtu.be/Q85O152q6UI
    https://youtu.be/4_iT6EGkQfk
    https://youtu.be/qmnH5MT_luk - ilgi bet, tikrai informatyvūs su paprastais paaiškinimais ir pavyzdžiais video pas šitą žmogelį.


Reduce
  syntax:
    reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue);
  pvz:
    items.reduce((total, current) => {total + current}, 0);
  Ką daro:
    Sudeda visus masyvo elementus rekursijos būdu. Galima nustatyti pradinę reikšmę(nuo kokio skaičiaus skaičiuos).
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  Videos:
    https://youtu.be/tVCYa_bnITg
    https://youtu.be/g1C40tDP0Bk
    https://youtu.be/PAwd4gjb7aI
    https://youtu.be/wM6WkVNMDuI
*/

	/* Kur parašyta "naudojant" - privalu panaudoti tą metodą, bet galima naudoti ir kitus jei to neužtenka */
//1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]
let meniu = [
    {id:0, name:"Burgeris", inStock:false, primeCost:2, cost:5},
    {id:1, name:"Burgeris_2", inStock:true, primeCost:2, cost:5},
    {id:2, name:"Burgeris_3", inStock:true, primeCost:2, cost:5},
    {id:3, name:"Burgeris_4", inStock:false, primeCost:2, cost:5},
    {id:4, name:"Burgeris_5", inStock:true, primeCost:2, cost:5},
    {id:5, name:"Pzza", inStock:false, primeCost:3, cost:7},
    {id:6, name:"Pizza_2", inStock:true, primeCost:0.3, cost:7},
    {id:7, name:"Pizza_3", inStock:false, primeCost:0.3, cost:7},
    {id:8, name:"Drink", inStock:true, primeCost:0.3, cost:2},
    {id:9, name:"Drink_2", inStock:false, primeCost:0.3, cost:2}
  ];

//2) Naudojant 1 užduoties masyvą:
  //2.1) Naudojant filter - išfiltruoti tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje.

  const filteredMeniu = meniu.filter(item => item.inStock === true);
  
  console.log(filteredMeniu);

  //2.2) Naudojant map ir 2.1 masyvą - sukurti naują masyvą, kuriame būtų suskaičiuotas ir išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje.

  const profitArray = filteredMeniu.map(item => {
    return item.cost - item.primeCost;
  });
  
  console.log(profitArray);
  

  //2.3) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje. (galima sukurti kelis užsakymus)
  const orderArray = [
    { name: "Burgeris", quantity: 2 },
    { name: "Pizza_2", quantity: 1 },
    { name: "Drink", quantity: 3 }
  ];
  
  console.log(orderArray);

  const orderArray1 = meniu.reduce((orders, item) => {
    if (item.name === "Burgeris" && item.quantity > 0) {
      orders.push({ name: item.name, quantity: item.quantity });
    }
    if (item.name === "Pizza_2" && item.quantity > 0) {
      orders.push({ name: item.name, quantity: item.quantity });
    }
    if (item.name === "Drink" && item.quantity > 0) {
      orders.push({ name: item.name, quantity: item.quantity });
    }
    return orders;
  }, []);
  
  console.log(orderArray1);
  
  
  //2.4) Naudojant reduce - suskaičiuoti kiek pelno suteiks 2.3 masyvo užsakymas ir tai atvaizduoti konsolėje. (arba užsakymai, jei 2.3 dalyje sukūrėte keletą užsakymų)
  const totalProfit = orderArray.reduce((total, order) => {
    const item = meniu.find(item => item.name === order.name);
    if (item) {
      total += (item.cost - item.primeCost) * order.quantity;
    }
    return total;
  }, 0);
  
  console.log(totalProfit);
  

  //2.5) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje.
  const orderDetails = orderArray.map(order => {
    const item = meniu.find(item => item.name === order.name);
    if (item) {
      return {
        name: order.name,
        quantity: order.quantity,
        price: item.cost * order.quantity,
        total: item.cost * order.quantity
      };
    }
  });
  
  console.log(orderDetails);

  const totalPrice = orderDetails.reduce((total, order) => {
    return total + order.total;
  }, 0);
  
  console.log(totalPrice);
  
  

//3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())

function generateRandomArray(A, B, C) {
    return Array(A)
      .fill(0)
      .map(() => Math.floor(Math.random() * (C - B + 1) + B));
  }
  
  console.log(generateRandomArray(5, 1, 10)); // [3, 7, 2, 5, 8]
  console.log(generateRandomArray(3, 5, 15)); // [9, 12, 5]
  

//4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).
function splitIntoWords(str) {
    return str.split(/\W+/);
  }
  
  console.log(splitIntoWords("Hello, world!")); // ["Hello", "world"]
  console.log(splitIntoWords("This is a test string.")); // ["This", "is", "a", "test", "string"]
  
//5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.
const numbers = generateRandomArray(5, 1, 10);

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [4, 2, 6, 8]

//6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.
const numbers2 = generateRandomArray(5, 1, 10);

const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(oddNumbers); // [1, 3, 9, 5, 7]


//7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.
const numbers3 = generateRandomArray(5, -10, 10);

const positiveIntegers = numbers.filter(number => Math.floor(number) === number && number > 0);

console.log(positiveIntegers); // [3, 5, 7, 9]

//8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).
function filterNumbersWithinRange(numbers, A, B) {
    return numbers.filter(number => number >= A && number <= B);
  }
  
  console.log(filterNumbersWithinRange([1, 3, 5, 7, 9], 3, 7)); // [3, 5, 7]
  console.log(filterNumbersWithinRange([-5, -3, -1, 1, 3, 5], -3, 3)); // [-3, -1, 1, 3]
  
//9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.
const words = splitIntoWords("This is a Test String.");

const capitalizedWords = words.filter(word => word.charAt(0) >= "A" && word.charAt(0) <= "Z");

console.log(capitalizedWords); // ["This", "Test", "String"]


//10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.
const words2 = splitIntoWords("This is a Test String.");

const lowercaseWords1 = words2.filter(word => word.charAt(0) >= "a" && word.charAt(0) <= "z");

console.log(lowercaseWords1); // ["is", "a", "a"]

const lowercaseWords2 = words2.filter(word => word.match(/^[a-z]/));


//11) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.

function filterWordsStartingWithLetter(words, letter) {
    return words.filter(word => word.charAt(0) === letter);
  }
  
  console.log(filterWordsStartingWithLetter(splitIntoWords("This is a Test String."), "T")); // ["This", "Test"]
  console.log(filterWordsStartingWithLetter(splitIntoWords("This is a Test String."), "a")); // ["a"]
  

//12) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.
function filterWordsEndingWithLetter(words, letter) {
    return words.filter(word => word.charAt(word.length - 1) === letter);
  }
  
  console.log(filterWordsEndingWithLetter(splitIntoWords("This is a Test String."), "t")); // ["Test"]
  console.log(filterWordsEndingWithLetter(splitIntoWords("This is a Test String."), "g")); // ["String"]
  
//13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.


const totalSum = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalSum); // 15


//14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.


const totalProduct = oddNumbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(totalProduct); // 120

