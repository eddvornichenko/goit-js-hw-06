const loginForm = document.querySelector(".login-form");
const inputEmail = document.querySelector('input[type="email"');
const inputPass = document.querySelector('input[type="password"');
const btnSubmit = document.querySelector('button[type="submit"');

loginForm.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    const userInfo = { email: email.value, password: password.value };
    console.log(userInfo);
    loginForm.reset();
  }
}
