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
const result = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  // console.log(itemEl);
  itemEl.textContent = element;
  itemEl.classList.add("item");
  return itemEl;
});

listEl.append(...result);
console.log(listEl);
