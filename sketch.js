var canvas;
var block1,block2,block3,block4;
var ball;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    //write code to add velocityX and velocityY
    ball.velocityX=3;
    ball.velocityY=3;

    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,180,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(500,580,180,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "green";
}

function draw() {
    background(rgb(169,169,169));
    music.play();

    if(ball.x<0){
        music.stop();
        ball.velocityX=3
        
    }else if(ball.x>800){
        music.stop();
        ball.velocityX=-3;
    }

    //write code to bounce off ball from the block4
    
    //write code to bounce off ball from the block3
    else if(ball.isTouching(block3)){
    ball.shapeColor = "red";
    music.stop();
    ball.bounceOff(block3)
    }
   else if(ball.isTouching(block2)){
    //write code to stop music
    music.stop();
    ball.shapeColor = "orange";
    ball.bounceOff(block2);
    //write code to set velocityX and velocityY of ball as 0
     ball.velocityX=0;
     ball.velocityY=0;
    
}

    //write code to bounce off ball from the block1 
    else if(ball.isTouching(block1)){
        //music.play();
        ball.shapeColor = "blue";
        ball.bounceOff(block1);
       
    }
     else if(ball.y<0){
         music.stop();
         ball.velocityY=3;
     }

else if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor = "green";
       music.play();
       
    }

    drawSprites();
}
