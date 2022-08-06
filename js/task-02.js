const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
const ingredientsList = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.className = "item";
  ingredientItem.textContent = ingredient;
  return ingredientItem;
});
listEl.append(...ingredientsList);

// const ingredientItemsArray = [];
// for (const ingredient of ingredients) {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.className = "item";
//   ingredientItem.textContent = ingredient;
//   ingredientItemsArray.push(ingredientItem);
// }
// list.append(...ingredientItemsArray);
