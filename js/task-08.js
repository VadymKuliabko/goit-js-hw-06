const formEl = document.querySelector(".login-form");

const onSubmitForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заполните пожалуйста все поля");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", onSubmitForm);
