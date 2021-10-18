function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorEl = document.querySelector(".change-color");
const bodyColorEl = document.querySelector(".color");

const onBodyColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  bodyColorEl.textContent = `${getRandomHexColor()}`;

  console.log(getRandomHexColor());
};

changeColorEl.addEventListener("click", onBodyColor);
