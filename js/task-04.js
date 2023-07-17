const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");

let counterValue = 0;

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
