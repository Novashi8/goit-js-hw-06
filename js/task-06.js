const inputField = document.querySelector("#validation-input");

const validityChecker = (event) => {
  if (inputField.value.length === Number(inputField.dataset.length)) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  } else {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  }
};

inputField.addEventListener("blur", validityChecker);
