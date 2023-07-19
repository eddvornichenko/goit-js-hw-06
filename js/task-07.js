const fontSizeCtrl = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = fontSizeCtrl.value + "px";

fontSizeCtrl.addEventListener("input", () => {
  text.style.fontSize = fontSizeCtrl.value + "px";
});
