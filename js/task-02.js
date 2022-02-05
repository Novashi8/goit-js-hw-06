const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((product) => {
  let li = document.createElement("li");
  li.innerText = product;
  li.classList.add("item");
  ingredientsList.appendChild(li);
});
