var myFont;
function preload() {
  myFont = loadFont('fonts/futura.otf');
}

function setup() {
  createCanvas(640, 480);
  background("black");
    
}

function draw() {
    
    
   
    var rectX = (320);
    var rectY = (240);
    var rectW = (400);
    var rectH = (100);
    var rectColor = color(255, 48, 48);
    var backColor = color(255, 255, 255);
    

    
    //First background----------->
    
    fill(rectColor);
    rectMode(CENTER);
    rect(rectX, rectY, rectW, rectH);
    
    //Text------------------------>
    
        fill("white");
        textFont(myFont);
        textSize(50);
        text("TheVillageHiddenInTheHood", width/2, height/2);
    
    
    //Text------------------------>    
}