var bg,bgimg
var aeroplane,aeroplaneimg

function preload(){
  bgimg = loadImage("assets/background.png")
  aeroplaneimg = loadImage("assets/car.png");
}
function setup() {
  createCanvas(1350,800);
  aeroplane = createSprite(100,595,30,30) 
  aeroplane.addImage(aeroplaneimg)
}
function draw() {
  background(bgimg);  
  
  //}
  if(keyDown("RIGHT_ARROW")){
    aeroplane.velocityX=+3
    aeroplane.velocityY=+0
  }
  if(keyDown("LEFT_ARROW")){
    aeroplane.velocityX=-3
    aeroplane.velocityY=+0
  }
  if(keyDown("SPACE")){
    aeroplane.velocityY=+0
    aeroplane.velocityX=+0
  }
  drawSprites();
  
}