const letras = document.querySelectorAll(".contenedor2  a");
const parrafos = document.querySelectorAll("h1");
const lapices = document.querySelectorAll(".lapices");
const abrir = document.querySelector(".mas");
const cerrar =document.querySelector(".menos");
const menu = document.querySelector("nav");
const boton = document.querySelector(".mas");
const luna = document.querySelector(".luna");
const cabecera =document.querySelector("header");
const contenedor =document.querySelector(".contenedor2")
const body =document.querySelector("body")


let eventos = ["mouseenter", "mouseleave"];

//Creamos la situacion para que al pasar el raton por encima de cada letra coloreada// 
//se activen las imagenes//

letras.forEach(function(letra){

	letra.addEventListener("mouseover",function(){

	lapices.forEach(function(lapiz){

	lapiz.classList.add("activo");
	

		})

	});


});

//Creamos el menu desplegable para que al pulsar se abra y se cierre//

abrir.addEventListener("click", function(){

	menu.classList.add("desplegado");
	});

cerrar.addEventListener("click", function(){
	menu.classList.remove("desplegado");

	});


//creamos situacion para que al poner el raton encima del boton mas aparezca sombreado// 
//y al quitarlo desaparezca//
eventos.forEach(function(evento){

	boton.addEventListener(evento,function(){

		boton.classList.toggle("encendido") 

	});
});

	

//Creamos situacion para que al pulsar en la luna el header y //
//el contenedor2 alternen de color de negro a blanco//
luna.addEventListener("click",function(){
	cabecera.classList.toggle("luz");
	contenedor.classList.toggle("dalmata");
	
});

//Creamos situacion para que al pulsar encima de la palabra pencils// 
//el body cambie de color, pero al quitarlo desaparezca//
parrafos.forEach(function(parrafo){

	parrafo.addEventListener("click",function(){

	body.style.backgroundColor = "#03191E";

	});

	parrafo.addEventListener("mouseleave",function(){

	body.style.backgroundColor = "#000000";

	});

});

