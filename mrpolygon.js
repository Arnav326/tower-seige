class mrpolygon extends baseClass
{
   constructor(x,y,w,h)
   {
     super(x,y,w,h);
     this.image = loadImage("polygon.png")
     //Matter.Body.setStatic(this.body, true);
   }
   display(){
       super.display();
       imageMode(CENTER);
       push();
         translate(this.body.position.x, this.body.position.y);
         rotate(this.body.angle);
         image(this.image, 0, 0,this.w, this.h);
         pop();
   }
}