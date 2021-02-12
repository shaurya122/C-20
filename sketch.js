var a,b;
 function setup() {
    createCanvas(800,400);
   a= createSprite(200,200,20,20);
    a.shapeColor="green";
 a.debug=true;
  b = createSprite(300,300,40,40);
   b.shapeColor="green"; 
   b.debug=true; }





function draw() {
  background(255,255,255); 
  
  b.x=World.mouseX;
   b.y=World.mouseY;
    var width1 =b.width/2 + a.width/2 ;
    var height1=b.height/2+ a.height/2;
     console.log(width1);

     if(a.x-b.x<width1&&b.x-a.x<width1 && a.y-b.y<height1 && b.y-a.y<height1){
      a.shapeColor="red";
      b.shapeColor="red";
     }
     else{
      a.shapeColor="green";
      b.shapeColor="green";
     }

  drawSprites();
}