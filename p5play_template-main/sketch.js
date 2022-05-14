var personagem ;
function setup() {
  createCanvas(1600,900);
  personagem = createSprite(100,300,100,100);
}

function draw() 
{
  if(keyDown("w")||keyDown("up")){
     personagem.position.y -= 6;
  }
  if(keyDown("s")||keyDown("down")){
    personagem.position.y += 6;
 }
 if(keyDown("d")||keyDown("right")){
  personagem.position.x += 6;
}
if(keyDown("a")||keyDown("left")){
  personagem.position.x -= 6;
}
  background("yellow");
 drawSprites();
}




