const input = document.getElementById("validation-input");
const lengthAttr = Number(input.getAttribute("data-length"));

input.addEventListener("blur", getBorderClr);

function getBorderClr(event) {
  if (event.target.value.trim().length === lengthAttr) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
