const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionBox = document.getElementById("questionBox");
const resultBox = document.getElementById("resultBox");
const bgMusic = document.getElementById("bgMusic");

/* 💖 YES BUTTON */
yesBtn.addEventListener("click", () => {
  // Start background music (user interaction safe)
  bgMusic.volume = 0.7;
  bgMusic.play();

  // Cute popup message
  alert("I knew it! 😍💖");

  // Switch screens
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
});

/* 😈 NO BUTTON – IMPOSSIBLE MODE */
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
