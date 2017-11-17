function setup() {
    createCanvas(500, 500);
    design();
    //rectMode(CENTER);
    noStroke();
    
    
}

function design() {
    
   background("black");
    noStroke();
    var numberOfRects = random(100,1000);
    var columns = Math.ceil(Math.sqrt(numberOfRects));
    var rows = columns;
    var w = width/columns;
    var h = height/rows;
    
    for (var x = 0; x < width; x += w) {
        for (var y = 0; y < height; y += h) {
            var c = random(0,255);
            fill(c);
            var r = random(100,170);
            var g = random(0,70);
            var b = random(0,100);
            var sz = random();
            fill(r, g, b);
            //rect(x, y, w, w);
            
           var randomShape = random(0,4);
            if ( randomShape < 1 ) {
            // draw this shape...
                rect(x, y, w, h);
            }
            else if ( randomShape < 2 ) {
                //stroke(255);
                triangle(x, y, x + w, y, x + w, y + h);
            // draw this shape
            }
            else if (randomShape < 3) {
                ellipse(x + w/2, y + h/2, w, h);
            // draw this shape
            }
            else {
                arc(x, y, w*2, h*2, 0, HALF_PI);  
            }
    
           
        }
    }
    
   

}

function mousePressed() {
    design();