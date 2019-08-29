var temblores;

function preload(){
	temblores = loadJSON ('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  print(temblores);
      for (var x = 0; x < temblores.features.length; x++)
      if(temblores.features[x].properties.place.includes("Chile"))
        createP(temblores.features[x].properties.mag);
}

function draw() {
  colorMode(HSB, 360, 100, 100); 
  for (var x = 0; x < temblores.features.length; x++) {
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

  
