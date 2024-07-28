let open = document.getElementById("open");
let close = document.getElementById("close");
let wrapper = document.querySelector(".wrapper");

open.addEventListener("click", () => wrapper.classList.add("show-nav"));
close.addEventListener("click", () => wrapper.classList.remove("show-nav"));
