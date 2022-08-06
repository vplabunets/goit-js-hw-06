let counterValue = 0;
const valueEl = document.querySelector("#value");
const targetBtnPlus = document.querySelector('button[data-action="increment"]');
const targetBtnMinus = document.querySelector(
  'button[data-action="decrement"]'
);

targetBtnMinus.addEventListener("click", handleTargetButtonClickMinus);
targetBtnPlus.addEventListener("click", handleTargetButtonClickPlus);
function handleTargetButtonClickMinus() {
  valueEl.textContent -= 1;
  return valueEl;
}
// console.log(Number(valueEl.textContent));
function handleTargetButtonClickPlus() {
  let value = Number(valueEl.textContent);
  value += 1;
  valueEl.textContent = value;
  return valueEl;
}

