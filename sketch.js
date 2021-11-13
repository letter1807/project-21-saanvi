const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var ball;
//var top_wall;

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(width/2,390,width,20);
  right = new Ground(730,350,20,100);
  left = new Ground(500,350, 20, 100);

  var ball_options = {
    isStatic:false,
    restitution: 1.5,
    friction:0,
    density:1.2
  }
  ball= Bodies.circle(450,100,20,ball_options);
  World.add(world,ball)
  //top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  //top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

}

//function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5});
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    vForce()
  }
}