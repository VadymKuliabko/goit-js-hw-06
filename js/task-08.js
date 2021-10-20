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

  console.log(
    `${email.name}: ${email.value}, ${password.name}: ${password.value}`
  );
  event.currentTarget.reset();
};

formEl.addEventListener("submit", onSubmitForm);
