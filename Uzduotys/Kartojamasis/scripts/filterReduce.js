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
//2) Naudojant 1 užduoties masyvą:
  //2.1) Naudojant filter - išfiltruoti tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje.
  //2.2) Naudojant map ir 2.1 masyvą - sukurti naują masyvą, kuriame būtų suskaičiuotas ir išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje.
  //2.3) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje. (galima sukurti kelis užsakymus)
  //2.4) Naudojant reduce - suskaičiuoti kiek pelno suteiks 2.3 masyvo užsakymas ir tai atvaizduoti konsolėje. (arba užsakymai, jei 2.3 dalyje sukūrėte keletą užsakymų)
  //2.5) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje.

//3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())

//4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).

//5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.
//6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.
//7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.
//8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).
//9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.
//10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.
//11) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.
//12) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.
//13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.
//14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.