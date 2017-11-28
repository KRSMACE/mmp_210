
function setup() {
  var columnSize = 75;
  var rowSize = 130;
  var yellow = color(255, 248, 214);
  var gry = color(105,105,105);
  var brown = color(139, 69, 19);
  var darkBrown = color(107, 58, 3);
  var black = color(102, 51, 0);
    
	  createCanvas(640, 480);
    background (gry);

    for (var x = 0; x < width; x += columnSize) {
      for (var y = 0; y < height; y += rowSize) {
        //window
        noStroke ();
        fill(black);  
        rect(x-27.5,y+90,55,10);  
        fill(darkBrown);  
        rect(x-32.5,y+85,65,10);
        fill(darkBrown);  
        rect(x-27.5,y+85,55,10);  
        fill(brown);
        ellipse(x,y,50);
        rect(x-25,y,50,85);
        //bottom WindRect
        rect(x-35,y+75,70,15);
       
        
        fill(yellow);
        ellipse(x,y,40);
        rect(x-20,y,40,80);
        
        fill(brown);
        ellipse(x,y,8);
        //Horizaontal  
        rect(x-25,y,50,4);
        rect(x-25,y+20,50,4);
        rect(x-25,y+50,50,4);
        //Vertical  
        rect(x-15,y-20,4,20);
        rect(x+11,y-20,4,20); 
        rect(x-2,y-25,4,25);
        
        
          
        
    }
  }
}
  