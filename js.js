


function deplacer(a, b){
	document.getElementById('ball').style.position = 'absolute';
	document.getElementById('ball').style.left = a+"px";
	document.getElementById('ball').style.top = b+"px";
}

function stop(){
	document.getElementById('ball').style.position = 'absolute';
	document.getElementById('ball').style.left = 230+"px";
	document.getElementById('ball').style.top = 368+"px";
}
function cpt(){
	var cptElt = document.getElementById('cpt');
	var cpt = Number(cptElt.textContent);
	cptElt.textContent = cpt - 1;
	alert(cptElt.textContent);
	setInterval(diminuerCpt, 1000);
}


