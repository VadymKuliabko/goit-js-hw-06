const inputEl = document.querySelector("#validation-input");

const onInputValidation = (event) => {
  if (event.currentTarget.value.length === 6) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};
inputEl.addEventListener("blur", onInputValidation);
