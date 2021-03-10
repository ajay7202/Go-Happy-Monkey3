var player;
var ground, invisibleGround;
var stone;
var  END;
var GameState;
var foodGroup,foodImage;
var foodGroup, dangerImage;

function preload(){
  groundImage = loadImage("jungle.jpg");
  
  player_runing=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
   dangerImage = loadImage("stone.png");
   foodImage = loadImage("banana.png");
}
  
function setup() {
  createCanvas(displaywidth-20,displayHeight-50);
  
  ground = createSprite(400,300,800,600);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2;
  ground.velocityX = -2;
  //ground.scale=2;
  
 
  // Create an invisibleGround
  invisibleGround= createSprite(400,500,800,20);
  invisibleGround.visible=false;
  
   player = createSprite(60,460,20,50);
   player.addAnimation("player",player_runing);
   player.scale=0.2;
   camera.position.x=displaywidth/2;

  
  dangerGroup=new Group();
  foodGroup=new Group();
  
  
}

function draw() {
  background(220);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
spawnenemy();
spawnenergy();
  
  if(dangerGroup.isTouching(player)){
  player.scale=0.1
  }
  if (keyDown("space")){
      player.velocityY=-8;
      }
  
  if(foodGroup.isTouching(player)){
     player.scale=0.2;
 
   
  }
  
  player.velocityY=player.velocityY+1;
  //Make the player collide with the invisibleGround
  player.collide(invisibleGround);
  drawSprites();
}

function spawnenemy() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var stone = createSprite(400,350,40,10);
    stone.y = Math.round(random(460,455));
    stone.addImage(dangerImage);
    stone.scale = 0.2;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
   stone.lifetime = 200;
    
   
    
    //add each cloud to the group
    dangerGroup.add(stone);
  }
}
function spawnenergy() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var food = createSprite(300,360,20,10);
   food.y = Math.round(random(400,390));
    food.addImage(foodImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
   food.lifetime = 200;
    
   
    
    //add each cloud to the group
    foodGroup.add(food);
  }
}


