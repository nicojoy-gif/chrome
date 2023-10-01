import RecordRTC from 'recordrtc';

let mediaRecorder;
let recordedChunks = [];

function handleDataAvailable(event) {
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
  }
}

function startRecording() {
  navigator.mediaDevices
    .getDisplayMedia({ video: true })
    .then((stream) => {
      mediaRecorder = new RecordRTC(stream, {
        type: 'video',
      });

      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.startRecording();
    })
    .catch(console.error);
}

function stopRecording(callback) {
  mediaRecorder.stopRecording(() => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    callback(url);
    recordedChunks = [];
  });
}

export { startRecording, stopRecording };
