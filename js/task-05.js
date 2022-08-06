const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
console.log(textInput.textContent);

textInput.addEventListener("input",onCurrentTargetinput)
  function onCurrentTargetinput (event){
  if (event.currentTarget.value) {
    textOutput.textContent = event.currentTarget.value;
  } else textOutput.textContent = "Anonymous";
};

// textInput.addEventListener("input", (event) => {
//   if (event.currentTarget.value) {
//     textOutput.textContent = event.currentTarget.value;
//   } else textOutput.textContent = "Anonymous";
// });
