import { startRecording, stopRecording } from './recordRTC';

const startButton = document.getElementById('startRecording');
const stopButton = document.getElementById('stopRecording');
const recordedVideo = document.getElementById('recordedVideo');

startButton.addEventListener('click', () => {
    alert('sjsjsk')
  startRecording();
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  stopRecording((videoUrl) => {
    recordedVideo.src = videoUrl;
    recordedVideo.style.display = 'block';
    startButton.disabled = false;
    stopButton.disabled = true;
  });
});
