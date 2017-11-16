
var y = -290;//Black KRS
var ySpeed = 3;
var y2 = 1;//White KRS
var ySpeed2 = 3;
var x = -400;//Purple ACE
var xSpeed = 3;

var myFont;
function preload() {
  myFont = loadFont('fonts/futura.otf');
}

function setup() {
  createCanvas(640, 480);
  background("black");
    
}

function draw() {
    
    
    var rectX = (0);
    var rectY = (0);
    var rectW = (320);
    var rectH = (480);
    var rectColor1 = color(147, 112, 219);
    var rectColor2 = color(0);
    var backColor = color(255, 255, 255);
    var str1 = "xXKRSMACEXx";
    var str2 = "ACEXx"
    var centerW = width/2;
    var centerH = height/2;
    var fontS = 50;
    
    //Rectangles
    fill(rectColor1);
    rect(rectX, rectY, rectW, rectH);
    
    fill(rectColor2);
    rect(rectX+320, rectY, rectW, rectH);
    
    
    noFill("red");
    stroke("black")
    //strokeWeight(2);
    rect(centerW-225,centerH-115,225,200);
    
    noFill("blue");
    stroke("mediumpurple")
    rect(centerW,centerH-115,200,200);
    
    //Text
    fill("black");
    textFont(myFont);
    textSize(fontS);
    text(str1, 110, y, height/2);
   
    //y++;
    y = y + ySpeed;
    
    if (y > height/2) {
	   y = height/2;
}
    
    fill("mediumpurple");
    textFont(myFont);
    textSize(fontS);
    text(str2, 319, x, height/2);
    
    //x++;
    x = x + xSpeed;
    if (x > height/2) {
        x = height/2;
    }
        
    
    fill("white");
    textFont(myFont);
    textSize(fontS);
    text(str1, 114.5, y2, height/2);
    //y2++;
    y2 = y2 + ySpeed2;
    
    if (y2 > height/2) {
	   y2 = height/2;
}
    
    
    
    
   
    
       
}