const buttons = {
  subtract: document.querySelector('[data-action="decrement"]'),
  addition: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

let counterValue = 0;

const add = () => {
  counterValue += 1;
  buttons.counter.textContent = counterValue;
};
const decrease = () => {
  counterValue -= 1;
  buttons.counter.textContent = counterValue;
};

buttons.subtract.addEventListener("click", decrease);
buttons.addition.addEventListener("click", add);
