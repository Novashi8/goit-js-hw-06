const slider = document.querySelector("#font-size-control");
const growingText = document.querySelector("#text");

const inputRange = (event) => {
  growingText.style.fontSize = event.currentTarget.value + "px";
};

slider.addEventListener("input", inputRange);
