// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"

let catimg; // cute cat image
function preload() {
  catImg = loadImage("catimg.jpg"); // path to your image
}

function drawPinkGradient() {
  let c1 = color(255, 200, 235); // top (light pink)
  let c2 = color(255, 120, 200); // bottom (darker pink)

  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1); // interpolate 0→1 from top→bottom
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y); // draw a horizontal line
  }
}

function drawWin() {
  // Green-tinted background to communicate success
  drawPinkGradient();

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  textAlign(CENTER, CENTER);
  text(
    "You have Goodluck coming your way! Go buy a lottery ticket :D",
    width / 2,
    300,
    width * 0.8,
    height,
  );

  imageMode(CENTER); // CAT IMAGEE
  image(catImg, width / 2, height * 0.7, 200, 200); // x, y, width, height
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
