function setup() {
  createCanvas(640, 480);
}

function draw() {
    background("yellowgreen");
    
    var centerWidth = width/2;
    var centerHeight = height/2;
    var headSize = 300;
    var mainColor = color(255, 165, 0);
    var secColor = color(255, 250, 250);
    var mainStroke = color(0, 0, 0);
    var noseX = 27;
    var noseY = 10;
    var rectColor = color(211,211,211);
    var rectX = -5;
    var rectY = 100;
    var rectW = 650;
    var rectH = 35;
    
    //Background Stripes
    fill(rectColor);
    stroke(mainStroke)
    rect(rectX, rectY+75, rectW, rectH+40)
    rect(rectX, rectY+158, rectW, rectH)
    rect(rectX, rectY+200, rectW, rectH)
    
    
    //head
    
    fill(mainColor);
    stroke("black");
    strokeWeight(4);
    ellipse(centerWidth,centerHeight, headSize,headSize);
    
    //nose
   
    fill(secColor);
    stroke("none");
    ellipse(centerWidth,centerHeight,noseX,noseY);
    
    //leftEye
    
    fill("white");
    noStroke("black");
    arc(height/2, width/2-100, 70, 70, 0, PI+QUARTER_PI, CHORD);
    
    //righteye
    
    fill("white");
    noStroke("black");
    arc(height/2+150, width/2-100, 70, 70, 0 - QUARTER_PI,PI,CHORD);
    
    //Triangle Hair
    
    fill("orange")
    stroke("black")
    translate(width/2-62,height/2-170);
    triangle(-200, 20, 58, 20, 59, 125);
    
    translate(width/2-345, height/2-217.8);
    noStroke();
    rect(0, 0, 100, 110);
    /*
    // Mouth Points
    
    //Left
    fill("red")
    ellipse(5,190,5);
    ellipse(-15,225,5);
    ellipse(35,210,5);
    ellipse(35,270,5);
    //Middle
    ellipse(88,220,5);
    //Right
    ellipse(165,190,5);
    ellipse(185,225,5);
    ellipse(135,210,5);
    ellipse(135,270,5);
    */
    
    // Mouth Line  
    stroke("white");
    strokeWeight(4);
    line(5, 190, -15, 225);
    line(35, 210, -15, 225);
    line(35, 210, 35, 270);
    
    line(35, 270, 88, 220);
    
    line(88, 220, 135, 270);
    line(135, 270, 135, 210);
    line(135, 210, 185,225);
    line(185,225,165,190);
    
   
    
    
    
    
    
    
    
    
    
}