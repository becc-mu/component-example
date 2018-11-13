function RecipePage() {

}

RecipePage.prototype.render = function (i) {
  let recipe = recipes[i]
  let list = ''
  for (i=0; i < recipe.ingredients.length; i++) {
    list += `<li>${recipe.ingredients[i]}</li>`
  }
  return `
    <button onclick="showRecipesIndexPage()">Index</button>
      <h1>${recipe.title}</h1>
      <ul>
        ${list}
      </ul>
  `
}
