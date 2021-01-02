class Box extends baseClass
{
   constructor(x,y,w,h)
   {
     super(x,y,w,h);
     this.image = loadImage("codesquare.png")
     this.crazy = 255;
   }
   display(){
    if(this.body.speed>5)
    {
     World.remove(world,this.body)
     push();
     tint(255,this.crazy);
     this.crazy = this.crazy - 10;
     image(this.image, this.body.position.x, this.body.position.y,30,40)
     pop();
   } else {
    super.display();
   }
 }
 score()
 {
   if(this.crazy < 255 && this.crazy >= -45)
   {
     score = score +1
   }
 }
    
}