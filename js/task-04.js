const buttonDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const valueEl = document.querySelector("#value");
const buttonIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
let counterValue = 0;
const increaseOne = () => {
  counterValue -= 1;
  return (valueEl.textContent = counterValue);
};
const reduceOne = () => {
  counterValue += 1;
  return (valueEl.textContent = counterValue);
};
buttonDecrementEl.addEventListener("click", increaseOne);
buttonIncrementEl.addEventListener("click", reduceOne);
