window.addEventListener('load', function() {
  showRecipesIndexPage();
}, false);

const showRecipePage = function(i) {
  document.querySelector('#main').innerHTML = new RecipePage().render(i);
}

const showRecipesIndexPage = function() {
  document.querySelector('#main').innerHTML = new RecipesIndexPage().render();
}

const addRecipe = function() {
  recipes.push({'title': 'Roast Beef', 'ingredients': ['1 x beef', '10 x potatoes']})
  showRecipesIndexPage()
}
