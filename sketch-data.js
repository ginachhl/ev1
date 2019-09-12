var datos;

function preload() {
	datos = loadTable('https://raw.githubusercontent.com/ginachhl/ev1/gh-pages/datos.csv', 'csv', 'header') }

function setup() {
	createCanvas(windowWidth, windowHeight);
	console.log(datos);
	console.log(datos.get(1,0));
}

function draw() {
	background(200);
}
