// Youtube
var youtube = [];
var randomYt;
var ytShape = {}

// Vine
var vine = [];
var randomV;
var vShape = {}
function preload() {
    
    for (let i = 0; i < 15; i++) {
        let s = loadSound("youtube/youtube" + i + ".mp3");
        youtube.push(s);
    }
    
    for (let i = 0; i < 15; i++) {
        let s = loadSound("vine/vine" + i + ".mp3");
        vine.push(s);
    }
    
}
function setup() {
    createCanvas(600, 600);
    img = loadImage("images/warning.jpg");
    
    //-----Youtube circle object
    ytShape = {
        x: width/2 + 150,
        y: height/2,
        w: 200,
        sound: youtube[randomYt],
        display: function() {
            fill(187, 0, 0);
            ellipse(this.x, this.y, this.w);
            
            fill("White");
            textSize(30);
            text("Youtube",this.x-53, this.y);
        },
        clicked: function() {
            var d = dist(this.x, this.y, mouseX, mouseY); 
            if (d < this.w/2) {  
                this.sound.play();
            }
        }
    }
    
    //-----Vine circle object
    vShape = {
        x: width/2-150 ,
        y: height/2 ,
        w: 200,
        sound: vine[randomV],
        display: function() {
            fill(79, 176, 137);
            ellipse(this.x, this.y, this.w);
            fill("White");
            textSize(30);
            text("Vine",this.x-32, this.y);
        },
        clicked: function() {
            var d = dist(this.x, this.y, mouseX, mouseY); 
            if (d < this.w/2) {  
                this.sound.play();
            }
        }
    }
    
}
function draw() {
    background(51);
    ytShape.display();
    vShape.display();
    
    image(img,240, height/2+210, img.width/4, img.height/4);

    
    fill("white");
    rectMode(CENTER);
    rect(width/2, height/2-210, 550, 100);
    
    fill("black");
    textSize(52);
    text("MEME GENERATOR", width/2-250, height/2 - 200)
    
}
function mousePressed() {
    // Youtube random meme sound
    randomYt = floor(random(0, youtube.length));
    ytShape.sound = youtube[randomYt];
    ytShape.clicked();
    
    // Vine random meme sound
    randomV = floor(random(0, vine.length));
    vShape.sound = vine[randomV];
    vShape.clicked();
    
}
