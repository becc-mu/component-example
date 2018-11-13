function RecipesIndexPage() {

}

RecipesIndexPage.prototype.render = function () {
  let list = '';
  for (i = 0; i < recipes.length; i++) {
    list += `<li>${recipes[i].title}<button onclick="showRecipePage(${i})">Read</button></li>`
  }
  return `
    <button onclick="addRecipe()">Add Recipe</button>
    <h1>Recipes Index</h1>
      <ol>
        ${list}
      </ol>
  `
}
