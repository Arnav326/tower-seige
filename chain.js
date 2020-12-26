class Chain 
{
    constructor(a,b)
    {
        var chain_options = 
        {
                bodyA: a,
                pointB: b,
                stiffness: 0.05,
                lenght:8
        }
        this.pointB = b;
        this.chain =  Constraint.create(chain_options);
        World.add(world,this.chain);
    }

    display()
    {
        stroke("#301608")
        if(this.chain.bodyA)
        {
          var pointA =this.chain.bodyA.position;
          strokeWeight(8);
          line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    killpigs()
    {
       this.chain.bodyA = null;
    }
    attached(body)
    {
      this.chain.bodyA = body
    }
  }