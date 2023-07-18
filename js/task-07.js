const fontSizeCtrl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeCtrl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  text.style.fontSize = `${event.target.value}px`;
}
