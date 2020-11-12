var PLAY=1;
var END=0;
var gameState=PLAY;

var forest,forestImg;
var charmander,charmander_standing;
var squartal,squartal_standing;
var bulbasaur,bulbasaur_standing;
var CharmandersGroup,SquartalsGroup,BulbasaursGroup;
var ash,ash_running;
var pikaCoin,pikaCoinImg;
var PikasGroup;
var gameover,gameoverImg;
var score;

function preload()
{
    forestImg=loadImage("forest.jpg");
                                    charmander_standing=loadAnimation("Charmander1.png","Charmander2.png","Charmander3.png","Charmander4.png","Charmander5.png","Charmander6.png","Charmander7.png","Charmander8.png","Charmander9.png");
  
  squartal_standing=loadAnimation("Squartal1.png","Squartal2.png","Squartal3.png","Squartal4.png","Squartal5.png","Squartal6.png");
  
  bulbasaur_standing=loadAnimation("Bulbasaur1.png","Bulbasaur2.png","Bulbasaur3.png","Bulbasaur4.png","Bulbasaur5.png");
  
  ash_running=loadAnimation("Ash1.png","Ash2.png","Ash3.png","Ash4.png","Ash5.png","Ash6.png","Ash7.png","Ash8.png");
  
  pikaCoinImg=loadImage("Pikacoin.png");
  
  gameoverImg=loadImage("Game over.jpg");
  
}

function setup() 
{
        createCanvas(650,350);

        forest=createSprite(275,150);
        forest.addImage(forestImg);
        forest.scale=0.6
        forest.velocityY=0.5;
  
        ash=createSprite(325,175);
        ash.addAnimation("running",ash_running);
        ash.scale=0.5;
  
        inground1=createSprite(325,330,650,5);
        inground1.visible=false;
  
        inground2=createSprite(325,20,650,5);
        inground2.visible=false;
  
        inground3=createSprite(80,175,5,350);
        inground3.visible=false;
  
        inground4=createSprite(570,175,5,350);
        inground4.visible=false;
     
        bkground=createSprite(325,175,width,height);
        bkground.shapeColor="yellow";
        bkground.visible=false;
  
        gameover=createSprite(325,175);
        gameover.addImage(gameoverImg);
        gameover.visible=false;
  
        score=0;
  
        CharmandersGroup=createGroup();
        SquartalsGroup=createGroup();
        BulbasaursGroup=createGroup();
        PikasGroup=createGroup();
        ArceusGroup=createGroup();
        LegendsGroup=createGroup();
}

function draw() 
{
        if(gameState===PLAY)
        {
                if (forest.y > 220)
                {
                      forest.y = 130
                }
  
                if(keyWentDown("up")&&ash.y>100)
                {
                      ash.velocityY=-3;
                }

                if(keyWentDown("down"))
                {
                      ash.velocityY=3;
                }

                if(keyWentDown("left"))
                {
                      ash.velocityX=-3;
                }

                if(keyWentDown("right"))
                {
                      ash.velocityX=3;
                }

                if(keyWentUp("up"))
                {
                      ash.velocityY=0;
                }

                if(keyWentUp("down"))
                {
                      ash.velocityY=0;
                }

                if(keyWentUp("left"))
                {
                      ash.velocityX=0;
                }

                if(keyWentUp("right"))
                {
                      ash.velocityX=0;
                }

                if(PikasGroup.isTouching(ash))
                {
                      PikasGroup.destroyEach();
                      score=score+2;
                }
          
                if(CharmandersGroup.isTouching(ash))
                { 
                      
                  
                      text()
                }
          
        }
  
        if(CharmandersGroup.isTouching(ash)||(SquartalsGroup.isTouching(ash))||(BulbasaursGroup.isTouching(ash)))
        {
                gameState=END;
        }
  
        else if(gameState===END)
        { 
                bkground.visible=true;
                  
                gameover.visible=true;
          
                fill("red");        
                text("Game Over Please Refresh To Play Again",100,300);
        }
        
  
        console.log(World.mouseX);
  
        ash.collide(inground1);
        ash.collide(inground2);
        ash.collide(inground3);
        ash.collide(inground4);
        
        Charmander();
        Squartal();
        Bulbasaur();
        PikaCoin();
        drawSprites();
  
        fill("cyan")
        textSize(20);
        stroke(255);
        text("Score : "+score,500,70);
  
        fill("yellow");
        textSize(12);
        stroke("yellow");
        text("ESCAPE FROM THE POKEMONS TO SURVIVE AND COLLECT THE COINS TO EARN SCORE",65,280);
}

function Charmander()
{
        if(frameCount%200===0)
        {
              charmander=createSprite(325,-20);
              charmander.addAnimation("moving",charmander_standing);
              charmander.scale=0.4;
              charmander.velocityY=3;
              charmander.x=Math.round(random(200,350));
          
              CharmandersGroup.add(charmander);
        }
        
}

function Squartal()
{
        if(frameCount%200===0)
        {
              squartal=createSprite(100,-220);
              squartal.addAnimation("moving",squartal_standing);
              squartal.scale=0.38;
              squartal.velocityY=3;
              squartal.x=Math.round(random(75,200));
          
              SquartalsGroup.add(squartal);
        }
        
}

function Bulbasaur()
{
        if(frameCount%200===0)
        {
              bulbasaur=createSprite(500,-420);
              bulbasaur.addAnimation("moving",bulbasaur_standing);
              bulbasaur.scale=0.4;
              bulbasaur.velocityY=3;
              bulbasaur.x=Math.round(random(350,525));
          
              BulbasaursGroup.add(bulbasaur);
        }
}

function PikaCoin()
{
        if(frameCount%200===0)
        {
              pikaCoin=createSprite(150,-70);
              pikaCoin.addImage(pikaCoinImg);
              pikaCoin.velocityY=3;
              pikaCoin.scale=0.3;
              pikaCoin.x=Math.round(random(170,375))
          
              PikasGroup.add(pikaCoin);
          
              pikaCoin.setCollider("circle",0,0,100)
              pikaCoin.debug=false;
        }
}