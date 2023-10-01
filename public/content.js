// content.js

// Example: Inject a button into the webpage
const recordingButton = document.createElement('button');
recordingButton.textContent = 'Start Recording';
document.body.appendChild(recordingButton);

// Example: Add a click event listener to the button
recordingButton.addEventListener('click', () => {
  // Trigger screen recording functionality here
  chrome.runtime.sendMessage({ startRecording: true });
});

// You can also listen for messages from the background script or popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.stopRecording) {
    // Stop recording or perform other actions
  }
});
