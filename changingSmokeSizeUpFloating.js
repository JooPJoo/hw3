/*continuously changing smoke puff direction as it moves up from website https://editor.p5js.org/enickles/sketches/BJFD1cuRQ*/

let minSize1 = 10;
//maximum size
let maxSize1 = 150;
//change speed for size (how much will the size increase/decrease each frame)
let sizeSpeed1 = 0.025;

var x = 210;
var y = 290;
var r = 0;

function setup() 
  {
    createCanvas(400, 400);
  }

function draw() 
  {
  
    size1 = map(sin(sizeSpeed1),-1.0,1.0,minSize1,maxSize1);
  
    background(0);
    noStroke();

    // draw smokestack
    fill(255);
    rect(195, height, 50, -100);
  
    // draw puff of smoke
    // fades darker as it gets closer to 0
    fill(y);
    translate(x, y);
    rotate(r);
    rect(-10, -10, size1, size1);
  
 
  
    // up 3 pixels
    y -= 3;

    // rotate 0.05 radians, which is about 2.8 degrees
    r += 0.05

    // if reach past the top a bunch
    if (y < -150) 
      {
        y = 290;
      }
  
  }
