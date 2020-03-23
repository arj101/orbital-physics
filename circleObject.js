class CircleObject {


  constructor(x, y, d,m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.airFriction = createVector(0.0, 0.0);
    this.floorFriction = createVector(0.0, 0.0);
    this.r = d / 2;
    this.d = d;
  }

  setInitialVelocity(velX, velY) {
    this.vel.x = velX;
    this.vel.y = velY;

  }
  setAirFriction(aX, aY) {
    this.airFriction.x = aX;
    this.airFriction.y = aY
  }
  setFloorFriction(ffX, ffY) {
    this.floorFriction.x = ffX;
    this.floorFriction.y = ffY;
  }
  setGravity_inDirection(gX, gY) {
    this.gravity = createVector(gX, gY);
  }
  getPos() {
    return this.pos;
  }
  getRadius(){
    return this.r;
  }

  setGravity_fromObjectPosition(gObjPosX,gObjPosY,gObjMass,gScale){

    this.gravObj = createVector(gObjPosX,gObjPosY);
    this.dir = createVector(0,0);
    this.dir = p5.Vector.sub(this.gravObj,this.pos);
    this.distance = p5.Vector.mag(this.dir);

    this.G = 6.67408 * pow(10,-11) * gScale;
    this.gravitationalAcc =  this.G *((this.mass * gObjMass)/sq(this.distance));
    this.dir.setMag(this.gravitationalAcc);

    this.vel.add(this.dir);

  }


  isOutofScreen(){
    return (this.getPos().x < 0) || (this.getPos().x > width) || (this.getPos().y < 0) || (this.getPos().y > height);
}



  setColor(red, green, blue, alpha) {
    this.red = red;
    if (!isNaN(green)) {
      this.green = green;
      this.blue = blue;

      if (alpha) {
        this.alpha = alpha;
      } else {
        this.alpha = 255;
      }
    } else {

      this.green = this.red;
      this.blue = this.red;

    }
  }

  show() {
    push();
    noStroke();
    fill(this.red, this.green, this.blue, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.d);
    pop();
  }


  update() {
    if (this.gravity) {
      this.acc.add(this.gravity);
    }
    this.vel.x *= abs(1 - this.airFriction.x);
    this.vel.y *= abs(1 - this.airFriction.y);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  moveTowards(accDir) {
    this.vel.add(accDir);
  }

  invertVelocity(){
    this.vel.x = -this.vel.x;
    this.vel.y = -this.vel.y;
  }



  setScreenBoundaries() {

    if (this.pos.x > width - this.r || this.pos.x < this.r) {
      this.vel.y = this.vel.y * abs(1 - this.floorFriction.y);
      this.vel.x = this.vel.x * -abs(1 - this.floorFriction.y);
    }
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
    }
    if (this.pos.x < this.r) {
      this.pos.x = this.r;

    }
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.x = this.vel.x * abs(1 - this.floorFriction.x);
      this.vel.y = this.vel.y * -abs(1 - this.floorFriction.x);

    }
    if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y = this.vel.y * -0.8;

    }



  }

}
