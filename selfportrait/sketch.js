function setup() {
    createCanvas(640, 460)
}
function draw() {
    background("white");
    
    /*Head*/
    noStroke("")
    fill("saddlebrown")
    ellipse(155,215,200,250);
    
    fill("black")
    ellipse(105,200,60,60);
    ellipse(205,200,60,60);
    
    fill("mediumpurple")
    ellipse(105,200,55,55);
    ellipse(205,200,55,55);
    
    /* Eyes Start
    /*1st eye line*/
    stroke("black")
    ellipse(105,200,50,50);
    ellipse(205,200,50,50);
    
    /*2nd eye line*/
    stroke("black")
    ellipse(105,200,40,40);
    ellipse(205,200,40,40);
    
    /*3rd eye line*/
    stroke("black")
    ellipse(105,200,30,30);
    ellipse(205,200,30,30);
    
    /*4th eye line*/
    stroke("black")
    ellipse(105,200,20,20);
    ellipse(205,200,20,20);
    
    /*Pupil*/
    fill("black")
    ellipse(105,200,10,10);
    ellipse(205,200,10,10);
    
    /* HeadBand */
    fill("darkblue")
    rect(55,100,200,60)
    
    fill("silver")
    rect(80,105,150,50)
    
    
    
}

/*function draw() {
    background("white")
    
    ellispe(100,100,100,100);
}
  */