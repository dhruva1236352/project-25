class Paper{
    constructor(x,y,width,height){
        var options={
            'restitution':0.3,
            'friction':0,
            'density':1.2,
            'isStatic':false
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
display(){
var paperpos=this.body.position
push()
translate(paperpos.x,paperpos.y)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)
pop()
}

}