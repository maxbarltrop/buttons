let fontColorElem = document.getElementById("fontColorContainer");
let colorValueElem = document.getElementById("font-color-value");
let backgroundElem = document.getElementById("backgroundContainer");
let backgroundValueElem = document.getElementById("background-color-value");
let colorOptionsTheButton = document.getElementById("theButton");

const handleColorChange = (event) => {
  let color = event.target.value;
  colorValueElem.innerHTML = `${color}`;
  colorOptionsTheButton.style.color = color;
};

const handleColorClose = (event) => {
  let color = event.target.value;
  chrome.storage.sync.set({ color });
};

const handleBackgroundChange = (event) => {
  let backgroundColor = event.target.value;
  backgroundValueElem.innerHTML = `${backgroundColor}`;
  colorOptionsTheButton.style.backgroundColor = backgroundColor;
};

const handleBackgroundClose = (event) => {
  let backgroundColor = event.target.value;
  chrome.storage.sync.set({ backgroundColor });
};

const makeColorInput = (color) => {
  let colorInput = document.createElement("input");
  colorInput.value = color;
  colorInput.type = "color";
  colorInput.className = "big-color-input";
  return colorInput;
};

const makeAlert = () => alert("You clicked the button");

const constructColorPicker = () => {
  chrome.storage.sync.get((data) => {
    let { color, backgroundColor } = data;
    colorOptionsTheButton.style.color = color;
    colorOptionsTheButton.style.backgroundColor = backgroundColor;
    colorOptionsTheButton.addEventListener("click", makeAlert);
    colorValueElem.innerHTML = `${color}`;
    backgroundValueElem.innerHTML = `${backgroundColor}`;
    let fontColorInput = makeColorInput(color);
    fontColorInput.addEventListener("input", handleColorChange);
    fontColorInput.addEventListener("change", handleColorClose);
    fontColorElem.appendChild(fontColorInput);
    var backInput = makeColorInput(backgroundColor);
    backInput.addEventListener("input", handleBackgroundChange);
    backInput.addEventListener("change", handleBackgroundClose);
    backgroundElem.appendChild(backInput);
  });
};

constructColorPicker();

window.onload = function () {
  Particles.init({
    selector: ".background",
    speed: 0.6,
    color: ["#e0e0f8"],
    connectParticles: true,
    minDistance: 150,
  });
};
