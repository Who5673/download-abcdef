"use strict";
/* COontrol bar elements */
const isMobile = window.matchMedia("screen and (max-width: 1023px)");
const audio = document.querySelector("#trysong");
const playBtn = window.document.querySelector("#playbtn");
const pauseBtn = window.document.querySelector("#pausebtn");
const repeatBtn = window.document.querySelector("#repeatbtn");
const norepeatBtn = window.document.querySelector("#norepeatbtn");
const rewindBtn = window.document.querySelector("#rewindbtn");
/* Status bar elements */
const dur = window.document.querySelector("#dur");
/* Dropdown resolution lists */
const losslessOpt = document.querySelector("#lossless-opt");
const flacOpt = document.querySelector("#flac-opt");
const highOpt = document.querySelector("#high-opt");
/* Event functions */
const playsong = () => {
    audio?.play();
    playBtn?.classList.add("playing");
    pauseBtn?.classList.add("playing");
};
const pausesong = () => {
    audio?.pause();
    playBtn?.classList.remove("playing");
    pauseBtn?.classList.remove("playing");
};
const repeatsong = () => {
    if (audio !== null)
        audio.loop = true;
    repeatBtn?.classList.add("on");
    norepeatBtn?.classList.add("on");
};
const unrepeatsong = () => {
    if (audio !== null)
        audio.loop = false;
    repeatBtn?.classList.remove("on");
    norepeatBtn?.classList.remove("on");
};
const rewindSong = () => {
    if (audio !== null)
        audio.currentTime = 0;
};
const loadLossless = () => {
    if (audio !== null) {
        let newSong = "./static/ABCDEF.wav";
        if (audio.paused) {
            audio.src = newSong;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            audio.src = newSong;
            audio.play();
        }
    }
};
const loadFlac = () => {
    if (audio !== null) {
        let newSong = "./static/ABCDEF.flac";
        if (audio.paused) {
            audio.src = newSong;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            audio.src = newSong;
            audio.play();
        }
    }
};
const loadHigh = () => {
    if (audio !== null) {
        let newSong = "./static/ABCDEF.mp3";
        if (audio.paused) {
            audio.src = newSong;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            audio.src = newSong;
            audio.play();
        }
    }
};
const loadMedium = () => {
    if (audio !== null) {
        let newSong = "./static/ABCDEF-256kbps.mp3";
        if (audio.paused) {
            audio.src = newSong;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            audio.src = newSong;
            audio.play();
        }
    }
};
const loadLow = () => {
    if (audio !== null) {
        let newSong = "./static/ABCDEF-192kbps.mp3";
        if (audio.paused) {
            audio.src = newSong;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            audio.src = newSong;
            audio.play();
        }
    }
};
const loadDataSaver = () => {
    if (audio !== null) {
        let newSong = "./static/ABCDEF-128kbps.mp3";
        if (audio.paused) {
            audio.src = newSong;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            audio.src = newSong;
            audio.play();
        }
    }
};
if (
/* NOT A AND NOT B = NOT(A OR B)  */
!((audio === null || audio === undefined) || (playBtn === null || playBtn === undefined)) &&
    (dur !== null && dur !== undefined)) {
    /* Playpause listeners */
    playBtn?.addEventListener("click", playsong);
    pauseBtn?.addEventListener("click", pausesong);
    /* Rewind listeners */
    rewindBtn?.addEventListener("click", rewindSong);
    /* audioElemnt listeners */
    audio?.addEventListener("play", () => {
        if (!isNaN(audio.duration))
            dur.textContent = `${audio?.currentTime}/${audio.duration}`;
        else {
            audio?.addEventListener("loadedmetadata", () => {
                dur.textContent = `${audio?.currentTime}/${audio.duration}`;
            });
        }
    });
    audio?.addEventListener("ended", pausesong);
    /* repetition listeners */
    repeatBtn?.addEventListener("click", repeatsong);
    norepeatBtn?.addEventListener("click", unrepeatsong);
    /* Dropdown resolution listeners */
    losslessOpt?.addEventListener("click", loadLossless);
    flacOpt?.addEventListener("click", loadFlac);
    highOpt?.addEventListener("click", loadHigh);
}
;
if (isMobile.matches) {
    let isShowed = false;
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownResolution = document.querySelector(".dropdown-resolution");
    dropdownBtn?.addEventListener("click", function () {
        if (!isShowed) {
            dropdownResolution?.classList?.add("show");
            isShowed = true;
            setTimeout(() => null, 200);
        }
        else {
            dropdownResolution?.classList?.remove("show");
            isShowed = false;
        }
    });
}
