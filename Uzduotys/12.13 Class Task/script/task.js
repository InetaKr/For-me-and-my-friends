//1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus.
  //1.1) Sukurkite papildomą parametrą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").
 
  class Cars{
    constructor(name, year){
      this.name = name;
      this.year = year;
      this.helloCar = `Hey, this is a car ${this.name} and it was made in ${this.year}.Have zero knowledge about cars...So figure it out yourself `;
    }

    //1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').
    age() {
      let currentDate = new Date();
      currentDate = currentDate.getFullYear();
      return currentDate - this.year;
    }
  }
  const CarArray = [
    new Cars("Ford", 2002),
    new Cars("Toyota",2010),
    new Cars("Volvo", 2003)

];

console.log(CarArray[0].helloCar);
console.log(CarArray[0].age());




//2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus.
  //2.1) Sukurkite papildomą parametrą "color" ir priskirkite jam randomly parinktą spalvą.
  
  class Rectangle{
    constructor(width, height){
      this.width = width;
      this.height = height;
      this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    }

    //2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.

    area(){
      let area = this.width * this.height;
      return area;
    }

    //2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.

    perimeter(){
      let perimeter = this.width*2 + this.height*2;
      return perimeter;
    }
  }

  const RectangleArray = [
    new Rectangle(4, 16),
    new Rectangle(2,12),
    new Rectangle(6, 18)
];

console.log(RectangleArray[0].color);
console.log(RectangleArray[0].area());
console.log(RectangleArray[0].perimeter());




//3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus.
  //3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y)
  
  class Point{
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.coordinates = `(${this.x},${this.y})`;
    }


    //3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

    distance(otherPoint){
      return `Distance between the Points are: ${Math.hypot(this.x-otherPoint.x,this.y-otherPoint.y)}`;
    }
  }

  const PointArray = [
    new Point(4,16),
    new Point(2,12),
    new Point(6,18)
];

console.log(PointArray[0].coordinates);
console.log(PointArray[0].distance(PointArray[1]));



//4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus.

  class Rectangle_3D{
    constructor(width, height, depth){
      this.width = width;
      this.height = height;
      this.depth = depth;
    }

//4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.

    volume(){
      let vol = this.width*this.height*this.depth;
      return vol;
    }

//4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.

    surfaceArea(){
      let SFArea = 2*((this.width*this.height) + (this.height*this.depth) + (this.depth*this.width));
      return SFArea;
    }
//4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.

    perimeter(){
      let perimetr = 4*(this.width + this.height + this.depth);
      return perimetr;
    }
  }

const Rectangle_3DArray = [
    new Rectangle_3D(4,6,8),
    new Rectangle_3D(2,3,4),
    new Rectangle_3D(8,10,12)
];

console.log(Rectangle_3DArray[0].volume());
console.log(Rectangle_3DArray[0].surfaceArea());
console.log(Rectangle_3DArray[0].perimeter());




//5+) Pabandyti sukurti UI (User Interface (Vartotojo Sąsaja)) 1-4 užduotims ir spausdinti informaciją į ekraną. (Kas nori pasižiūrėkite JS Canvas ir su juo pabandykite atvaizduoti figūras puslapyje(bent jau 2D))

///pirma
document.querySelector("#generateCar")
.addEventListener("submit", e => {
  e.preventDefault();
  let autoModel = e.target.elements.CarName.value;
  let autoYear = e.target.elements.CarYear.value;
  let auto = new Cars(autoModel, autoYear);
  document.querySelector("#Cars > div").innerHTML += `
    <div>
      <h1> Car: ${auto.name} </h1> 
      <h1> Year: ${auto.year} </h1>
      <p> ${auto.helloCar} </p>
      <p> ${auto.name} is ${auto.age()} years old.</p>
    </div>
  `;
  e.target.elements.carName.value = null;
  e.target.elements.carYear.value = null;
});


//antra
document.querySelector('#generateRectangle').addEventListener("submit", e=>{
    e.preventDefault();
    let Recwidth= e.target.elements.RectWidth.value;
    let Recheight= e.target.elements.rectHeight.value;
    let generatedRect= new Rectangle(Recwidth, Recheight);
    
   document.querySelector('#Rectangle2d > div').innerHTML +=`
   <div>
      <h1> Plotis: ${generatedRect.area()} </h1>
      <h1> Perimetras: ${generatedRect.perimeter()} </h1>
      </div>`;

   
  const canvas= document.querySelector('#Rectangle2d > canvas')
   
   const c= canvas.getContext('2d');
   c.fillStyle= `${generatedRect.color}`;
   c.fillRect(20,20,`${Recwidth}`, `${Recheight}`);
   
   e.target.elements.RectWidth.value = null;
  e.target.elements.rectHeight.value = null;
});

///trecia

document.querySelector('#generatePoint').addEventListener("submit", e=>{
  e.preventDefault();
  let Fx= e.target.elements.FPointx.value;
  let Fy= e.target.elements.FpointY.value;
  let FgeneratedPoint= new Point(Fx, Fy);
  let Sx= e.target.elements.SPointx.value;
  let Sy= e.target.elements.SpointY.value;
  let SgeneratedPoint= new Point(Sx, Sy);
  
 document.querySelector('#PointT3 > div').innerHTML +=`
 <div>
    <h1> Kordinates First Point: ${FgeneratedPoint.coordinates} </h1>
    <h1> Kordinates Second Point: ${SgeneratedPoint.coordinates} </h1>
    <h1> ${FgeneratedPoint.distance(SgeneratedPoint)} </h1>
    
  </div>`;

 
const canvas= document.querySelector('#PointT3 > canvas')
 
 const c= canvas.getContext('2d');
 c.beginPath();
 c.moveTo(Fx,Fy);
 c.lineTo(Sx,Sy);
 c.stroke();
 
e.target.elements.FPointx.value = null;
e.target.elements.FpointY.value = null;
e.target.elements.SPointx.value = null;
e.target.elements.SpointY.value = null;
});

//4