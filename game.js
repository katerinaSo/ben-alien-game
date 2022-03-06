function game() {
  d = dist(cx, cy, ufox, ufoy);
  background(42, 12, 74);
  push()
  textFont('arial')
  textSize(20);
  text("🪐".repeat(health), 65, 25);
  pop()
  push()
  textFont(myfont)
  fill(110, 255, 99);
  textSize(20);
  text("Score:" + score, width - 100, 25);
  textSize(15)
  text("Time left:" + timer,width-100,50)
  pop()
  image(c, cx, cy,80,60);
  cy += 4;
  if (cy > height) {
    cy = -20;
    cx = random(20, width - 20);
    c = random(parts);
    health -= 1;
  }
  if (health == 0) {
    screen = 3;
  }
  image(ufo, ufox, ufoy, ufosize * 1.5, ufosize);
  if (keyIsDown(RIGHT_ARROW)) {
    ufox += 2;
  } else if (keyIsDown(LEFT_ARROW)) {
    ufox -= 2;
  }
  if (ufox > width) {
    ufox = 0;
  }
  if (ufox < 0) {
    ufox = width;
  }
  if (d < 55) {
    cx = random(20, width - 20);
    cy = -20;
    c=random(parts)
    score += 1;
  }
  if(frameCount%60==0){
    timer-=1
  }
  if(timer<1){
    screen=3
  }
}
