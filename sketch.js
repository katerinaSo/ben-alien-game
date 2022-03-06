
let screen,
  bx,
  by,
  cx,
  cy,
  health,
  score,
  parts=[],
  c,
  d,
  ufo,
  ufox,
  ufoy,
  ufosize,
  alien_cool,
  myfont,
  thumbs_up_alien;
let timer=61

function preload() {
  ufo = loadImage("ufo.gif");
  for(let i=0; i<3;i++){
    parts.push(loadImage("alien"+i+".png"))
    
  }
  alien_cool=loadImage("alien_cool.gif")
  myfont=loadFont("PressStart2P-Regular.ttf")
  thumbs_up_alien=loadImage("thumbsupalien.png")
}
function setup() {
  createCanvas(500, 600);
  screen = 1;
  
 
  c = random(parts);
  cx = random(20, width - 20);
  cy = 10;
  health = 5;
  imageMode(CENTER);
  textAlign(CENTER)
  ufosize = 70;
  ufox = random(20, width - 20);
  ufoy = height - 40;
  score=0
}

function draw() {
  console.log(frameCount)

  background(220);
   
  if (screen == 1) {
    intro();
  }
  if (screen == 2) {
    game();
  }
  if (screen == 3) {
    end();
  }
}

function mousePressed() {
  if (screen == 1) {
    cx = random(20, width - 20);
    cy = -20;
    c=random(parts)
    screen = 2;
  }

  if (screen == 3) {
    screen = 1;
  }
}
