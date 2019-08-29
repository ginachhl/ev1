function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
    frameRate(12);

}

function draw() {
  colorMode(HSB, 360, 100, 100); 
  for (var x = 0; x < 1; x++) {
    var a = random(120, 240);
    var b = random(0, 100);
    var c = random(50,100);
    fill(a, b, c);
    pelota(a);
  }
}

function pelota(diametro) {
  square(random(0, width), random(0, height), diametro);
}

