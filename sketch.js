// custom p5js

function setup(){
	createCanvas(windowWidth,windowHeight);
}	

function draw(){
	fill(0,200,0);
	textSize(36);
	text("$",mouseX,mouseY);

}	

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
