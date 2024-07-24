const formIdle = document.querySelector(".login-form");
const onFormSubm = (event) => {
  event.preventDefault();
  const email = formIdle.elements.email.value;
  const password = formIdle.elements.password.value;

  if (!email || !password === 0) {
    alert("All form fields must be filled in");
    return;
  }
  const formIdleData = {
    email: email,
    password: password,
  };
  console.log(formIdleData);
  formIdle.reset();
};
formIdle.addEventListener("submit", onFormSubm);
