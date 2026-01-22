<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Do You Love Me? 💕</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- 🎶 BACKGROUND MUSIC -->
  <audio id="bgMusic" loop>
    <source src="love-music.mp3" type="audio/mpeg">
  </audio>

  <!-- 💥 CONFETTI CANVAS -->
  <canvas id="confetti"></canvas>

  <!-- 💖 QUESTION BOX -->
  <div class="container" id="questionBox">
    <img src="start.gif" class="gif" alt="start gif">
    <h2>Do you miss me? 💞</h2>

    <div class="buttons">
      <button class="btn yes" id="yesBtn">Yes 💖</button>
      <button class="btn no" id="noBtn">No 💔</button>
    </div>
  </div>

  <!-- 😍 RESULT BOX -->
  <div class="container hidden" id="resultBox">
    <img src="end.gif" class="gif" alt="end gif">
    <h2>I knew it! 😍</h2>
    <p class="message">You make my heart so happy 💕</p>
    <div class="heart"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
