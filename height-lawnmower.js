function setup() 
  {
    createCanvas(400, 200);
    colorMode(HSB);
  }

  var x = 0;
  var h = 10;

function draw() 
  {
    //grass color
    stroke(random(40, 70), 100, 90);
    //draws random grass blades at different angles and height
    line(x, height-10, x+random(-10, 10), height-10-(h));
    noStroke();
    //draws a grass blade 5 pixels away to the right each time
    x = x + 5;

    if (x > width) 
      {
        //draws a grass blade randomly placed 1-10 pixels away from the last blade
        x = random(1, 10);
        //increases the grass blade height eachturn through the horizontal plane
        h = h + 3;
      }
  
    //lawnmower function cuts grass at certain height, grass starts at 10 pixels height
    if (h >= 20) 
      {
        fill(0);
        rect(0, 0, width, height);
        h = 10;
      }
  
    //dirt color create
    if (h >= 0)
      {
        fill(40, 100, 60);
        rect(0, height-10, width, 10);
      }
  }
