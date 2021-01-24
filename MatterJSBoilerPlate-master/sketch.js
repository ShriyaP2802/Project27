
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(480,600,20);
	bob2 = new Bob(440,600,20);
	bob3 = new Bob(400,600,20);
	bob4 = new Bob(360,600,20);
	bob5 = new Bob(320,600,20);
	roof = new Roof(400,20,800,20);
	rope1 = new Rope(bob1.body,roof.body,100,0);
	rope2 = new Rope(bob2.body,roof.body,60,0);
	rope3 = new Rope(bob3.body,roof.body,30,0);
	rope4 = new Rope(bob4.body,roof.body,-10,0);
	rope5 = new Rope(bob5.body,roof.body,-40,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:-85,y:25});
	}
}



