const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

function clickInput() {
  if (inputEl.value === "") {
    return (spanEl.textContent = "Anonimous");
  }
  return (spanEl.textContent = inputEl.value);
}

inputEl.addEventListener("input", clickInput);
