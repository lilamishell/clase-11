var barco;
var mar;
var barco2
var mar2
function preload(){
barco =loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
mar =loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 mar2 = createSprite(200,200);
 mar2.addImage(mar);
 mar2.scale=.3;
 barco2 = createSprite(200,200);
 barco2.addAnimation("bar",barco);
 barco2.scale=.1
}

function draw() {
  background("blue");
 drawSprites();
}