let clr;

function setup() {
  let canvas = createCanvas(900, 150); //create canvas half screen width
  canvas.addClass('positioned'); //add positioned class to canvas (see style.css)
  let params = getParams(); //get values from URL
  clr = params.color; 
  background('yellow'); 
  noStroke();
}

function draw() {
  fill(clr);
  textFont("Helvetica")
  textSize(64);
  text("Sans-Serif-Typography", 100, 100)
 
}
