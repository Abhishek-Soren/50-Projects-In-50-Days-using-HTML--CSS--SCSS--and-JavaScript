let loadText = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");

let load = 0;

let loadInterval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(loadInterval);
  }

  loadText.innerHTML = `${load}%`;
  console.log(load);

  loadText.style.opacity = 1 - load / 100;
  console.log(30 * (1 - load / 100));

  bg.style.filter = `blur(${30 * (1 - load / 100)}px)`;
}
