function setup() {
    createCanvas(640, 460);
   
}

function draw() {
var gray = color(120);
    var pink = color(220,100,200);
    var blue = color("blue");
    var red = color("#ff0000");
    
    background(0);
    
    fill(gray);
    stroke(blue);
    rect(50,50,100,100);
    
    fill(pink);
    noStroke();
    rect(100,100,100,100);
}
    
    