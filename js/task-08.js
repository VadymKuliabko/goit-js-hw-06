const formEl = document.querySelector(".login-form");
const message = "Заполните пожалуйста все поля";

const onSubmitForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(message);
  }

 const result = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    result[name] = value;
  });

  console.log(result);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", onSubmitForm);
