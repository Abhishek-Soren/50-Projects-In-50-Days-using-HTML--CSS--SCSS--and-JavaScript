let left = document.querySelector(".wrapper-left");
let right = document.querySelector(".wrapper-right");
let wrapper = document.querySelector(".wrapper");

left.onmouseenter = () => {
  wrapper.classList.add("hover-left");
};

left.onmouseleave = () => {
  wrapper.classList.remove("hover-left");
};

right.onmouseenter = () => {
  wrapper.classList.add("hover-right");
};

right.onmouseleave = () => {
  wrapper.classList.remove("hover-right");
};
