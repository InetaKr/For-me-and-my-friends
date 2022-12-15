//1) Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname.
  //1.1) JavaScripte pasirašykite klasę su konstruktoriumi, kuris turės vardą ir pavardę. Metodą - atsirasti lentelėje.
//1.2) Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization).
  //1.3) Sukurkite objektą naudojant Klasę.
  //1.4) Galiausiai iškvieskite metodą, kad pridėtų į lentelę.
  //Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje esančioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).


  
  class Person { 
    constructor(firstName, lastName) {//klase su konstrutoriumi
      this.firstName = this.SutvarkytasName(firstName);///pirmas vardas = lygus sutvarkyto pilno vardo pirmam vardui
      this.lastName = this.SutvarkytasName(lastName);///pavarde = lygi sutvarkyto pilno vardo  pavardei arba atram vardui ir pavardei jei iraso triguba varda
    }
  
    SutvarkytasName(name) { /// 
      if (name.toLowerCase().includes('middleName')) { ///jeigu pilno vardo value yra mazosomis raidemis ir turi vidurini varda
        const names = name.split(" "); // tada pilno vardo value splitinimas ties pirmu tarpeliu ir vardas pries splitinima priskiriamas pirmam vardui (isvedem pirma varda)
        const lastName = names[1]; /// o pavardei priskeriamas pilno vardo pirmasis elementas ( arba kitai antras jei skaiciuoji ne nuo 0 arba elementas esanti po splitinimo - ta gali buti visurinis vardas su pavarde arba tiesiog pavarde)
  
        return `middleName ${lastName[0].toLocaleUpperCase()}${lastName  /// ir jei yra vidurinis vardas grazinama pavarde 0 elemtas siuo atveju antras varda didziaja raide
          .slice(1)}`; /// ir pavarde kuri turi viduri varda ir pavarde ir slicinimas ties 1 elementu situ atveju ties pavarde (isvedeme antra varda)
      }
  
      return name[0].toLocaleUpperCase() + name.slice(1); /// tada grazinamas antras vardas  didzija raide + pavarde ir didziaja raide (isvedeme trecia varda-pavarde)
    }
  
    addToTable() { //// idejimas vardo i table 
      const usersListElement = document.querySelector("tbody#users-list"); // pasirenkame selector is html 
  
      const nameRow = document.createElement("tr");  /// sukuriame tr
      const firstNameElement = document.createElement("td");  ///sukuriam td su pirmu vardu
      const lastNameElement = document.createElement("td"); /// sukuriam td su pavarde
  
      firstNameElement.textContent = this.firstName; /// td pirmo vardo contents = pirmo vardo input value
      lastNameElement.textContent = this.lastName; /// td pavardes content = antro + pavardes( ar tik pavardes) input value
  
      nameRow.append(firstNameElement, lastNameElement); /// apendiname td 
  
      usersListElement.append(nameRow); ///apendiname tr
    }
  }
  
  ///event kad iskviesti 
  const fullNameEntryForm = document.querySelector("form#fullNameEntry");/// pasirenkame forma 
  
  fullNameEntryForm.addEventListener("submit", (event) => { /// uzrasomas event ties submit 
    event.preventDefault();
  
    const fullName = document.querySelector("#fullNameInput").value.trim(); /// uzrasomas pilno vardo input value trim()-isima whitespace is abieju pusiu
  
    const firstName = fullName.split(" ")[0]; /// pirmas vardas splitinamas ties tarpeliu
    const otherNames = fullName.slice(firstName.length).trim(); // potential middle name, last name 
  
    const user = new Person(firstName, otherNames); /// user=naujas person su primu ir antru vardu 
  
    user.addToTable(); //idedamas i table
  
    console.log({ user }); // vis nauja parodo useri 
  });
  



//2) Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis).
  //2.1) Per Klasę, sukuriamas objektas ir jis atvaizduojamas po forma (CSS'ą rašykite CSS'e) kaip atvaizduota nuotraukoje (./images/cars.PNG).
 // 3.1) Paspaudus ant automobilio bloko - turi alert išmesti kainą ir mileage. (gal su CSS'u gražiai padaryti, kad užėjus ant elemento su pele, atsiranda laukelis nuotraukoje...)
 class Car {
    constructor (brand, model, mileage, price, image) {
      this.brand = brand;
      this.model = model;
      this.mileage = mileage;
      this.price = price;
      this.image = image;
    }
    post() {
      const container = document.querySelector('.container');
      const createDiv = document.createElement('div');
      createDiv.className = '.card';
      const createImage = document.createElement('img');
      createImage.src = this.image;
      const createText = document.createElement('h2');
      createText.innerText = `${this.brand} ${this.model}`;
      createDiv.append(createImage, createText);
      container.append(createDiv);
      createDiv.addEventListener('click', () => {
        // alert(this.price and mileage);
        console.log(this.price,this.mileage);
      })
    }
  }
  //pasikeisti
  
  document.querySelector('#carForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const brand = document.querySelector('#brand').value;
    const model = document.querySelector('#model').value;
    const mileage = document.querySelector('#mileage').value;
    const price = document.querySelector('#price').value;
    const image = document.querySelector('#image').value;
    const car = new Car(brand, model, mileage, price, image);
    car.post();
  })

  //3+) (PVP battle) https://edabit.com/challenge/ifDM26p25bqS8EsFu
  //4+) (Shiritori) https://edabit.com/challenge/6o5tYwwbY2ys7XTm4
  
  //5) Sukurti Klasę, kuri kurs paragrafus.

  class Paragraph {
    constructor(props) {
      this.props = props;
      return this.render();

    }
  
   render = () => {
    this.htmlElement = document.createElement('p');
    this.textElement = document.createTextNode(this.props.tekstas);
    this.htmlElement.append(this.textElement);
    
    if (this.props.atributai) {
        Object.keys(this.props.atributai).forEach(raktas => {
            this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
        });
      }
      return this.htmlElement;
    }
  }
  
  
   let paragrafas1 = new Paragraph({
    tekstas: "Lorem ipsum dolor sit ame  consectetur adipisicing elit. Quisquam, quod.",
    atributai: {
        class: "className  anotherclass",
        id: "someId",
        style: "font-size:40px"
  
    }
  
  });
  
  document.querySelector("body").append(paragrafas1);
  document.querySelector("body").append(
  
    new Paragraph({
        tekstas: "Hello Meow",
        atributai: {
            style: "color:blue"
        }
    })
  
  );
  
  document.querySelector("body").append(
    new Paragraph({
        tekstas: "BUm badum... O le le "
  
    })
  
  );


 