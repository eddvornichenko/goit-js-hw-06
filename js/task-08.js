const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(event) {
  event.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Все поля должны быть заполнены");
  } else {
    const userInfo = {
      email: loginForm.elements.email.value,
      password: loginForm.elements.password.value,
    };
    console.log(userInfo);
    loginForm.reset();
  }
}
