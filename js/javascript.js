i = 0;
imgs = [];
imgs[0] = "img/DevilMayCry5.jpg";
imgs[1] = "img/Godofwar.jpg";
imgs[2] = "img/Reddead1.jpg";
imgs[3] = "img/Residentevil2.jpg";
imgs[4] = "img/Spiderman.jpg";
imgs[5] = "img/Assassinsc.jpg";
tempo = 4000;
function trocaImg() {
	document.getElementById("foto").src = imgs[i];
	if (i < imgs.length - 1) {
		i++;
	} else{
		i = 0;
	}
	setTimeout("trocaImg()",tempo);
}
function trocaDireita(){
	i++;
	document.getElementById("foto").src = imgs[i];
	if(i < imgs.length - 1){
		i++;
	} else{
		i = 0;
	}
}
function trocaEsquerda(){
	i--;
	document.getElementById("foto").src = imgs[i];
	if(i < imgs.length - 1){
		i--;
		if (i<0) {
			i = 0;
		}
	} else{
		i = 0;
	}
}