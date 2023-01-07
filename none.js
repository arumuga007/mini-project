var menu = document.querySelector("ul");
var animefirst= document.querySelector(".first");
var animesecond = document.querySelector(".second");
var animethird = document.querySelector(".third");
var slider = document.querySelector(".slider");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
const images = [ "12.jpeg", "15.jpeg", "13.jpeg", "14.jpeg"
];
var login_name = prompt("Enter your name?","arumuga");
var num = 0;
setInterval(mynext, 3000);
function mynext() {
	console.log("next called");
	num ++;
	if(num >= images.length)
		num = 0;
	slider.src = images[num];
}
function myprev() {
	console.log("prev called");
	num --;
	if(num < 0)
		num = images.length - 1;
	slider.src = images[num];
}
function myfunction()
{
	console.log("working");
	animefirst.classList.toggle("changefirst");
	animesecond.classList.toggle("changesecond");
	animethird.classList.toggle("changethird");
	menu.classList.toggle("show");
}
