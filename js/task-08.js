const form = document.querySelector(".login-form");

function submitForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Fill in all of the fields, please");
  } else {
    const userData = {
      userEmail: email.value,
      userPass: password.value,
    };
    console.log(userData);
    event.currentTarget.reset();
  }
}

form.addEventListener("submit", submitForm);
