let num;

function setup() {
  let canvas = createCanvas(windowWidth, 100); //create canvas half screen width
  canvas.addClass('centered'); //add centered class to canvas (see style.css)
   //get color value from URL
  let params = getParams();
  let clr = params.color; 
  num = params.num; 
  //add color values in link to next page
  var a = document.getElementsByTagName('a')[0];
  var href = setParams(a.href, 'color', clr);
  a.href = href;


  background(clr);
  fill('yellow');
  noStroke();
}

function draw() {

    textFont("Times New Roman")
  textSize(64);
    text("Serif Typeface", 100, 80)
    //ellipse(width/2, 50+i*30, 20);
  
}
