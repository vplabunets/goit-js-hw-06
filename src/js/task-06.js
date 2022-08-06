const textInput = document.querySelector("#validation-input");
const inputLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === +inputLength) {
    textInput.className = "valid";
    // return;
  } else {
    textInput.className = "invalid";
  }
}
