const btn = document.getElementById("btn");
const ebtn = document.getElementById("e_btn");

const square = document.getElementById("square");
const circle = document.getElementById("circle");
const text = document.getElementById("text");
const range = document.getElementById("range");
const span = document.getElementById("range-span");
console.dir(circle);
ebtn.style.display = "none";

const logger = function () {
  square.style.backgroundColor = text.value;
};

const logger2 = function () {
  span.textContent = range.value + " %";

  circle.style.width = range.value + "%";
  circle.style.height = range.value + "%";
};

btn.addEventListener("click", logger);

range.addEventListener("input", logger2);
range.addEventListener("change", logger2);
