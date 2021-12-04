var girl, girl_running, backgroundImg
var ground, invisibleGround
function preload(){
    girl_running = loadAnimation("assets/girl_running1.png", "assets/girl_running2.png", "assets/girl_running3.png", "assets/girl_running4.png", "assets/girl_running5.png", "assets/girl_running6.png", "assets/girl_running7.png");
    backgroundImg = loadImage("assets/background.jpeg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    invisibleGround = createSprite(width/2, height-10,width, 25);
    invisibleGround.shapeColor = "#F5C279";

    ground = createSprite(windowWidth/2+1000, windowHeight/2-10, windowWidth+1200, windowHeight+2800);
    ground.addImage("ground", backgroundImg);
    ground.x = width/2
    ground.velocityX = -6;

    girl = createSprite(50, height-60, 20, 50);
    girl.addAnimation('running_girl', girl_running)

}

function draw(){
    background(backgroundImg);
    if (ground.x < 0) {
        ground.x = ground.width/2;
    }
    drawSprites()
}