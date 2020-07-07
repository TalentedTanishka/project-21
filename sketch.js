var bullet , wall ;
var speed , width , thinkness ;


function setup() {
  createCanvas(1600 , 400);

  bullet = createSprite(20, 200, 50, 20);
  bullet.shapeColor = "white"
  wall = createSprite(1200, 200,thinkness , height/2);

  speed = random(223,321);
  width = random(30,52);
  thinkness = random(22,83);
  

}

function draw() {
  background("black"); 
  
  bullet.velocityX = speed;
  wall.shapeColor = color(80,80,80);

  
if(hasCollided(bullet,wall))
{
    bullet.velocityX = 0
    var damage = 0.5 * width * speed * speed/(thinkness * thinkness * thinkness);
}
  if(damage>10)
  {

    wall.shapeColor = color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }
  
  drawSprites();
}

function hasCollided(bullet1 , wall1)
{

   bulletRightEdge = bullet1.x + bullet.width;
   wallRightEdge = wall1.x + wall.width;

   if(bulletRightEdge > wallRightEdge)
   {
      return true;

   }

else
{
  return false;
}

   


}
