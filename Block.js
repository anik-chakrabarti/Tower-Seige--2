class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.2,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }
      display(){

        var angle = this.body.angle;
        var a =  255 ;
        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(200,250,50);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
      }

      else{
        a-=0.005 ;
        World.remove(world,this.body);
      }

      }
}