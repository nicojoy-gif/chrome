chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "startRecording") {
      // Start recording logic here
      // Use chrome.desktopCapture to capture the screen

      let mediaStream = null;
let mediaRecorder = null;
let chunks = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "startRecording") {
    const constraints = {
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
        },
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        mediaStream = stream;
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };
        mediaRecorder.start();
        document.getElementById("stopRecording").disabled = false;
        document.getElementById("startRecording").disabled = true;
      })
      .catch((error) => {
        console.error("Error accessing screen:", error);
      });
  }
});

    }
  });
  