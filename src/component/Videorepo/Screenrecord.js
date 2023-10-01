import React, { useState } from 'react';
import RecordRTC from 'recordrtc';
import ScreenRecordPreviewModal from './ScreenRecordPreviewModal';
import Topbar from './Topbar';

const ScreenRecording = () => {
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false);
  const [screen, setScreen] = useState(null);
  const [camera, setCamera] = useState(null);
  const [startDisable, setStartDisable] = useState(false);
  const [stopDisable, setStopDisable] = useState(true);
  const [loadModal, setLoadModal] = useState(false);
  let recorder;

  const captureCamera = (cb) => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false, // make it true for video
      })
      .then(cb);
  };

  const startScreenRecord = async () => {
    await setStopDisable(false);
    setStartDisable(true);

    captureScreen((screen) => {
      captureCamera(async (camera) => {
        screen.width = window.screen.width;
        screen.height = window.screen.height;
        screen.fullcanvas = true;
        camera.width = 320;
        camera.height = 240;
        camera.top = screen.height - camera.height;
        camera.left = screen.width - camera.width;
        setScreen(screen);
        setCamera(camera);
        recorder = RecordRTC([screen, camera], {
          type: 'video',
        });
        recorder.startRecording();
        recorder.screen = screen;
      });
    });
  };

  const captureScreen = (callback) => {
    invokeGetDisplayMedia(
      (screen) => {
        addStreamStopListener(screen, () => {});
        callback(screen);
      },
      (error) => {
        console.error(error);
        alert('Unable to capture your screen. Please check console logs.\n' + error);
        setStopDisable(true);
        setStartDisable(false);
      }
    );
  };

  const stopLocalVideo = async (screen, camera) => {
    [screen, camera].forEach(async (stream) => {
      stream.getTracks().forEach(async (track) => {
        track.stop();
      });
    });
  };

  const invokeGetDisplayMedia = (success, error) => {
    var displaymediastreamconstraints = {
      video: {
        displaySurface: 'monitor', // monitor, window, application, browser
        logicalSurface: true,
        cursor: 'always', // never, always, motion
      },
    };

    displaymediastreamconstraints = {
      video: true,
      audio: true,
    };

    if (navigator.mediaDevices.getDisplayMedia) {
      navigator.mediaDevices.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
    } else {
      navigator.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
    }
  };

  const addStreamStopListener = (stream, callback) => {
    stream.addEventListener('ended', () => {
      callback();
      callback = () => {};
    }, false);

    stream.addEventListener('inactive', () => {
      callback();
      callback = () => {};
    }, false);

    stream.getTracks().forEach((track) => {
      track.addEventListener('ended', () => {
        callback();
        callback = () => {};
      }, false);

      track.addEventListener('inactive', () => {
        callback();
        callback = () => {};
      }, false);
    });

    stream.getVideoTracks()[0].onended = () => {
      stopRecording();
    };
  };

  const stopRecording = async () => {
    await setStartDisable(true);
    recorder.stopRecording(stopRecordingCallback);
  };

  const stopRecordingCallback = async () => {
    await stopLocalVideo(screen, camera);
    let recordedVideoUrl;

    if (recorder.getBlob()) {
      setRecordedVideoUrl(URL.createObjectURL(recorder.getBlob()));
    }

    setScreen(null);
    setIsOpenVideoModal(true);
    setStartDisable(false);
    setStopDisable(true);
    setCamera(null);

    recorder.screen.stop();
    recorder.destroy();
    recorder = null;
  };

  const videoModalClose = () => {
    setIsOpenVideoModal(false);
  };

  const openModal = async () => {
    await setLoadModal(false);
  };

  window.onbeforeunload = openModal;

  return (
    <div>
      <Topbar sr={true} />
      <Container className="pt-3">
        <div className="centerCard">
          <div className="shadow">
            <Card>
              <CardBody>
                <h3 className="text-dark pb-2 textShadowHead text-center">Screen Recording</h3>
                <h5 className="text-primary my-2">Follow the below steps to do screen recording</h5>
                <p className="mt-0 mb-1 textShadowPara">* To start recording click on start recording</p>
                <p className="mt-0 mb-1 textShadowPara pr-1">* Select the screen type to start recording</p>
                <p className="mt-0 mb-1 textShadowPara pl-1">* Click on share button to confirm recording</p>
                <p className="pb-3 mt-0 mb-1 textShadowPara">* To stop recording click on stop recording</p>
                <Col sm={12} className="text-center">
                  <button  outline onClick={startScreenRecord} disabled={startDisable}>
                    Start Recording
                  </button>
                  <button  onClick={stopRecording} disabled={stopDisable}>
                    Stop Recording
                  </button>
                  {startDisable && <h3 className="text-success pt-2">Recording..</h3>}
                  {startDisable && <h3 className="text-warning pt-2">Please don't refresh the page.</h3>}
                </Col>
              </CardBody>
            </Card>
          </div>
        </div>
        <ScreenRecordPreviewModal
          isOpenVideoModal={isOpenVideoModal}
          videoModalClose={videoModalClose}
          recordedVideoUrl={recordedVideoUrl}
          downloadScreenRecordVideo={downloadScreenRecordVideo}
          recorder={recordPreview}
        />
      </Container>
    </div>
  );
};

export default ScreenRecording;
