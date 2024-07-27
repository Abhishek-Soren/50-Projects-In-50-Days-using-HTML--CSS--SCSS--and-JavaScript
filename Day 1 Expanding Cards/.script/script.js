let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveCLasses();
    panel.classList.add("active");
  });
});

function removeActiveCLasses() {
  for (let panel of panels) {
    panel.classList.remove("active");
    console.log("class removed");
  }
}
