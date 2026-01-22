const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionBox = document.getElementById("questionBox");
const resultBox = document.getElementById("resultBox");
const bgMusic = document.getElementById("bgMusic");

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  bgMusic.play();
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
});

/* NO BUTTON – IMPOSSIBLE MODE */
noBtn.addEventListener("mouseenter", runAway);
noBtn.addEventListener("touchstart", runAway);

function runAway() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
