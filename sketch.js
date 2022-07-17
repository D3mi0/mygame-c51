var score = 0

function preload()
{
	playerImg = loadImage("assets/player.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//creatingGroups
	bulletGroup = createGroup()
	

	//creating player
	player = createSprite(displayWidth/2-20,displayHeight-(displayHeight*0.26), 50, 50 )
	player.addImage(playerImg)
	player.scale = 0.5

	enemy = createSprite(displayWidth/2-20,displayHeight-(displayHeight*0.9), 50, 50 )
	enemy.scale = 0.5

	

  
}


function draw() {
 background(0)

 //player movement
 player.x = World.mouseX

 //player shooting
 if (keyWentDown("SPACE")){
	shoot()
 }
 if (bulletGroup.isTouching(enemy)){
	score = score+1
 }

  console.log(score)
  drawSprites();
}

function shoot(){
 bullet = createSprite(player.x, player.y-90, 20, 20)
 bullet.velocityY = -20
 bullet.shapeColor = "red"
 bulletGroup.add(bullet)



}

