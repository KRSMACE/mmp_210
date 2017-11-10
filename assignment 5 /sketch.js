function setup() {
	createCanvas(640, 360);
}

function draw() {
    var str1 = "TheVillage";
    var str1X = 155;
    var str1Y = 170;
    var str2 = "HiddenInTheHood";
    var str2X = 320;
    var str2Y = 170;
    var str3 = "Shadow";
    var str3X = 190;
    var str3Y = 210;
    var str4 = "Shinobi";
    var str4X = 323; 
    var str4Y = 210;
    var strSize = 35;
	background("black");
	
	// Quadrant Lines
	strokeWeight(5);
	stroke("white");
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	
    
	// Quadrant 4
    if (mouseX > width/2 && mouseY > height/2) {
        fill("gold")
		rect(width/2, height/2, width, height);
        text(str4, str4X, str4Y);
	}
    // Quadrant 3
    else if (mouseX < width/2 && mouseY > height/2) {
        fill("coral");
		rect(0, height/2, width/2, height);
        text(str3, str3X, str3Y);
	}
    // Quadrant 1
    else if (mouseX > width/2 && mouseY < height/2) {
        fill("mediumpurple");
		rect(width/2, 0, width, height/2);
        textSize(strSize);
        text(str2, str2X, str2Y);
	} 
    // Quadrant 2
    else {
        fill("lightblue");
		rect(0, 0, width/2, height/2);
        //fill("black");
        textSize(strSize);
		text(str1, str1X, str1Y);
	}
}