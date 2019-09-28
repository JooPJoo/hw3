function setup() 
  {
    createCanvas(400, 400);
    frameRate(50);
  }

  // track the circle to draw next frame
  var x = 25;
  var y = 25;

function draw() 
  {
    background(0, 0.05)
    colorMode(HSB);
    stroke(255);

    // draw circle with random hue
    fill(random(255), (255), (255));
    rect(x, y, 20, 20, random(1,10), random(1, 10), random(1, 10), random(1,10));
  
  
    x = int(random(1, 16)) *25;
    y = int(random(1, 16)) *25;
    /*/ set up next circle
    x = x + 25;
  

    // if we hit the right edge, go down a line
    if (x > width-25) 
      {
        x = 25;
        y = y + 25;
      }

    // if we hit the bottom edge, reset to top
    if (y > height-25) 
      {
      y = 25;
    
      }*/
  }
