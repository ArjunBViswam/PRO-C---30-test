class Block{
  constructor(x, y) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density:2.3
    }
    this.image = loadImage("block.png");
    this.visibility = 225;
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.width = 30;
    this.height = 40;

    World.add(world, this.body);
    
  }
 
  display(){
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }
}