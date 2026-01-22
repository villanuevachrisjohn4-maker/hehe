document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const questionBox = document.getElementById("questionBox");
  const resultBox = document.getElementById("resultBox");
  const bgMusic = document.getElementById("bgMusic");

  /* 🎶 SOUND ON OPEN (BEST POSSIBLE) */
  bgMusic.volume = 0.8;
  bgMusic.play().catch(() => {
    console.log("Autoplay blocked, waiting for interaction");
  });

  const startMusicOnce = () => {
    bgMusic.play().catch(() => {});
    document.removeEventListener("click", startMusicOnce);
    document.removeEventListener("touchstart", startMusicOnce);
  };

  document.addEventListener("click", startMusicOnce);
  document.addEventListener("touchstart", startMusicOnce);

  /* 💥 CONFETTI */
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let confetti = [];

  function createConfetti() {
    confetti = [];
    for (let i = 0; i < 150; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 5 + 2,
        color: `hsl(${Math.random() * 360},100%,70%)`
      });
    }
  }

  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      p.y += p.speed;
    });
    requestAnimationFrame(animateConfetti);
  }

  /* 💖 YES BUTTON */
  yesBtn.addEventListener("click", () => {
    createConfetti();
    animateConfetti();

    questionBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    resultBox.style.animation = "none";
    resultBox.offsetHeight;
    resultBox.style.animation = "pop 0.8s ease";
  });

  /* 😈 NO BUTTON */
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
