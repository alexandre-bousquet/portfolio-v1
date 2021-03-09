window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("TOP").style.display = "block";
	} else {
		document.getElementById("TOP").style.display = "none";
	}

	// Fusion de fonctions
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
	document.getElementById("myTopnav").style.backgroundSize = scrolled + "%";
	//document.getElementById("myTopnav").style.backgroundColor = "blue";
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.addEventListener("beforeunload", function () {
	var animation = document.getElementsByClassName("corps")[0];
	animation.classList.add("animate-out");
	//document.body.classList.add("animate-out");
});

var modal01 = document.getElementById("myModal01");
var img01 = document.getElementById("myImg01");
var img02 = document.getElementById("myImg02");
var img03 = document.getElementById("myImg03");
var img04 = document.getElementById("myImg04");
var modalImg01 = document.getElementById("img01");
var modalImg02 = document.getElementById("img02");
var modalImg03 = document.getElementById("img03");
var modalImg04 = document.getElementById("img04");
var captionText = document.getElementById("caption");

img01.onclick = function() {
	modal01.style.display = "block";
	modalImg01.src = this.src;
	captionText.innerHTML = this.alt;
}

img02.onclick = function() {
	modal01.style.display = "block";
	modalImg01.src = this.src;
	captionText.innerHTML = this.alt;
}

img03.onclick = function() {
	modal01.style.display = "block";
	modalImg01.src = this.src;
	captionText.innerHTML = this.alt;
}

img04.onclick = function() {
	modal01.style.display = "block";
	modalImg01.src = this.src;
	captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
	modal01.style.display = "none";
}

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

var lc = document.getElementById("littleCard1");
var bc = document.getElementById("bigCard1");
bc.onmouseover = function() {myFuncionCardHoverON()};
bc.onmouseout = function() {myFuncionCardHoverOFF()};

function myFuncionCardHoverON() {
	bc.classList.add("bigCardAll");
}

function myFuncionCardHoverOFF() {
	bc.classList.remove("bigCardAll");
}

/*function changePage(page) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://alexandre-bousquet.github.io/HTML/" + page + ".html", true)
	xhr.send();
	console.log(xhr);
	console.log(xhr.response);
	console.log(xhr.response.toString());
	return xhr.response.toString();
}

function getBody(page) {
	let content = changePage(page);
	console.log(content);
	let x = content.indexOf("<body");
	console.log(x);
	x = content.indexOf(">", x);
	console.log(x);
	let y = content.lastIndexOf("</body>");
	console.log(y);
	return content.slice(x + 1, y);
}

function getContent(content, target) {
	target.innerHTML =  getBody(content);
}*/