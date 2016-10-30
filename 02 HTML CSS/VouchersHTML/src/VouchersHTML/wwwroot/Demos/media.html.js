window.onload = startBoth;


function startBoth() {
    var audio = document.getElementById("audioSong");
    var video = document.getElementById("racingVideo");

    if (audio != null && video != null) {
        audio.play();
        video.play();
    }
}