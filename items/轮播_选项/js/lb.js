var prev =  document.getElementById("prev");
var next = document.getElementById("next");

var slider = document.getElementsByClassName('slider');
var imgs = slider[0].getElementsByTagName('img');

var i=0;
var j=0;

prev.onclick = function(){
//	alert("511");
	i--;
	if(i<0){
		i=imgs.length-1;
	}
	for(j=0;j<imgs.length;j++){
		imgs[j].style.opacity = 0;
	}
	imgs[i].style.opacity = 1;
}
next.onclick = function(){
//	alert("511");
	i++;
	if(i>imgs.length-1){
		i=0;
	}
	for(j=0;j<imgs.length;j++){
		imgs[j].style.opacity = 0;
	}
	imgs[i].style.opacity = 1;
}

