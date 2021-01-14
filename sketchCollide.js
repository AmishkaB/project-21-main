//Program to make algorithm for collision sprites
var movingRect, fixedRect;

var speed,weight

function setup()
{
    createCanvas(1000,600)
    speed=random(55,90)
    weight=random(400,1500)

    thickness=random(70,160)


    movingRect=createSprite(50,200,50,5);
    fixedRect=createSprite(800,200,thickness,height/2)
    movingRect.shapeColor=fixedRect.shapeColor="red"
    

    
    movingRect.velocityX=speed;


}
function draw()
{
    background(0);
     //movingRect.x=World.mouseX;
     //movingRect.y=World.mouseY;

     console.log("Width Gap " + (movingRect.x-fixedRect.x )+ " "+(movingRect.width/2+fixedRect.width/2))
     console.log("Height Gap "+ (movingRect.y-fixedRect.y )+ " " +(movingRect.height/2+fixedRect.height/2))
     
     
     //collision algorithm
    if(Math.abs(movingRect.x-fixedRect.x)<=(movingRect.width/2+fixedRect.width/2) && (Math.abs(movingRect.y-fixedRect.y)<=(movingRect.height/2+fixedRect.height/2))){
       movingRect.velocityX=0;

       var damage=0.5*weight*speed*speed/22509
       if(damage>10)
       movingRect.shapeColor=fixedRect.shapeColor="lime"

        if(damage<10 && damge<100)
        movingRect.shapeColor=fixedRect.shapeColor="red"
        
     if(damage<10&& damge<100)

        movingRect.shapeColor=fixedRect.shapeColor="red"
    }

    
    drawSprites();
}