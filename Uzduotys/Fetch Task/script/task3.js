const container = document.querySelector('.container');
//#region create all needed elements JS

const mealSearch = document.createElement('div');
mealSearch.classList.add('meal-search');

const mealSearchTitle = document.createElement('h2');
mealSearchTitle.classList.add('title');
mealSearchTitle.textContent = 'Find Meals For Your Ingredients';
mealSearch.appendChild(mealSearchTitle);

const mealSearchBox = document.createElement('div');
mealSearchBox.classList.add('meal-search-box');
mealSearch.appendChild(mealSearchBox);

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.classList.add('search-control');
searchInput.placeholder = 'Enter an ingredient';
searchInput.id = 'search-input';
mealSearchBox.appendChild(searchInput);

const searchBtn = document.createElement('button');
searchBtn.type = 'submit';
searchBtn.classList.add('search-btn', 'btn');
searchBtn.id = 'search-btn';
mealSearchBox.appendChild(searchBtn);

const searchBtnIcon = document.createElement('i');
searchBtnIcon.classList.add('fas', 'fa-search');
searchBtn.appendChild(searchBtnIcon);

// create meal result element
const mealResult = document.createElement('div');
mealResult.classList.add('meal-result');

const mealResultTitle = document.createElement('h2');
mealResultTitle.classList.add('title');
mealResultTitle.textContent = 'Your Search Results:';
mealResult.appendChild(mealResultTitle);

const mealList = document.createElement('div');
mealList.id = 'meal';
mealResult.appendChild(mealList);

// create meal details element
const mealDetails = document.createElement('div');
mealDetails.classList.add('meal-details');

const recipeCloseBtn = document.createElement('button');
recipeCloseBtn.type = 'button';
recipeCloseBtn.classList.add('btn', 'recipe-close-btn');
recipeCloseBtn.id = 'recipe-close-btn';
mealDetails.appendChild(recipeCloseBtn);

const recipeCloseBtnIcon = document.createElement('i');
recipeCloseBtnIcon.classList.add('fas', 'fa-times');
recipeCloseBtn.appendChild(recipeCloseBtnIcon);

const mealDetailsContent = document.createElement('div');
mealDetailsContent.classList.add('meal-details-content');
mealDetails.appendChild(mealDetailsContent);

// append all elements to the container
container.appendChild(mealSearch);
container.appendChild(mealResult);
container.appendChild(mealDetails);
 
//#endregion

searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

//#region get meal list that matches with the ingredients (funkcija)
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
            data.meals.forEach(meal => {
                const mealItem = document.createElement('div');
                mealItem.classList.add('meal-item');
                mealItem.dataset.id = meal.idMeal;

                const mealImg = document.createElement('div');
                mealImg.classList.add('meal-img');

                const img = document.createElement('img');
                img.src = meal.strMealThumb;
                img.alt = 'food';

                mealImg.append(img);

                const mealName = document.createElement('div');
                mealName.classList.add('meal-name');

                const h3 = document.createElement('h3');
                h3.textContent = meal.strMeal;

                const a = document.createElement('a');
                a.href = '#';
                a.classList.add('recipe-btn');
                a.textContent = 'More Info..';

                mealName.append(h3, a);
                mealItem.append(mealImg, mealName);

                mealList.append(mealItem);
            });
            mealList.classList.remove('notFound');
        } else{
            const p = document.createElement('p');
            p.textContent = "Sorry, we didn't find any meal!";
            mealList.append(p);
            mealList.classList.add('notFound');
        }
    });
  }
  //#endregion
  
  
//#region get recipe of the meal and add modal(funkcijos)
  function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}
  
  // create a modal//// change into append 
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-ingredients">${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, 
        ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6}, ${meal.strIngredient7}  
        </p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
//#endregion


/*function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
      let mealItem = e.target.parentElement.parentElement;
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
      .then(response => response.json())
      .then(data => mealRecipeModal(data.meals));
    }
  }
  
  // create a modal//// change into append 
  function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
  
  
  
    let RecipeTitle= document.createElement('h2')
    RecipeTitle.classList.add('recipe-title')
    RecipeTitle.innerHTML= `${meal.strMeal}`
    mealDetailsContent.append(RecipeTitle)
  
    let ingredientsList = document.createElement('p');
    ingredientsList.classList.add('recipe-ingredients');
    ingredientsList.innerText = `${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, 
                                ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6}, ${meal.strIngredient7}`;
    mealDetailsContent.append(ingredientsList);
  
    let instructions = document.createElement('div');
    instructions.classList.add('recipe-instruct');
    instructions.innerHTML = `
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    `;
    mealDetailsContent.append(instructions);
  
    let videoLink = document.createElement('a');
    videoLink.href = meal.strYoutube;
    videoLink.target = "_blank";
    videoLink.innerText = "Watch Video";
    videoLink.classList.add('recipe-link');
    mealDetailsContent.append(videoLink);
  
    
    
    
    mealDetailsContent.parentElement.classList.add('showRecipe');
  }
  */