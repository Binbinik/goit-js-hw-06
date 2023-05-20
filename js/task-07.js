const rangeInput = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

rangeInput.addEventListener("input", () => {
  const fontSize = rangeInput.value + "px";
  textSpan.style.fontSize = fontSize;
});
