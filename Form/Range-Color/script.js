document.addEventListener("DOMContentLoaded", function () {
  const bodyElement = document.body;
  const rgbDisplay = document.getElementById("rgbValue");
  const colorSliders = {
    redSlider: document.getElementById("rangeRed"),
    greenSlider: document.getElementById("rangeGreen"),
    blueSlider: document.getElementById("rangeBlue"),
  };

  const updateBackgroundColor = () => {
    const redValue = colorSliders.redSlider.value;
    const greenValue = colorSliders.greenSlider.value;
    const blueValue = colorSliders.blueSlider.value;
    const backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;

    bodyElement.style.background = backgroundColor;
    rgbDisplay.textContent = backgroundColor;
  };

  Object.values(colorSliders).forEach((slider) => {
    slider.addEventListener("input", updateBackgroundColor);
  });

  updateBackgroundColor();
});
