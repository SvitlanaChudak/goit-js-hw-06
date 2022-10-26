const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
for (let i = 0; i < ingredients.length; i += 1) {
  console.log(ingredients[i]);
  const ingredient = document.createElement("li");
  console.log(ingredient);
  ingredient.textContent = ingredients[i];
}