var Loading,load1,load2;
var gameState=0;
var play=1;
var play1=2;
var play3=3;
var play4=4;
var Girl,Girl1,Boy,image1,image2;
var lobbyImage;
var quickMatch;
var playing;
var button2,button3,bu4,bu5;
var button;
var play5=5
var PL=6
var ME=7
var PLM,p2;
var player1,playerImage;
var player2;
var shuttle;
var bachs;
function preload(){
load1=loadImage("images/loading1.png")
load2=loadImage("images/Lobby2.png")
image1=loadImage("images/Girl.png")
image2=loadImage("images/Boy.png")
lobbyImage=loadImage("images/Lobby2.png")
PLM=loadImage("images/PLM.png")

playerImage=loadImage("images/move1.png")
bachs=loadImage("images/MatchBg.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
Loading=createButton("Start")
Loading.position(windowWidth/2,windowHeight/1.5)
  Girl=createSprite(windowWidth/3.1,windowHeight/2)
  Girl.addImage(image1)
  Girl.scale=1.3;
  
  Boy=createSprite(windowWidth/1.5,windowHeight/2)
  Boy.addImage(image2) 
  Boy.scale=1.3;
  
  quickMatch=createButton("Quick Match")
  quickMatch.position(windowWidth/1.5-12,windowHeight/2.03)
  quickMatch.size(280,75)
  
  button2=createButton("PC/Laptop")
  button2.position(windowWidth/2.3,windowHeight/1.7)
  button2.style('width', '200px');
  button2.style('height', '40px');
  button2.style('background', 'lightpink');

  button3=createButton("Mobile")
  button3.position(windowWidth/2.3,windowHeight/1.4)
  button3.style('width', '200px');
  button3.style('height', '40px');
  button3.style('background', 'lightpink');

  bu4=createButton("Start")
  bu4.position(windowWidth/2.3,windowHeight/1.3)
  bu4.style('width', '200px');
  bu4.style('height', '40px');
  bu4.style('background', 'lightpink');
  bu5=createButton("Start")
  bu5.position(windowWidth/2.3,windowHeight/1.3)
  bu5.style('width', '200px');
  bu5.style('height', '40px');
  bu5.style('background', 'lightpink');

  player1=createSprite(windowWidth/1.5,windowHeight/1.5)
  player2=createSprite(windowWidth/3.5,windowHeight/1.5)
  player1.visible=false;
  player2.visible=false;

  
  this.bu4.hide();
  this.bu5.hide();
}
function draw(){
  if(mousePressedOver(Girl)){
    gameState=2;
    this.quickMatch.show();
  }
  if(mousePressedOver(Boy)){
    gameState=2;
    this.quickMatch.show();
  }
  if(gameState==0){
    background(load1)
    this.quickMatch.hide();
    this.button2.hide();
  this.button3.hide();
    this.Loading.mousePressed(() => {
  gameState=play;
  Loading.hide();
  
});
  }
  if(gameState==1){
    background(4, 28, 57)
    this.button2.hide();
    this.button3.hide();
    this.quickMatch.hide();
    drawSprites();
}
if(gameState==2){
  
  background(lobbyImage)
  this.button2.hide();
  this.button3.hide();
  this.quickMatch.mousePressed(() => {
  
    this.quickMatch.hide();
    console.log(gameState)
    gameState=PL;
  });
  
  Girl.visible=false;
  Boy.visible=false;
  
  drawSprites();
}

//bu4=Pc/Laptop;
if(gameState==6){
  background(bachs)
  //shuttle=ellipse(100,100,200)

 //player1.visible=true
 //player2.visible=true
 //player1.addImage(playerImage)
 drawSprites();
}
//bu5=Mobile;
if(gameState==7){
  background(0) 
  ellipse(windowWidth/2,windowHeight/2,200)
  player1.visible=true
  player2.visible=true
  drawSprites();
}
}
function hide(){
  this.Loading.hide();
  this.Girl.hide();
  this.Boy.hide();
  this.quickMatch.hide();
  this.button2.hide();
  this.button3.hide();
  this.bu4.hide();
  this.bu5.hide();
}
function show(){
  this.quickMatch.show();
  this.button2.show();
  this.button3.show();
  this.bu4.show();
  this.bu5.show();
}