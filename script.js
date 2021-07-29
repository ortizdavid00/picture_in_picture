"use strict";

const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt User to Select Media -> Padd to Video Element -> Play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Errors
    console.log("Whoops, error here:");
  }
}

button.addEventListener("click", async () => {
  // Disable Button on Click
  button.disabled = true;

  //   Start Picture in Picture
  await videoElement.requestPictureInPicture();

  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
