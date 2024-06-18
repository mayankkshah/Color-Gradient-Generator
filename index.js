let btn1 = document.getElementById("myButton"); 
let btn2 = document.getElementById("myButton2");
let copydiv = document.querySelector(".copyCode");
let rgb1 = "rgb(92,145,229)";
let rgb2 = "rgb(152,63,198)";

const hexValues = () => {
  let myHexaValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexaValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handleButton1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;
  copydiv.textContent = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2})`;
  btn1.style.backgroundColor = rgb1;
  btn1.textContent = rgb1;
};
const handleButton2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;
  copydiv.textContent = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2})`;
  btn2.style.backgroundColor = rgb2;
  btn2.textContent = rgb2;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
copydiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copydiv.textContent);
});