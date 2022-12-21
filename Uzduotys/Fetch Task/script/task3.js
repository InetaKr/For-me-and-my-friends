const allContent = document.querySelector('.allContent');
//#region create all needed elements JS

const mealSearch = document.createElement('div');
mealSearch.classList.add('meal-search');

const mealSearchTitle = document.createElement('h2');
mealSearchTitle.classList.add('title');
mealSearchTitle.textContent = 'Find Recipe By The Ingredients';
mealSearch.appendChild(mealSearchTitle);

const mealSearchBox = document.createElement('div');
mealSearchBox.classList.add('meal-search-box');
mealSearch.appendChild(mealSearchBox);

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.classList.add('search-field');
searchInput.placeholder = 'Enter an ingredient';
searchInput.id = 'search-input';
mealSearchBox.appendChild(searchInput);

const searchBtn = document.createElement('button');
searchBtn.type = 'submit';
searchBtn.classList.add('searchbtn');
searchBtn.id = 'searchbtn';
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

const CloseBtn = document.createElement('button');
CloseBtn.type = 'button';
CloseBtn.classList.add('btn', 'close-btn');
CloseBtn.id = 'close-btn';
mealDetails.appendChild(CloseBtn);

const CloseBtnIcon = document.createElement('i');
CloseBtnIcon.classList.add('fas', 'fa-times');
CloseBtn.appendChild(CloseBtnIcon);

const DetailsContent = document.createElement('div');
DetailsContent.classList.add('meal-details-content');
mealDetails.appendChild(DetailsContent);

// append all elements to the container
allContent.appendChild(mealSearch);
allContent.appendChild(mealResult);
allContent.appendChild(mealDetails);
 
//#endregion

searchBtn.addEventListener('click', getList);
mealList.addEventListener('click', getRecipe);
CloseBtn.addEventListener('click', () => {
    DetailsContent.parentElement.classList.remove('showRecipe');
});

//#region get meal list that matches with the ingredients (funkcija)
function getList() {
    const searchInputTxt = document.getElementById('search-input').value.trim();
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
                a.textContent = 'Get More Info';

                mealName.append(h3, a);
                mealItem.append(mealImg, mealName);

                mealList.append(mealItem);
            });
            mealList.classList.remove('notFound');
        } else{
            const p = document.createElement('p');
            p.textContent = "Sorry, we do not have recipe with this ingredient";
            mealList.append(p);
            mealList.classList.add('notFound');
        }
    });
  }
  //#endregion
  
  
//#region get recipe of the meal and add modal(funkcijos)
function getRecipe(e){
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
  
    const RecipeTitle= document.createElement('h2')
    RecipeTitle.classList.add('recipe-title')
    RecipeTitle.innerHTML= `${meal.strMeal}`
    DetailsContent.append(RecipeTitle)
  
    const ingredientsList = document.createElement('p');
    ingredientsList.classList.add('recipe-ingredients');
    ingredientsList.innerText = `${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, 
                                ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6}, ${meal.strIngredient7}`;
    DetailsContent.append(ingredientsList);
  
    const instructions = document.createElement('div');
    instructions.classList.add('recipe-instruct');
    instructions.innerHTML = `
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    `;
    DetailsContent.append(instructions);
  
    const videoLink = document.createElement('a');
    videoLink.href = meal.strYoutube;
    videoLink.target = "_blank";
    videoLink.innerText = "Watch Video";
    videoLink.classList.add('recipe-link');
    DetailsContent.append(videoLink);

    DetailsContent.parentElement.classList.add('showRecipe');
  }
  //#endregion
  