function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const difColor = document.querySelector(".change-color");
console.log(difColor);
const onChangeColor = (event) => {
  const hexColorResult = getRandomHexColor();
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector(".color").textContent = newColor;
};
difColor.addEventListener("click", onChangeColor);
