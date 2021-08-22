document.querySelector("#feedback button").addEventListener("click", () => {
  document.querySelector(".carouselmain").scrollIntoView();
  const confetti = document.querySelector(".confetti");
  confetti.classList.toggle("confetti-view");
});
