function end() {
  background(0,0,50);
  textSize(40)
  fill(115, 255, 122)
   textFont(myfont)
  text("Game over" ,width/2, height/4)
  textSize(20)
  text("Score = "+score,250,300)
  text("Click to go Back", width/2, 550)
  image(thumbs_up_alien, 400, 300,125,100)
}