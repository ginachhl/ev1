function dime() {
  var nombre = document.getElementById("nombre").value;
document.getElementsByTagName("h1")[0].innerText="Mi queridx " + nombre + ", tú necesitas";
var edad = document.getElementById("edad").value;
var depende;
if (edad < 21){
	depende = "mas";
} else {
	depende = "menos";
}
document.getElementsByTagName("h2")[0].innerText = depende;
var signo = document.getElementById("signo").value;
document.getElementsByTagName("h3")[0].innerText = signo + " en la vida.";
}