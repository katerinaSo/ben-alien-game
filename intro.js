function intro() {
  background(22, 4, 36);
  push()
  fill(115, 255, 122)
  textFont(myfont)
  textSize(19)
  text("Welcome to the Alien Drop!", width/2, height/4)
  
  textSize(10)
  text("How to Play; catch the alien in the UFO",width/2, 450)
  text("to save them from their planet exploding", width/2, 470)
  textSize(20)
  text("Click to Start", width/2, 550)
  image(alien_cool, width/2, height/2, 120, 160)
  pop()
health=5
  score=0
  timer=61
}