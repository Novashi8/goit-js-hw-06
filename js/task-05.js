const refs = {
  inputField: document.querySelector("#name-input"),
  outputField: document.querySelector("#name-output"),
};
const onGetInputName = (event) => {
  if (refs.inputField.value === "") {
    return (refs.outputField.textContent = "Anonymous");
  }
  return (refs.outputField.textContent = event.currentTarget.value);
};

refs.inputField.addEventListener("input", onGetInputName);
