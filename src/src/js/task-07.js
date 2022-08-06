const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("span");

inputEl.addEventListener("input", onCurrentTargetInput);
function onCurrentTargetInput(event) {
  let fontSizeVariable = event.currentTarget.value;
  spanEl.style.fontSize = `${fontSizeVariable}px`;
}
