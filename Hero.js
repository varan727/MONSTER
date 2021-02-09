class Hero{
    constructor(x,y,r){
         var options={
         fricitonAir:1,
         density:1,
         }
         this.x=x
         this.y=y
         this.r=r
         this.image=loadImage("images/Superhero-01.png"); 
         this.body=Bodies.rectangle(this.x,this.y,(this.r)/2,options);
         
        
         World.add(world,this.body)
    }
    display(){
        var heroPos=this.body.position;
        push();
        translate(heroPos.x,heroPos.y-100);
        rectMode(CENTER);     
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image,0,0,this.r+150,this.r);
    pop();
    }
}
