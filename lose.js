// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"

function drawRedGradient() {
  let c1 = color(255, 180, 180);
  let c2 = color(200, 0, 0);

  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawLose() {
  // Red-tinted background to communicate failure
  drawRedGradient();

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  textAlign(CENTER, CENTER);
  textLeading(50);
  text(
    "You have Badluck coming your way... Better luck next time :(",
    width / 2,
    300,
    width * 0.8,
    height,
  );

  // Instruction text
  textSize(20);
  text("Click or press R to return to Start.", width / 2, 360);
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
