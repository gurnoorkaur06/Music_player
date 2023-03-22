var flag = 0;
var audio = document.getElementById('disc');
function f(){
    audio.src = "BlindingLights.mp3";
    //audio =  new Audio("BlindingLights.mp3");
    set_song_st();
    set_song_et();
    audio.play();
    flag=1;
    change_img_desc();
    return true;
}
function change_img_desc(){
    document.getElementById('songg')
        .src="media/songs/Weeknd.jpg";
        document.getElementById('songg2')
        .innerHTML="Blinding Lights";
}
function f_play_pause(){
    if(flag==0){
        audio.play();
        flag=1;
        document.getElementById("pp").classList.remove("fa-play-circle");
        document.getElementById("pp").classList.add("fa-pause-circle");
        return true;
    }else{
        audio.pause();
        flag = 0;
        document.getElementById("pp").classList.remove("fa-pause-circle");
        document.getElementById("pp").classList.add("fa-play-circle");
        return true;
    }
}

function set_song_st() {
    document.getElementById('st').innerHTML = "0:00";
}

function set_song_et(){
    dur = audio.duration;
    var mins = Math.floor(dur / 60);
    mins = String(mins).padStart('2', 0);
    var sec = Math.floor(dur - (parseInt(mins) * 60));
    sec = String(sec).padStart('2', 0);
    document.getElementById('et').textContent = mins+":"+sec;
}  



function f2(){
    audio = new Audio("willow.mp3");
    set_song_st();
    set_song_et();
    audio.play();
    flag=1;
    change_img_desc2();
    return true;
}
function change_img_desc2(){
    document.getElementById('songg')
        .src="media/songs/willow.jpeg";
        document.getElementById('songg2')
        .innerHTML="Willow";
}



function updateProgress() {
    const progress = document.getElementById('progress');
    alert(audio.currentTime);
    progress.style.width = (audio.currentTime / 345) * 100 + '%';
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
}

