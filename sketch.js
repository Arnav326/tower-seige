const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ground;
function setup(){
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(400, 500, 200, 10);
    ground2 = new Ground(800, 300, 175, 10);
    block1 = new Box(330, 475, 30, 40);
    block2 = new Box(360, 475, 30, 40);
    block3 = new Box(390,475,30, 40);
    block4 = new Box(420, 475, 30, 40);
    block5 = new Box(450, 475, 30, 40);
    //oof
    block6 = new Box(360, 430, 30, 40);
    block7 = new Box(390, 430, 30, 40);
    block8 = new Box(420, 430, 30, 40);
    //double oof
    block9 = new Box(390, 385, 30, 40);
    //new set
    block10 = new Box(730, 235, 30, 40);
    block11 = new Box(760, 235, 30, 40);
    block12 = new Box(790,235,30, 40);
    block13 = new Box(820, 235, 30, 40);
    block14 = new Box(850, 235, 30, 40);
    //oof
    block15 = new Box(760, 195, 30, 40);
    block16 = new Box(790, 195, 30, 40);
    block17 = new Box(820, 195, 30, 40);
    //double oof
    block18 = new Box(790, 155, 30, 40);
    polygon1 = new mrpolygon(200, 300, 75, 75);
    chain1 = new Chain(polygon1.body,{x:200, y:300});

}
function draw(){
    background(126);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("green")
    block6.display();
    block7.display();
    block8.display();
    fill("white")
    block9.display();
    fill("blue");
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    fill("green")
    block15.display();
    block16.display();
    block17.display();
    fill("white")
    block18.display();
    polygon1.display();
    chain1.display();
}
function mouseDragged()
{
   Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  chain1.killpigs();
}