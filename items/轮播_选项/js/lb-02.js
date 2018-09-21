var box = document.querySelector('box');
var ul = document.querySelector('.box ul');
var uli = document.querySelectorAll('.box ul li')[0];
var oli = document.querySelectorAll('.box ol li');

var index = 0;
var time = setInterval(carousels,2000);
var width = uli.offsetWidth; 

function carousels(){
	index++;
	if(index > oli.length-1){
		index=0;
	}
	
	ul.style.left = -(index*width)+"px";
	but(oli,index);
}

function but(lis,con){
	for(var i = 0;i<lis.length;i++){
		lis[i].classList.remove("now");
	}
	lis[con].classList.add("now");
}

box.onmouseover = function(){
	clearInterval(time);
}
box.onmouseout = function(){
	clearInterval(time);
	time = setInterval(carousels,2000);
}
