document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const questionBox = document.getElementById("questionBox");
  const resultBox = document.getElementById("resultBox");
  const bgMusic = document.getElementById("bgMusic");

  /* YES BUTTON */
  yesBtn.addEventListener("click", () => {
    // Play music safely (no crash if blocked)
    bgMusic.volume = 0.8;
    bgMusic.play().catch(() => {
      console.log("Music autoplay blocked (normal on mobile)");
    });

    // Switch screens
    questionBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    // Force animation refresh (mobile fix)
    resultBox.style.display = "block";
    resultBox.style.animation = "none";
    resultBox.offsetHeight; // reflow
    resultBox.style.animation = "pop 0.8s ease";
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
});
