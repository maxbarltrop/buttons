let borderRadiusElem = document.getElementById("borderRadiusContainer");
let borderWidthElem = document.getElementById("borderWidthContainer");
let borderColorElem = document.getElementById("borderColorContainer");
let radiusValueElem = document.getElementById("border-radius-value");
let widthValueElem = document.getElementById("border-width-value");
let borderColorValueElem = document.getElementById("border-color-value");
let borderOptionsTheButton = document.getElementById("theButton");

const handleChange = (event) => {
  let val = event.target.value;
  switch (event.target.id) {
    case "border-radius-value-input":
      radiusValueElem.innerHTML = `${val}px`;
      borderOptionsTheButton.style.borderRadius = `${val}px`;
      break;
    case "border-width-value-input":
      widthValueElem.innerHTML = `${val}px`;
      borderOptionsTheButton.style.borderWidth = `${val}px`;
      break;
    case "border-color-value-input":
      borderColorValueElem.innerHTML = `${val}`;
      borderOptionsTheButton.style.borderColor = val;
      break;
  }
};

const handleClose = (event) => {
  let val = event.target.value;
  switch (event.target.id) {
    case "border-radius-value-input":
      chrome.storage.sync.set({ borderRadius: val });
      break;
    case "border-width-value-input":
      chrome.storage.sync.set({ borderWidth: val });
      break;
    case "border-color-value-input":
      chrome.storage.sync.set({ borderColor: val });
      break;
  }
};

const makeRangeInput = (val) => {
  var rangeInput = document.createElement("input");
  rangeInput.value = val;
  rangeInput.type = "range";
  rangeInput.min = 0;
  rangeInput.max = 20;
  rangeInput.addEventListener("input", handleChange);
  rangeInput.addEventListener("change", handleClose);
  return rangeInput;
};

const constructBorderOptions = () => {
  chrome.storage.sync.get((data) => {
    let { borderRadius, borderColor, borderWidth } = data;
    radiusValueElem.innerHTML = `${borderRadius}px`;
    widthValueElem.innerHTML = `${borderWidth}px`;
    borderColorValueElem.innerHTML = `${borderColor}`;
    borderOptionsTheButton.style.borderRadius = `${borderRadius}px`;
    borderOptionsTheButton.style.borderWidth = `${borderWidth}px`;
    borderOptionsTheButton.style.borderColor = borderColor;
    var radiusInput = makeRangeInput(borderRadius);
    radiusInput.id = "border-radius-value-input";
    borderRadiusElem.appendChild(radiusInput);
    var widthInput = makeRangeInput(borderWidth);
    widthInput.id = "border-width-value-input";
    borderWidthElem.appendChild(widthInput);
    var colorInput = document.createElement("input");
    colorInput.value = borderColor;
    colorInput.type = "color";
    colorInput.id = "border-color-value-input";
    colorInput.className = "small-color-input";
    colorInput.addEventListener("input", handleChange);
    colorInput.addEventListener("change", handleClose);
    borderColorElem.appendChild(colorInput);
  });
};

constructBorderOptions();
