class Ball{
    constructor(x,y,radius){
        var options={
        restitution:0.5,
        friction:1,
        density:0.04,
    
        }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius
    World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate();
        fill("green");
        ellipseMode(CENTER);
         ellipse (0,0,this.radius,this.radius);
         
         pop();


    }
    }