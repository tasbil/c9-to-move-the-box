var box





function setup() {


  createCanvas(400,400);
box=createSprite(200,200,10,10)

}

function draw() 


{
  background(30);
  if(keyDown(UP_ARROW)){
    box.position.y=box.position.y-2
  }
  drawSprites()

}




