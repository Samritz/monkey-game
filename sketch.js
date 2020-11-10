
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, Food;
var     ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 score = 0;
}



function setup() {
 createCanvas(600,600)
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  obstacleGroup=createGroup();
  FoodGroup=createGroup();
 
  


}
function draw() {
background("white");
  if(keyDown("space")){
    monkey.velocityY=-10;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    spawnObstacles();
  drawSprites();
  food();

stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,550,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);


if(obstacleGroup.isTouching(monkey)){
  monkey.velocityX = 0;
  obstacleGroup.velocityX = 0;
  FoodGroup.velocity = 0;
  
  
}


}
    function spawnObstacles() {
  if(frameCount % 300=== 0){
    obstacle = createSprite(600,330,10,40);
    obstacle.addImage(obstaceImage);
    
      obstacle.scale = 0.1;
    obstacle.lifetime = 300;
obstacle.velocityX = -(6 + score/100);
    obstacleGroup.add(obstacle);
    
    
    
    
  
  }  
  

    }

function food() {
  
  if(frameCount % 80===0){
 Food = createSprite(600,200,40,10);
    Food.y = Math.round(random(120,200));
  Food.addImage(bananaImage);
       Food.lifetime = 200;
    Food.velocityX = -3;
  FoodGroup.add(Food);
  Food.scale = 0.1;
  
  
  
  }
  
  
  
}


    
