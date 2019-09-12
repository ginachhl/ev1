var datos;

function preload() {
	datos = loadJson('http://api.myjson.com/bins/1gvg1d') }

function setup() {
	createCanvas(windowWidth, windowHeight);
	console.log(datos[0]["mom"]);
}

function draw() {
	background(200);
}
