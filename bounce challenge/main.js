// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let bPlayer = {
  x: 50,
  y: 200,
  w: 50,
  h: 50,
  speed1: 5,
};

let gPlayer = {
  x: 600,
  y: 450,
  w: 50,
  h: 50,
  speed1: 5,
};

let yPlayer = {
  x: 700,
  y: 50,
  w: 50,
  h: 50,
  speed1: 5,
  speed2: 5,
};

// Main Program Loop (60 FPS)
requestAnimationFrame(draw);
function draw() {
  //  Animate Blue Square
  bPlayer.x += bPlayer.speed1;
  if (bPlayer.x + bPlayer.w >= cnv.width) {
    bPlayer.speed1 = -bPlayer.speed1;
  } else if (bPlayer.x <= 0) {
    bPlayer.speed1 = -bPlayer.speed1;
  }

  //  Animate Green Square
  gPlayer.y += gPlayer.speed1;
  if (gPlayer.y + gPlayer.h >= cnv.height) {
    gPlayer.speed1 = -gPlayer.speed1;
  } else if (gPlayer.y <= 0) {
    gPlayer.speed1 = -gPlayer.speed1;
  }

  // Animate Yellow Square
  yPlayer.x -= yPlayer.speed1;
  yPlayer.y -= yPlayer.speed2;

  if (yPlayer.x + yPlayer.w >= cnv.width) {
    yPlayer.speed1 = -yPlayer.speed1;
  } else if (yPlayer.x <= 0) {
    yPlayer.speed1 = -yPlayer.speed1;
  }

  if (yPlayer.y + yPlayer.h >= cnv.height) {
    yPlayer.speed2 = -yPlayer.speed2;
  } else if (yPlayer.y <= 0) {
    yPlayer.speed2 = -yPlayer.speed2;
  }

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Blue Player
  ctx.fillStyle = "blue";
  ctx.fillRect(bPlayer.x, bPlayer.y, bPlayer.w, bPlayer.h);

  // Draw Green Player
  ctx.fillStyle = "Green";
  ctx.fillRect(gPlayer.x, gPlayer.y, gPlayer.w, gPlayer.h);

  // Draw Yellow Player
  ctx.fillStyle = "Orange";
  ctx.fillRect(yPlayer.x, yPlayer.y, yPlayer.w, yPlayer.h);
  // Request Animation Frame
  requestAnimationFrame(draw);
}
