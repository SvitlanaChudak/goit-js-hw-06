function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector("button");
const body = document.querySelector("body")
const colorText = document.querySelector(".color")
button.addEventListener('click', changeBodyColor);
function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = body.style.backgroundColor;
}