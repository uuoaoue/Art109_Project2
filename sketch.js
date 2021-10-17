let flowerColor;
let r, g, b;
let message = 'hello',
  bounds, // holds x, y, w, h of the text's bounding box
  font,
  fontsize = 60,
  x,
  y; // x and y coordinates of the text


  function preload() {
    font = loadFont('./IndieFlower-Regular.ttf');
  }


function setup() {
  createCanvas(400, 400);
  textFont(font);
    textSize(fontsize);
    // get the width and height of the text so we can center it initially
 bounds = font.textBounds(message, 0, 0, fontsize);
 x = 50;
 y =120;
  flowerColor= color(random(255, 205), random(205, 255), random(205, 205),150);
    r = random(255, 205), random(205, 255), random(205, 205);
  b = random(255, 205), random(205, 255), random(205, 205);
  g = random(255, 205), random(205, 255), random(205, 205);
  textColor= random(255, 205), random(205, 255), random(205, 205);
}
function flower(){
 // Create the canvas
  createCanvas(400, 400);
  background(179,211,244);

  // Set colors
  fill(flowerColor);
  stroke(127, 63, 120);

  // A design for a simple flower
  translate(width/2, height/2);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 60, 240);
    rotate(PI/5);
  }

}

function flowerCenter(){
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b);
  ellipse(0, 0, 70, 70);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, width/2, height/2);
  if (d < 35) {
    // Pick new random color values
    r = random(255, 205), random(205, 255), random(205, 205);
  b = random(255, 205), random(205, 255), random(205, 205);
  g = random(255, 205), random(205, 255), random(205, 205);
  }


}
function drawText(){
  // write the text in black and get its bounding box
fill(textColor);
noStroke();
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);
  textSize(70);

}
function jiggleText(){

    // check if the mouse is inside the bounding box and tickle if so
    if (
      mouseX - width / 2>= bounds.x &&
        mouseX - width / 2 <= bounds.x + bounds.w &&
        mouseY - height / 2 >= bounds.y &&
        mouseY - height / 2 <= bounds.y + bounds.h
    ) {
      x += random(-1.5, 1.5);
      y += random(-1.5, 1.5);
    }
}
function draw() {
  flower();
  flowerCenter();
  drawText();

jiggleText();

}
