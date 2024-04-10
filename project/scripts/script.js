const apiKey = 'e82305dc8f8f4bee84c112253e957e30';
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipeContainer = document.getElementById('recipeContainer');

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery !== '') {
        searchRecipes(searchQuery);
    } else {
        alert('Please enter a search query.');
    }
});

async function searchRecipes(query) {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeInformation=true`);
        if (response.ok) {
            const data = await response.json();
            displayRecipes(data.results);
        } else {
            throw new Error('Failed to fetch recipes.');
        }
    } catch (error) {
        console.error(error.message);
        alert('Failed to fetch recipes. Please try again later.');
    }
}

// Function to display recipes
function displayRecipes(recipes) {
    recipeContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>Cooking Time: ${recipe.readyInMinutes} minutes</p>
            <p>${recipe.summary}</p>
            <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}


