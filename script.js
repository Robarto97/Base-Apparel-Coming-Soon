const button = document.querySelector("#submit");
const errorMsg = document.querySelector("#error-message");
const errorImg = document.querySelector("#error");
const input = document.querySelector("#email");

button.addEventListener("click", handleClick);

let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function handleClick() {
  if (input.value.match(validRegex)) {
    input.value = "";
    button.classList.remove("pressed");
    errorMsg.classList.remove("show");
    errorImg.classList.remove("show");
    input.classList.remove("show-error");
  } else {
    button.classList.add("pressed");
    errorMsg.classList.add("show");
    errorImg.classList.add("show");
    input.classList.add("show-error");
  }
}
