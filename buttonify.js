var buttons = document.getElementsByTagName("button");

chrome.storage.sync.get((data) => {
  let { color, backgroundColor, borderRadius, borderColor, borderWidth } = data;
  for (let button of buttons) {
    const _style = button.style;
    _style.color = color;
    _style.backgroundColor = backgroundColor;
    _style.borderRadius = borderRadius;
    _style.borderColor = borderColor;
    _style.borderWidth = borderWidth;
  }
});
