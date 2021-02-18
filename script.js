const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play;
async function selectMediaStream(){
    try {
        // Screen Capture api
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject =mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
        
    } catch (error) {
        console.log("error",error);
    }
}
button.addEventListener('click',async()=>{
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// onload
selectMediaStream();