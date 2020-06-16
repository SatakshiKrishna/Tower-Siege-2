class Block{
  constructor(x,y,width,height){
      var options={
          'isStatic':false,
          'friction':0.3,
          'restitution':0.8,
          'density':1.0
      }
      this.Visibility = 255;
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed <3){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
  }else{
    World.remove(world, this.body);
    push();
    this.visibility = this.visibility -5;
    pop();
    
  }  
 }
  }