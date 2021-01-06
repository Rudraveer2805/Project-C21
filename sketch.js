var bullet,wall;
var speed,weight,thikness;

function setup() {
  createCanvas(1600,1400);
speed=random(223,321);
weight=random(30,52);
thikness=random(22,83);

 bullet = createSprite(50, 200, 80, 10);
 wall = createSprite(1200,200,thikness,900);

 bullet.velocityX=speed;
 bullet.shapeColor="blue";
 wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255);
  
  if (hasCollided(bullet,wall))
   {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thikness*thikness*thikness)
    if (damage>10) {
      wall.shapeColor="green";
    }
    if (damage<10) {
      wall.shapeColor="red";
      
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge) {
  return true;
} else {
  return false
}
}