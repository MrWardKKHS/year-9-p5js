function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  blendMode(LIGHTEST)
  noStroke()
  strokeWeight(4)
  fill(255, 0, 0, 50)
  circle(200, 200, 150)
  fill(0, 255, 0, 50)
  circle(230, 230, 150)
  fill(0, 0, 255, 50)
  circle(170, 230, 150)
}