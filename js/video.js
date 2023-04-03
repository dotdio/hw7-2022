var video = document.getElementById("player1");

window.addEventListener("load", function() {
    console.log("Good job opening the window");
});

function setVolume(vol) {
    document.getElementById("volume").innerHTML = `${vol}%`;
}

function onPlay() {
    console.log("Play Video");
    video.play();
    setVolume(video.volume * 100);
}
document.querySelector("#play").addEventListener("click", onPlay);

function onPause() {
    console.log("Pause Video");
    video.pause();
}
document.querySelector("#pause").addEventListener("click", onPause);

function onSlower() {
    console.log("Slow down video");
    video.playbackRate *= 0.9;
    console.log(`Speed is ${video.playbackRate}`);
}
document.querySelector("#slower").addEventListener("click", onSlower);

function onFaster() {
    console.log("Speed up video");
    video.playbackRate += video.playbackRate * (1 / 9);
    console.log(`Speed is ${video.playbackRate}`);
}
document.querySelector("#faster").addEventListener("click", onFaster);

function onSkip() {
    console.log("Skip ahead");
    video.currentTime = (video.currentTime + 10 <= video.duration) ? video.currentTime + 10 : 0;
    console.log(`Video current time is ${video.currentTime}`);
}
document.querySelector("#skip").addEventListener("click", onSkip);

function onMute() {
    video.muted = !video.muted;
    console.log(video.muted ? "Mute" : "Unmute");
    document.getElementById("mute").innerHTML = video.muted ? "Unmute" : "Mute";
}
document.querySelector("#mute").addEventListener("click", onMute);

function onSlider(event) {
    video.volume = event.target.value / 100;
    setVolume(video.volume * 100);
    console.log(`The current value is ${video.volume}`);
}
document.querySelector("#slider").addEventListener("input", onSlider);

function onVintage() {
    video.classList.add("oldSchool");
}
document.querySelector("#vintage").addEventListener("click", onVintage);

function onOrig() {
    video.classList.remove("oldSchool");
}
document.querySelector("#orig").addEventListener("click", onOrig);