
let canvas;



let b_mass;
let sun_mass;
let gravConst;
let sun;
let planets =[];
let c;
let d;
let e;
let f;
let stars_mass;
let starsNumbersetCurrent;
let stars = [];
let numberofStars;
let bgColor;
let starsliderVal;
function setup() {
  canvas = createCanvas(windowWidth/1.6,windowHeight);
  canvas.id("p5Canvas");
  dir = createVector(0, 0);
 setStars = createP();
 setOpacity = createP();

 numberofStars = createP();

 numberofStars.id("p__no-of-stars_set");
 numberofStars.position(width - 200,10);
  b_mass = 5.9722 * pow(10, 24);

  planets[0] = new CircleObject(width/2, height * 0.37916667, 13,b_mass * (height / 480));
  planets[0].setInitialVelocity(11.4,0);

  planets[1] = new CircleObject(width/2 ,height * 0.29166667,18,b_mass * (height / 480));
  planets[1].setInitialVelocity(8.5 ,0);

  planets[2]  = new CircleObject(width/2,height * 0.20833333,23,b_mass * (height / 480));
  planets[2].setInitialVelocity(7.2 ,0);

  planets[3]= new CircleObject(width/2,height  * 0.125,28 ,b_mass * (height / 480));
  planets[3].setInitialVelocity(6.4 ,0);

  planets[4] = new CircleObject(width/2 ,height * 0.041,33 ,b_mass * (height / 480));
  planets[4].setInitialVelocity(5.8, 0);

  sun = createVector(width/2, height/2);
  gravConst = 6.67408 * pow(10, -52);
  sun_mass = 1.9891 * pow(10, 30);

  

}

function drawStars(){

  stars = [];


  for(let i = 0; i < starsliderVal; i++){
    stars_mass =random(0.1,3) * pow(10,random(23,25));
    if(i <= starsliderVal/4){


  stars[i] = new CircleObject( random(width/10),random(height),random(7,15),stars_mass * (height / 480));
  stars[i].setInitialVelocity(random(-10,20),random(-5,5));

  stars[i].setGravity_fromObjectPosition(sun.x,sun.y,sun_mass,pow(10,-41));
  stars[i].setColor(random(180,360),100,100);
  }
  else if(i <= starsliderVal/2 && i > starsliderVal/4){

    stars[i] = new CircleObject( random(width*9/10,width),random(height),random(7,15),stars_mass * (height / 480));
    stars[i].setInitialVelocity(random(-20,10),random(-5,5));

    stars[i].setGravity_fromObjectPosition(sun.x,sun.y,sun_mass,pow(10,-41));
    stars[i].setColor(random(180,360),100,100);
  }
  else if(i <= starsliderVal*3/4 && i > starsliderVal/2){

    stars[i] = new CircleObject( random(width),random(height/10),random(7,15),stars_mass * (height / 480));
    stars[i].setInitialVelocity(random(-5,5),random(-20,10));

    stars[i].setGravity_fromObjectPosition(sun.x,sun.y,sun_mass,pow(10,-41));
    stars[i].setColor(random(180,360),100,100);
  }
  else if(i <= starsliderVal && i > starsliderVal* 3/4){
    stars[i] = new CircleObject( random(width),random(height*9/10,height),random(7,15),stars_mass * (height / 480));
    stars[i].setInitialVelocity(random(-5,5),random(-10,20));

    stars[i].setGravity_fromObjectPosition(sun.x,sun.y,sun_mass,pow(10,-41));
    stars[i].setColor(random(180,360),100,100);
  }
}
}

function draw() {
  colorMode(HSB,360,100,100);


  background(330,0,5,1);
   starsliderVal = document.getElementById("starSlider").value;


  numberofStars.html("Number of stars : " + stars.length);
  setStars.html(starsliderVal);
  setStars.id("setStars");

  planets[0].setColor(360,100,100);
  planets[1].setColor(300,100,100);
  planets[2].setColor(250,100,100);
  planets[3].setColor(190,100,100);
  planets[4].setColor(130,100,100);

  for(let i = 0; i < planets.length; i ++){
    planets[i].setGravity_fromObjectPosition(sun.x,sun.y,sun_mass,pow(10,-41));
    planets[i].update();
    planets[i].show();
  }


if(stars){
  for(star of stars){
    star.setGravity_fromObjectPosition(sun.x,sun.y,sun_mass,pow(10,-41));
    star.update();
    star.show();
  }
  filterStars(stars);

}



  push();
  fill(50, 100, 100);
  noStroke();
  ellipse(sun.x,sun.y,60);
  pop();


}
