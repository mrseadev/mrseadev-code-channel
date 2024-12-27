document.addEventListener("DOMContentLoaded", (event) => {
  const toggleButton = document.querySelector(".toggle-button");

  // Event listener for spacebar and button click
  document.addEventListener("keydown", (event) => {
    if (
      event.code === "Space" ||
      (event.target === toggleButton && event.type === "click")
    ) {
      event.preventDefault();
      toggleRotation();
    }
  });

  // Prevent spacebar from scrolling the page
  window.addEventListener("keydown", (event) => {
    if (event.code === "Space" && event.target === document.body) {
      event.preventDefault();
    }
  });
});

function toggleRotation() {
  const cube = document.querySelector(".cube");
  const playIcon = document.querySelector(".play-icon");
  const pauseIcon = document.querySelector(".pause-icon");

  const animationState = getComputedStyle(cube).animationPlayState;

  if (animationState === "running") {
    cube.style.animationPlayState = "paused";
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
  } else {
    cube.style.animationPlayState = "running";
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block";
  }
}
