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
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
	document.getElementById("myTopnav").style.backgroundSize = scrolled + "%";
	//document.getElementById("myTopnav").style.backgroundColor = "blue";
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.addEventListener("beforeunload", function () {
	let animation = document.getElementsByClassName("corps")[0];
	animation.classList.add("animate-out");
	//document.body.classList.add("animate-out");
});

let modal01 = document.getElementById("myModal01");
let modalImg01 = document.getElementById("img01");
let captionText = document.getElementById("caption");

for (let i = 0; i < 4; i++) {
	document.getElementById("myImg0" + (i + 1)).onclick = function() {
		modal01.style.display = "block";
		modalImg01.src = this.src;
		captionText.innerHTML = this.alt;
	}
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
	modal01.style.display = "none";
}

function myFunction() {
	let x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

let lc = document.getElementById("littleCard1");
let bc = document.getElementById("bigCard1");
bc.onmouseover = function() {myFuncionCardHoverON()};
bc.onmouseout = function() {myFuncionCardHoverOFF()};

function myFuncionCardHoverON() {
	bc.classList.add("bigCardAll");
}

function myFuncionCardHoverOFF() {
	bc.classList.remove("bigCardAll");
}

function changePage(page) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://alexandre-bousquet.github.io/HTML/" + page + ".html", true)
	xhr.send(null);
	console.log(xhr);
	console.log(xhr.responseText);
	return xhr.responseText;
}

/*function getBody(page) {
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