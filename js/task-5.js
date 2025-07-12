function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.body;
const buttonElem = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

buttonElem.addEventListener("click", () => {
  const newBackgroundColorBody = getRandomHexColor();
  bodyElem.style.backgroundColor = newBackgroundColorBody;
  colorSpan.textContent = newBackgroundColorBody;
});
