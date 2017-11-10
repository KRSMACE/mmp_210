function setup() {
    createCanvas(640, 480);
    background("black");

}

function draw(){
    var str1 = "Alexander";
    var rectX = 435;
    var rectY = 115;
    
    fill("purple");
    rectMode(CENTER);
    rect(width/2-15, height/2 - 23, rectX, rectY);
    
    
    noStroke();
    textSize(80);
    textFont("cursive")
    fill("red");
    text(str1, width/2 - 190, height/2);
    //stroke("white");
    fill("black");
    text(str1, width/2 - 186, height/2);
    
   
}