var video = document.querySelector("#player1");

// turn off autoplay and looping
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});

// play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// update volume info
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

// pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down video
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// speed up video
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Current location " + video.currentTime);
});

// mute video
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

// change volume and update volume info
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
});

// style the video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing to vintage");
	video.classList.add("oldSchool");
});

// remove style from video element
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing to original");
	video.classList.remove("oldSchool");
});
