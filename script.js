
document.getElementById('searchButton').addEventListener('click', function () {
    let search = document.getElementById('mealName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(response => response.json())
        .then(data => {
            displayMeal(data);
        })
})

function displayMeal(data) {
    const parent = document.getElementById('mealList');
    parent.innerHTML = "";
    const parent2 = document.getElementById('details');
    parent2.innerHTML = "";
    const meals = data.meals;
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const div = document.createElement("div");

        const mealInfo = `
        <img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        `;

        div.innerHTML = mealInfo;
        parent.appendChild(div);

        div.addEventListener('click', function(){
            ingredients(meal);
        })
    }
}


function ingredients(meal) {
    const ingredientList = [];
    ingredientList.push(meal.strMeasure1+' '+meal.strIngredient1);
    ingredientList.push(meal.strMeasure2+' '+meal.strIngredient2);
    ingredientList.push(meal.strMeasure3+' '+meal.strIngredient3);
    ingredientList.push(meal.strMeasure4+' '+meal.strIngredient4);
    ingredientList.push(meal.strMeasure5+' '+meal.strIngredient5);
    ingredientList.push(meal.strMeasure6+' '+meal.strIngredient6);
    ingredientList.push(meal.strMeasure7+' '+meal.strIngredient7);
    ingredientList.push(meal.strMeasure8+' '+meal.strIngredient8);
    ingredientList.push(meal.strMeasure9+' '+meal.strIngredient9);
    ingredientList.push(meal.strMeasure10+' '+meal.strIngredient10);
    ingredientList.push(meal.strMeasure11+' '+meal.strIngredient11);
    ingredientList.push(meal.strMeasure12+' '+meal.strIngredient12);
    ingredientList.push(meal.strMeasure13+' '+meal.strIngredient13);
    ingredientList.push(meal.strMeasure14+' '+meal.strIngredient14);
    ingredientList.push(meal.strMeasure15+' '+meal.strIngredient15);
    ingredientList.push(meal.strMeasure16+' '+meal.strIngredient16);
    ingredientList.push(meal.strMeasure17+' '+meal.strIngredient17);
    ingredientList.push(meal.strMeasure18+' '+meal.strIngredient18);
    ingredientList.push(meal.strMeasure19+' '+meal.strIngredient19);
    ingredientList.push(meal.strMeasure20+' '+meal.strIngredient20);

    const parents = document.getElementById('details');
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    
    div.innerHTML = `
    <img src="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <h5>Ingredients:</h5>`;

    for (let i = 0; i < ingredientList.length; i++) {
        const ingredient = ingredientList[i];
        if(ingredient.length > 2 && ingredient != "null null" && ingredient != "null " && ingredient != " null" ) {
            const li = document.createElement("li");
            li.innerHTML = `<span class="icon">&#9989;</span> ${ingredient}`;
            ul.appendChild(li);
        }
    }
    div.appendChild(ul);
    parents.appendChild(div);
}