const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, basket,rect1,rect2,rect3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	rect1 = createSprite(700,650,200,20,{isStatic:true});

	rect2 = createSprite(600,620,20,100,{isStatic:true});
	
	rect3 = createSprite(800,620,20,100,{isStatic:true});

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-20,width,20);
    ball = new Ball(50,height-30,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();

  drawSprites();
 
}

function keyPressed(){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
}