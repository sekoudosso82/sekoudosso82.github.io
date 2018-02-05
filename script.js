// Two methods for timers - setTimeout and SetInterval (single / repeating)

// settimeout is in milliseconds

var presentationImage = document.getElementById("test");
var presentationArray = ["images/presentation1.jpg","images/presentation2.jpg","images/presentation3.jpg","images/presentation4.jpg","images/presentation5.jpg","images/presentation6.jpg","images/presentation7.jpg","images/presentation8.jpg","images/presentation9.jpg"];
var presentationIndex = 0;

function changeImage() {
	presentationImage.setAttribute("src",presentationArray[presentationIndex]);
	presentationIndex++ ;
	if (presentationIndex >= presentationArray.length) {
		presentationIndex = 0;
	}
}

// setInterval is also in milliseconds
setInterval(changeImage,5000);

// fonction to change activities background images
var barqueImage = document.getElementById("barque");
var barqueArray = ["images/barque1.jpg","images/barque2.jpg","images/barque3.jpg","images/barque4.jpg","images/barque5.jpg","images/barque6.jpg","images/barque7.jpg"];
var barqueIndex = 0;

function changeActivitiesImage() {
	barqueImage.setAttribute("src", barqueArray[barqueIndex]);
	barqueIndex++ ;
	if (barqueIndex >= barqueArray.length) {
		barqueIndex = 0;
	}
}

// setInterval is also in milliseconds
setInterval(changeActivitiesImage,1000);

// fonction to change news background images
var pompeImage = document.getElementById("pompe");
var pompeArray = ["images/pompe1.jpg","images/pompe2.jpg","images/pompe3.jpg","images/pompe4.jpg","images/pompe5.jpg","images/pompe6.jpg","images/pompe8.jpg","images/pompe9.jpg","images/pompe10.jpg",];
var pompeIndex = 0;

function changePompeImage() {
	pompeImage.setAttribute("src", pompeArray[pompeIndex]);
	pompeIndex++ ;
	if (pompeIndex >= pompeArray.length) {
		pompeIndex = 0;
	}
}

// setInterval is also in milliseconds
setInterval(changePompeImage,1000);

var nouvelAnImage = document.getElementById("nouvelAn");
var nouvelAnArray = ["images/nouvelAn1.jpg","images/nouvelAn2.jpg","images/nouvelAn3.jpg","images/nouvelAn4.jpg"];
var nouvelAnIndex = 0;

function changenouvelAnImage() {
	nouvelAnImage.setAttribute("src",nouvelAnArray[nouvelAnIndex]);
	nouvelAnIndex++ ;
	if (nouvelAnIndex >= nouvelAnArray.length) {
		nouvelAnIndex = 0;
	}
}

// setInterval is also in milliseconds
setInterval(changenouvelAnImage,2000);

// change maternelle picture

// fonction to change activities background images
var materlleImage = document.getElementById("materlle");
var materlleArray = ["images/maternelle1.jpg","images/maternelle2.jpg","images/maternelle3.jpg","images/maternelle4.jpg"];
var materlleIndex = 0;

function changematerlleImage() {
	materlleImage.setAttribute("src", materlleArray[materlleIndex]);
	materlleIndex++ ;
	if (materlleIndex >= materlleArray.length) {
		materlleIndex = 0;
	}
}

// setInterval is also in milliseconds
setInterval(changematerlleImage,1000);

// fonction to change global background images
var globalImage = document.getElementById("global");
var globalArray = ["images/global1.jpg","images/global2.jpg","images/global3.jpg","images/global4.jpg","images/global5.jpg","images/global6.jpg","images/global7.jpg","images/global8.jpg","images/global9.jpg","images/global10.jpg","images/global11.jpg","images/global12.jpg","images/global13.jpg","images/global14.jpg","images/global15.jpg","images/global16.jpg","images/global17.jpg"];
var globalIndex = 0;

function changeglobalImage() {
	globalImage.setAttribute("src", globalArray[globalIndex]);
	globalIndex++ ;
	if (globalIndex >= globalArray.length) {
		globalIndex = 0;
	}
}

// setInterval is also in milliseconds
setInterval(changeglobalImage,1000);

