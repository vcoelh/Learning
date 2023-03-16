function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(13,12,18);
  fill(234,242,56)
  arc(50, 140, 80, 80, PI/8, PI + QUARTER_PI + QUARTER_PI + QUARTER_PI);
  
  rect(120,125,25,25,50);
  rect(180,125,25,25,50);
  rect(240,125,25,25,50);
  rect(300,125,25,25,50);
  fill(0,0,0);
  circle(50,120,5);
  
  
  fill(45,35,163);
  rect(10,60,470,20,50);
  rect(460,0,20,80,50);
  noStroke();
  rect(10,200,470,20,50);
  rect(460,200,20,100,50);
  
  fill(0,0,255);
    arc(470, 150, 80, 80, PI,0);
    rect(430,150,300,30);
    triangle()
  

}