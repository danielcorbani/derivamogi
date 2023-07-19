var x, y, vx, vy, s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //fullScreem(true);
  s = 50;
  x = s;
  y = s;
  vx = 2;
  vy = 2;
}

function draw() {
  background(220);
  fill(20,120,45);
  ellipse(x,y,s,s);
  if (x>windowWidth-s/2) vx = -vx;
  if (y>windowHeight-s/2) vy = -vy;
  if (x<s/2) vx = -vx;
  if (y<s/2) vy = -vy;
  x += vx;
  y += vy;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}