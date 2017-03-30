function handleClick(idBoton) {
  alert("Este es el boton: " + idBoton);

}
/*
var boton= document.getElementById("Boton1");
boton.addEventListener("click", handleClick,false);
*/

function pulsarBoton(valor){
var x = document.getElementsByTagName("button");
var i;
for (i = 0; i < x.length; i++) {
		if (x[i].getAttribute("id")==valor) {
			  x[i].addEventListener("click", handleClick(x[i].getAttribute("id")),false);
		}

}
}
