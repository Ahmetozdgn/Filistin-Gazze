let maxValue = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {
  const currentPer = Math.floor((window.scrollY * 100) / maxValue);

  document.getElementById("kids").style.transform = `scale(${
    1 + currentPer / 100
  })`;
  document.getElementById("tierra").style.backgroundPosition = `center -${
    currentPer * 3
  }px`;
});

window.addEventListener("resize", () => {
  maxValue = document.documentElement.scrollHeight - window.innerHeight;
});
