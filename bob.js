class bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
     this.x=x
     this.y=y
     this.r=r
    
     this.paperbody=Bodies.circle(this.x,this.y,this.r/2,options)
     World.add(world,this.paperbody)



    }
    display(){
    var paperpos=this.paperbody.position
     
    push()
    translate(paperpos.x,paperpos.y)
    rectMode(CENTER)
    strokeWeight(3)
    fill(255,0,255)
    ellipse(0,0,this.r,this.r)
    pop()


    }





}