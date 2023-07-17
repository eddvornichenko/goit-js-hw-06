const input = document.getElementById("validation-input");
const lengthAttr = Number(input.getAttribute("data-length"));

input.addEventListener("blur", getBorderClr);

function getBorderClr(event) {
  if (event.currentTarget.value.length === lengthAttr) {
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
