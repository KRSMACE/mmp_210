var myFont;
function preload() {
  myFont = loadFont('fonts/futura.otf');
}

function setup() {
	createCanvas(640, 480);
    design();
}

function design() {
        
    var rectX = (320);
    var rectY = (240);
    var rect1W = (400);
    var rect1H = (100);
    var rectColor = color(255, 48, 48);
    var backColor1 = color(0, 0, 0);
    var backColor = color(255, 255, 255);
	let randomShape = floor(random(0,4));
    

    
    
            if (randomShape == 0) {
                
        background(backColor1);
                
        fill(rectColor);
        rectMode(CENTER);
        rect(rectX, rectY, rect1W, rect1H);
    
        fill("white");
        textFont(myFont);
        textSize(25);
        text("TheVillageHiddenInTheHood", width/2-180, height/2+10);
                
                
                
            /*} else if (randomShape == 1) {
        
                background("red");
            
            } else if (randomShape == 2) {
        
                background("pink");
            
            } else { (randomShape == 3)
        
                background("blue");*/
         
            }
    

  
}

function mouseClicked() {
	design();

}