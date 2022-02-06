const slider = document.querySelector("#font-size-control");
const growingText = document.querySelector("#text");

growingText.style.fontSize = slider.value + "px";

const inputRange = (event) => {
  growingText.style.fontSize = event.currentTarget.value + "px";
};

slider.addEventListener("input", inputRange);
