const colorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorValue = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorChange(event) {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorValue.textContent = currentColor;
}

colorButton.addEventListener("click", colorChange);
