var circles = [];
//var soundFiles = [ "meme2.mp3", "meme3.mp3", "meme1.mp3" ];
//var sounds = [];

// Unloaded sound files
//var ytSounds = ["youtube/youtube0.mp3"];
//Loaded sound files
var youtube = [];
var randomYtSound;

function preload() {
//	for (var i = 0; i < soundFiles.length; i++) {
//		var s = loadSound(soundFiles[i]);
//		sounds.push(s);
//	}
    
    for (let i = 0; i < 3; i++) {
        let s = loadSound("youtube/youtube" + i + ".mp3");
        youtube.push(s);
    }
}

function setup() {
	createCanvas(720, 720);
	noStroke();
    console.log(youtube);
    randomYtSound = floor(random(0,3));
//	for (var i = 0; i < 10; i++) {
//		var c = new Circle(random(0,width), random(0,height));
//		circles.push(c);
//	}
    
    var ytCircle1 = new ytCircle(width/4, height/4, youtube[randomYtSound]);
	circles.push(ytCircle1);
    
}

function draw() {
	background(51);
	for (var i = 0; i < circles.length; i++) {
		circles[i].display();
	}
}

function mousePressed() {
    randomYtSound = floor(random(0,3));
    console.log();
	for (var i = 0; i < circles.length; i++) {
		circles[i].click();
	}
}

function ytCircle(x, y, s) {
	this.x = x;
	this.y = y;
	this.c = color( random(255), random(255), random(255));
	this.size = random(50,100);
	//this.sound = random(sounds);
	this.sound = s;
	this.display = function() {
		fill(this.c);
		ellipse(this.x, this.y, this.size);
	}
	this.click = function() {
		var d = dist(mouseX, mouseY, this.x, this.y);
		if ( d < this.size) {
			this.c = color( random(255), random(255), random(255));
			for (var i = 0; i < youtube.length; i++) {
				youtube[i].stop();
			}
			this.sound.play();
		}
	}
}






