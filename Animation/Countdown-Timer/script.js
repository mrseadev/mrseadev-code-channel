const targetDate = new Date(new Date().getTime() + 30 * 60 * 1000).getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((distance % 1000) / 100) * 100;

  document.getElementById("countdown").innerHTML = `${minutes}:${seconds}:${
    milliseconds !== 0 ? milliseconds : "000"
  }`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 100);
