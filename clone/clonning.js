const spanBtn = document.querySelector(".titleAndSpanBtn__spanBtn");
const title = document.querySelector(".titleAndSpanBtn__title");

spanBtn.addEventListener("click", () => {
  spanBtn.classList.toggle("flipped");
  title.classList.toggle("clamp");
});
