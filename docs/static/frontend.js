"use strict";
const isMobile = window.matchMedia("screen and (max-width: 1023px)");
const audioElement = document.querySelector("#trysong");
const audio = document.querySelector("#trysound");
const playBtn = window.document.querySelector("#playbtn");
const pauseBtn = window.document.querySelector("#pausebtn");
const repeatBtn = window.document.querySelector("#repeatbtn");
const norepeatBtn = window.document.querySelector("#norepeatbtn");
const dur = window.document.querySelector("#dur");
const losslessOpt = document.querySelector("#lossless-opt");
const flacOpt = document.querySelector("#flac-opt");
const playsong = () => {
    audioElement?.play();
    playBtn?.classList.add("playing");
    pauseBtn?.classList.add("playing");
};
const pausesong = () => {
    audioElement?.pause();
    playBtn?.classList.remove("playing");
    pauseBtn?.classList.remove("playing");
};
const repeatsong = () => {
    if (audioElement !== null)
        audioElement.loop = true;
    repeatBtn?.classList.add("on");
    norepeatBtn?.classList.add("on");
};
const unrepeatsong = () => {
    if (audioElement !== null)
        audioElement.loop = false;
    repeatBtn?.classList.remove("on");
    norepeatBtn?.classList.remove("on");
};
const loadLossless = () => {
};
if (
/* NOT A AND NOT B = NOT(A OR B)  */
!((audioElement === null || audioElement === undefined) || (playBtn === null || playBtn === undefined)) &&
    (dur !== null && dur !== undefined)) {
    /* Playpause listeners */
    playBtn?.addEventListener("click", playsong);
    pauseBtn?.addEventListener("click", pausesong);
    /* audioElemnt listeners */
    audioElement?.addEventListener("play", () => {
        dur.textContent = `${audioElement?.currentTime}/${audioElement.duration}`;
    });
    audioElement?.addEventListener("ended", pausesong);
    /* repetition listeners */
    repeatBtn?.addEventListener("click", repeatsong);
    norepeatBtn?.addEventListener("click", unrepeatsong);
}
;
losslessOpt?.addEventListener("click", loadLossless);
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
