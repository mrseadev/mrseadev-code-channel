window.onload = function () {
  let chargeLevel = 0;

  const batteryFill = document.getElementById("batteryFill");
  const batteryPercent = document.getElementById("batteryPercent");

  function updateBattery() {
    if (chargeLevel <= 20) {
      batteryFill.className = "battery-fill red";
    } else if (chargeLevel <= 50) {
      batteryFill.className = "battery-fill yellow";
    } else {
      batteryFill.className = "battery-fill green";
    }

    batteryFill.style.width = chargeLevel + "%";
    batteryPercent.innerText = chargeLevel + "%";
  }

  function chargeBattery() {
    if (chargeLevel < 100) {
      chargeLevel += 1;
      updateBattery();
    } else {
      clearInterval(chargeInterval);
    }
  }

  const chargeInterval = setInterval(chargeBattery, 100);
};
