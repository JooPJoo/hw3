What code draws the blades of grass?
stroke(random(40, 70), 100, 90);
//draws random grass blades at different angles and height
line(x, height-10, x+random(-10, 10), height-10-random(h));
noStroke();
//draws a grass blade 5 pixels away to the right each time
x = x + 5;

if (x > width)
{
//draws a grass blade randomly placed 1-10 pixels away from the last blade
x = random(1, 10);
//increases the grass blade height eachturn through the horizontal plane
h = h + 5;
}

What code makes the "lawnmower" come by? How often does it come by?
if (random(100) > 99.9) {
fill(255);
rect(0, 0, width, height-15);
h = 10;
}
the lawnmower comes by at a random time

What's the point of the h variable?
The h variable provides a unit of measurement for certain aspects of the code such as a y-coordinate or height conditions.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?
the -10 statement are the starting and ending points of the line in the y-axis. So height-10 is referring to y1 and y2 coordinates (height = 200, (height - 10) = 190). It is there so that it commands the line drawn to start and end at certain locations.
