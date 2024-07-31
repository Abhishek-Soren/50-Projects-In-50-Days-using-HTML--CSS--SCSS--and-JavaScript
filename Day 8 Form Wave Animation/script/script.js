let labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map((letter, index) => `<span  style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join("");
});

// let labels = document.querySelectorAll(".form-control label");

// labels.forEach((label) => {
//   label.innerHTML = label.innerHTML
//     .split("")
//     .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
//     .join("");
// });
