musica = "EstejaaEsperarMusicPRONTA.mp3"

let btnPlay = document.getElementById("play");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("pre");

let range = document.getElementById("range");
let imgPlay = document.getElementById("play_img");
let tocando = false;

let duration = 0;
let timeCurr = 0;

let timeMusic = document.getElementById("tempo");

let Som = new Audio();
window.onload = tocar;

function tocar(){
	Som.src = musica;
	btnPlay.addEventListener('click', function(){
		if(!tocando){
			Som.play();
			tocando = true;
			duration = Som.duration;
			range.max = duration;
			imgPlay.src = "icons/pause.png"
			console.log("tocando");
		}else{
			Som.pause();
			tocando = false;
			imgPlay.src = "icons/play-button.png"
		}
		range.addEventListener('change', function(){
			Som.currentTime = range.value;
			console.log(Som.timeCurr);
			//console.log("tempoooo");
		});
		Som.addEventListener('timeupdate', function(){
			range.value = Som.currentTime;
			//console.log(duration);
			console.log(range.value);
			//console.log(Som.timeCurr);
			timeMusic.innerHTML = (((Som.currentTime)/60)).toFixed(2);
		});
		Som.addEventListener('ended', function(){
			Som.currentTime = 0;
			Som.paused();
			tocando = false;
			range.value = 0;
			imgPlay.src = "icons/play-button.png"
		});
	});

	btnNext.addEventListener('click', function(){
		Som.currentTime++;
	});

	btnPrev.addEventListener('click', function(){
		Som.currentTime--;
	});
}


