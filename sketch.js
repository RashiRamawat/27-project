const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(350,80,500,40)
	bobObject1= new Bob(190,280,40)
	bobObject2= new Bob(270,280,40)
	bobObject3= new Bob(350,280,40)
	bobObject4= new Bob(430,280,40)
	bobObject5= new Bob(510,280,40)
   // rope1=new Rope(bobObject1.body,roof.body,-40*2,0)
   // rope2=new Rope(bobObject1.body,roof.body,-40*2,0)
   // rope3=new Rope(bobObject1.body,roof.body,-40*2,0)
   // rope4=new Rope(bobObject1.body,roof.body,-40*2,0)
   // rope5=new Rope(bobObject1.body,roof.body,-40*2,0)

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
 // rope1.display();
 // rope2.display();
 // rope3.display();
 // rope4.display();
 // rope5.display();
}



