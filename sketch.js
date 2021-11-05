
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
	isStatic:false,
	restitutuion: 0.3,
	friction:0,
    density:1.2

	

	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 groundobj.display();
 groundobj = new ground(width/2,670,width,20)
 leftSide = new ground(1100,600,20,120)
 Matter.Bodies.circle(x, y, radius, [options], [maxSides]) 
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

}
}




