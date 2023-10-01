import React, { useState } from 'react';
import RecordRTC from 'recordrtc';

function Popup() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordRTC, setRecordRTC] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState(''); // State for feedback message

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const recorder = new RecordRTC(stream, {
        type: 'video',
        mimeType: 'video/webm', // Adjust this according to your requirements
      });
      recorder.startRecording();
      setRecordRTC(recorder);
      setIsRecording(true);
      setFeedbackMessage('Recording...'); // Display a recording feedback message
    } catch (error) {
      console.error('Error starting recording:', error);
      setFeedbackMessage('Error starting recording'); // Display an error message
    }
  };

  const stopRecording = () => {
    if (recordRTC) {
      recordRTC.stopRecording(() => {
        const blob = recordRTC.blob;
        // You can now send the recorded content to your endpoint or perform other actions.
        console.log('Recording stopped. Blob:', blob);
        setFeedbackMessage('Recording submitted successfully'); // Display a success message
      });
      setIsRecording(false);
    }
  };

  return (
    <div className="popup-container">
      <h2>Screen Recorder Extension</h2>
      {feedbackMessage && <p>{feedbackMessage}</p>} {/* Display feedback message */}
      {isRecording ? (
        <div>
          <button onClick={stopRecording}>Stop Recording</button>
        </div>
      ) : (
        <div>
          <p>Click "Start Recording" to begin recording your screen.</p>
          <button onClick={startRecording}>Start Recording</button>
        </div>
      )}
    </div>
  );
}

export default Popup;
