fetch('./data/movies.json')
  .then(response => response.json())
  .then(data => {
    const movies = data.movies;
    movies.forEach(movie => {
      const title = movie.title;
      const poster = movie.poster;
      const length = movie.length;
      const actors = movie.actors;
      const description = movie.description;

      // Calculate length in hours and minutes
      const hours = Math.floor(length / 60);
      const minutes = length % 60;

      // Create an HTML element for each movie
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');

      // Add the movie title
      const titleElement = document.createElement('h1');
      titleElement.textContent = title;
      movieElement.appendChild(titleElement);

      // Add the poster image
      const posterElement = document.createElement('img');
      posterElement.src = poster;
      movieElement.appendChild(posterElement);

      // Add the movie length
      const lengthElement = document.createElement('p');
      lengthElement.textContent = `Length: ${hours} hours ${minutes} minutes`;
      movieElement.appendChild(lengthElement);

      // Add the movie actors
      const actorsElement = document.createElement('ul');
      actors.forEach(actor => {
        const actorElement = document.createElement('li');
        actorElement.textContent = actor;
        actorsElement.appendChild(actorElement);
      });
      movieElement.appendChild(actorsElement);

      //add movie description
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = description;  
      movieElement.appendChild(descriptionElement);

      // Add the movie element to the page
      document.body.appendChild(movieElement);
    });
  });


  fetch('https://randomuser.me/api')
  .then(res => res.json())
  .then(data => {
    console.log(data);
 


  const person = data.results[0];

  const Fullname = person.name.first + ' ' + person.name.last;
  const age = person.dob.age;
  const address =person.location.street.name + ' ' + person.location.street.number;
  const email = person.email;


  const personName = document.createElement('h1');
    personName.textContent = Fullname;
    document.body.appendChild(personName);

    const personPIc = document.createElement('img');
    personPIc.src = person.picture.large;
    document.body.appendChild(personPIc);

    
    const personAge = document.createElement('p');
    personAge.textContent = age;
    document.body.appendChild(personAge);


    const personEmail = document.createElement('p');
    personEmail.textContent = email;
    document.body.appendChild(personEmail);

    const personAddress = document.createElement('p');
    personAddress.textContent = address;
    document.body.appendChild(personAddress);

  })    
  
  /*const card = document.createElement('div');
  card.innerHTML = `
    <img src="${person.picture.medium}" alt="Profile picture" />
    <p>${Fullname}</p>
    <p>${age}</p>
    <p>${address}</p>
    <p>${email}</p>
  `;

})*/

function getMealRecipe(e){
  e.preventDefault();
  if(e.target.classList.contains('recipe-btn')){
    let mealItem = e.target.parentElement.parentElement;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
    .then(response => response.json())
    .then(data => mealRecipeModal(data.meals));
  }
}

