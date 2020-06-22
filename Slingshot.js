class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.slingImage1 = loadImage("./sprites/sling1.png")
        this.slingImage2 = loadImage("./sprites/sling2.png")
        this.slingImage3 = loadImage("./sprites/sling3.png") 
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingImage1,200,25);
        image(this.slingImage2,170,25);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(48,22,8);
            if(pointA.x<200) {
            line(pointA.x-18, pointA.y, pointB.x-22, pointB.y-37);
            line(pointA.x-15, pointA.y, pointB.x+28, pointB.y-45);
            image(this.slingImage3,pointA.x-25, pointA.y-10,15,30);
            } else {
                line(pointA.x+20, pointA.y, pointB.x-15, pointB.y-37);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y-35);
                image(this.slingImage3,pointA.x+25, pointA.y-10,15,30);
            }
        }
    }
    
}