document.addEventListener("DOMContentLoaded", function () {
  const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const minValueDisplay = document.getElementById("minValue");
  const maxValueDisplay = document.getElementById("maxValue");

  minRange.addEventListener("input", () => {
    if (parseInt(minRange.value) > parseInt(maxRange.value)) {
      minRange.value = maxRange.value;
    }
    minValueDisplay.textContent = minRange.value;
    updateSliderTrack();
  });

  maxRange.addEventListener("input", () => {
    if (parseInt(maxRange.value) < parseInt(minRange.value)) {
      maxRange.value = minRange.value;
    }
    maxValueDisplay.textContent = maxRange.value;
    updateSliderTrack();
  });

  function updateSliderTrack() {
    const percentMin = (minRange.value / maxRange.max) * 100;
    const percentMax = (maxRange.value / maxRange.max) * 100;

    minRange.style.background = `linear-gradient(to right, #ddd ${percentMin}%,rgb(13, 54, 238) ${percentMin}%, #4CAF50 ${percentMax}%, #ddd ${percentMax}%)`;
    maxRange.style.background = minRange.style.background;
  }

  updateSliderTrack();
});
