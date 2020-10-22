const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  var canvas = createCanvas(windowWidth/2,windowHeight);
  //Centering the canvas
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
 
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(200, 450, "#00b0ff");
  pendulum2 = new Pendulum(260, 450, "#e91e63");
  pendulum3 = new Pendulum(320, 450, "#ffc107");
  pendulum4 = new Pendulum(380, 450, "#e91e63");
  pendulum5 = new Pendulum(440, 450, "#00b0ff");

  sling1 = new Sling(pendulum1.body, { x: 200, y: 200 });
  sling2 = new Sling(pendulum2.body, { x: 260, y: 200 });
  sling3 = new Sling(pendulum3.body, { x: 320, y: 200 });
  sling4 = new Sling(pendulum4.body, { x: 380, y: 200 });
  sling5 = new Sling(pendulum5.body, { x: 440, y: 200 });
}

function draw() {
  background(0);  
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  fill(255);
  text(mouseX +","+mouseY,mouseX,mouseY);
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}