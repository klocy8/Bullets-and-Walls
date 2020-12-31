var bullet,wall;
var speed, weight;
var thickness; 


function setup() {
  createCanvas(1600, 400);

	thickness = random(22,83);
	speed=random(223,321);
	weight=random(30,52);


	bullet=createSprite(50, 200, 50,50);   

	bullet.velocityX = speed;

	bullet.shapeColor = color(255);


  
  	wall = createSprite(1000,200,60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
	  bullet.velocityX=0;
	  bullet.x = bullet.x - 100;
	  bullet.x = 945;
  	var damage = (0.5 * weight * speed* speed)/(thickness*thickness*thickness);
	if(damage<=10)
	 {
	 	bullet.shapeColor=color(0,255,0);
	}
	else{
		bullet.shapeColor = color(255,0,0);
	}
  }  
  
  drawSprites();
}
