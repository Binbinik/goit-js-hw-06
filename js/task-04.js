const counterValue = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let count = 0;

const updateCounterValue = () => {
  counterValue.textContent = count;
};

const incrementCounter = () => {
  count += 1;
  updateCounterValue();
};

const decrementCounter = () => {
  count -= 1;
  updateCounterValue();
};

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
