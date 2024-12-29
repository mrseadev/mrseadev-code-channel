function updateValue(val) {
  document.getElementById("value").textContent = val;
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize value display on page
  document.getElementById("value").textContent =
    document.getElementById("range").value;
});
