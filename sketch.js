var shooter, shooterImg;
var rock1, rock2, rock3, rock4, rock5, rock6, rockGroup;
var star;
var saturn;
var restart, gameOver;
var alien, alienInEarth;
var person;
var red, redGroup;
var earth;

function setup() {
  earth = loadImage("bg.png.jpg");
  star = loadImage("star.png.png");
  shooterImg = loadImage("shooter.png.png");
  rock1 = loadImage("arock.png.png");
  rock2 = loadImage("limestone.png.png");
  rock3 = loadImage("rock.png.png");
  rock4 = loadImage("rocker.png.png");
  rock5 = loadImage("rocky.png.png");
  rock6 = loadImage("therock.png.png");
  alien = loadImage("alien.png.png");
  saturn = loadImage("saturn.png.png");
  person = loadImage("person.png");
  alienInEarth = loadImage("alienearth.png"); 
}

function draw() {
  background(earth);
  red = createSprite(200,200,5, 20);
  red.shapeColor = "red";

  rockGroup = new Group;

  shooter = createSprite(300,200);
  shooter.addImage(shooterImg);
  shooter.scale = 0.3;
  shooter.setCollider("circle",0,0,200);
  shooter.debug = true;


  if (keyDown("LEFT_ARROW")){
    shooter.velocityX -= 4;
  }
  if (keyDown("RIGHT_ARROW")){
    shooter.velocityX += 4;
  }


  if (redGroup.isTouching(rockGroup)){
    rockGroup.destroyEach();
  }



  drawSprites();
}

function bullet(){
  red.x = shooter.x;
  red.y = shooter.y;
  red.velocityX = 4;
  red.lifetime = 200;
  redGroup.add(red);
  return red;
}



function rock(){
  rockGroup.add(rock3,rock1,rock2,rock4,rock5,rock6);
}