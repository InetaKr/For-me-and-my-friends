 //1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.
  
 for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

//2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.

for (let i = 2; i < array.length; i += 3) {
  console.log(array[i]);
}


//3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.

function printEveryNth(array, n) {
  for (let i = n - 1; i < array.length; i += n) {
    console.log(array[i]);
  }
}


//4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.
for (let i = 0; i < array.length; i++) {
  if (array[i] > 54) {
    console.log(array[i]);
  }
}

//5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.
function printStartingWith(array, letter) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === letter) {
      console.log(array[i]);
    }
  }
}

//6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).

array.sort();

array.sort((a, b) => a - b);



//7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.

function printSortedEvens(array) {
  // Atrinkame tik lyginius skaičius
  const evens = array.filter(num => num % 2 === 0);
  // Surikiuojame lyginius skaičius mažėjimo tvarka
  evens.sort((a, b) => b - a);
  // Išspausdinti lygius skaičius konsolėje
}