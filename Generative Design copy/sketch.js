function setup() {
    createCanvas(512, 512);
    
}
function design() {
    background(51);
    translate(width/2, height/2);
    var numArcs = 10;
    stroke(255);
    strokeWeight(10);
    
    
    for (var i = 0; i < numArcs; i++){
        var r = random(0, 255);
        var g = random(0, 255);
        var b = random(0, 255);
        var a = random(0, 255);
        fill(r,b,g,a);
        
        var size = random(width/2, width);
        
        var arcFinish = random(0, TWO_PI);
        var arcStart = random(0, TWO_PI);
        var x = 0;
        var y = 0;
        
        arc(x, y, size, size, arcStar)
    }
    
}
function mouseClicked() {
    design();
    
}