var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor = "yellow";
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  
  
}

function draw() {
  background(0);  
  
  if(speed>300&&weight>45){
    bullet.width = 40;
    bullet.height = 15;
  }
  if(speed>250&&weight>35){
    bullet.width = 35;
    bullet.height = 10;
  }
  if(weight>50){
    bullet.width = 50;
    bullet.height = 20;
  }
  if(weight>30&&weight<35){
    bullet.width = 20;
    bullet.height = 5;
  }
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "red";

    }
    if(damage<10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided(ob1,ob2){
  bulletRightEdge = ob1.x+ob1.width;
  wallLeftEdge = ob2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}