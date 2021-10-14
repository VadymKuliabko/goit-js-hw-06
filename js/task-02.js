const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
console.log(ingredients);

const listEl = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  const itemEl = document.createElement("li");
  // console.log(itemEl);
  itemEl.textContent = element;
  itemEl.classList.add("item");
  listEl.append(itemEl);
  console.log(itemEl);
});
