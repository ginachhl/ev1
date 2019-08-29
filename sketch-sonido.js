var mic;
function setup(){
    createCanvas(windowWidth, windowHeight);
      colorMode(HSB, 360, 100, 100); 
  mic = new p5.AudioIn()
  mic.start();
}
function draw(){
  micLevel = mic.getLevel();
  noStroke();
      var co = micLevel*2000;
    var a = constrain(micLevel*3000, 0, 360);
    var b = constrain(micLevel*2000, 0, 100);
    var c = constrain(micLevel*1000, 50, 100);
  square(random(micLevel*5000,0,width), random(0,height), random(0,co));
    fill(a, b, c);
}
