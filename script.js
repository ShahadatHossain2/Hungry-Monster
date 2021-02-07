
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
    ingredientList.push(meal.strIngredient1);
    ingredientList.push(meal.strIngredient2);
    ingredientList.push(meal.strIngredient3);
    ingredientList.push(meal.strIngredient4);
    ingredientList.push(meal.strIngredient5);
    ingredientList.push(meal.strIngredient6);
    ingredientList.push(meal.strIngredient7);
    ingredientList.push(meal.strIngredient8);
    ingredientList.push(meal.strIngredient9);
    ingredientList.push(meal.strIngredient10);
    ingredientList.push(meal.strIngredient11);
    ingredientList.push(meal.strIngredient12);
    ingredientList.push(meal.strIngredient13);
    ingredientList.push(meal.strIngredient14);
    ingredientList.push(meal.strIngredient15);

    const parents = document.getElementById('details');
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    
    div.innerHTML = `
    <img src="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3> <br>
    <h5>Ingredients:</h5>`;

    for (let i = 0; i < ingredientList.length; i++) {
        const ingredient = ingredientList[i];
        if(ingredient!="") {
            const li = document.createElement("li");
            li.innerText = ingredient;
            ul.appendChild(li);
        }
    }
    div.appendChild(ul);
    parents.appendChild(div);
}