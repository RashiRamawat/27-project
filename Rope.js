class Rope {
    constructor(bodyA,bodyB,OffsetX,OffsetY)
    {
        this.OffsetX=OffsetX
        this.OffsetY=OffsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.OffsetX, y:this.OffsetY},
            stiffness:0.01,
            lenght:5
        }
        this.Rope=Constraint.create(options)
        World.add(world,this.Rope)    
    }
   display(){
       var pointA=this.Rope.bodyA.position
       var pointB=this.Rope.bodyB.position
      strokeWeight(4)
       line(pointA.x,pointA.y,pointB.x,pointB.y)

   }



}