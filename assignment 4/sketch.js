function setup() { 
  	createCanvas(600, 600);
  	rectMode(CENTER);
} 
function draw() { 
    var rectW = 300;
    var rectH = 100;
    var rectRadi = 5;
    var ellipseS = 20;
    var ellipsePosX = 135;
    var ellipsePosY = 35;
    var str1 = "TheVillageHiddenInTheHood";
    var str1PosX = 125;
    var str1PosY = 5;
	background(200, 25);
    
	rect(mouseX, mouseY, rectW,rectH, rectRadi);
   
    stroke("black");
    strokeWeight(3);
    textSize(20);
    text(str1, mouseX-str1PosX, mouseY+str1PosY);
	//Top Ellipeses
    ellipse(mouseX - ellipsePosX, mouseY - ellipsePosY, ellipseS);
    ellipse(mouseX + ellipsePosX, mouseY - ellipsePosY, ellipseS);
    //Bottom Ellipeses
    ellipse(mouseX - ellipsePosX, mouseY + ellipsePosY, ellipseS);
    ellipse(mouseX + ellipsePosX, mouseY + ellipsePosY, ellipseS);
	
}

function mousePressed(){
    
    fill(
        mouseX/2,   //red
        mouseX, //green
        mouseY,   //blue
    )
}