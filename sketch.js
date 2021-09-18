var Box1,Box2 
function setup() 
{ 
  createCanvas(400, 400);
  Box1=new Box(100,50,50,50,2)
  Box2=new Box(300,200,40,40,-1)
} 

function draw() 


{
  background(220);
  Box1.show()
  Box1.move()


Box2.show()
Box2.move()
}

