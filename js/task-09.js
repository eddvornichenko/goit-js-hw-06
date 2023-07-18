function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('button[type="button"]');
const body = document.body;
const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", changeBg);

function changeBg(event) {
  const currentClr = getRandomHexColor();
  console.log(currentClr);
  body.style.backgroundColor = `${currentClr}`;
  spanColor.textContent = `${currentClr}`;
}
