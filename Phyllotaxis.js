//Click the link below to check out the animation
//https://editor.p5js.org/Bhargavi_Ch/sketches/_Vrrc50S9

var n = 0;
var c = 4;

function setup() {
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  //Formulas taken from the book 
  //http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
  var a = n * 137.5;
  var r = c * sqrt(n);
  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;
  noStroke();
  fill(n % 256, 255, 255);
  circle(x, y, 7);
  n++;
}