function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector("button.change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
buttonEl.addEventListener("click", (event) => {
  spanEl.textContent = "-";
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.insertAdjacentHTML("beforeend", getRandomHexColor());
});
