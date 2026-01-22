const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionBox = document.getElementById("questionBox");
const resultBox = document.getElementById("resultBox");

// YES button
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
});

// NO button runs away 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = translate(${x}px, ${y}px);
});
