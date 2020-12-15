class Chain {
    constructor(body1,point2){
    var options={
         bodyA:body1,
         pointB:point2,
         stiffness:0.05,
         length:10
    }
        this.pointB=point2
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
        
    }
    display(){
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
     fly(){
         this.chain.bodyA=null
     }

}