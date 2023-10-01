import React, { useState } from 'react';
import RecordRTC from 'recordrtc';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const ScreenRecordPreviewModal = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Download option for screen record
    const downloadScreenRecordVideo = () => {
        const recorderBlob = props.recorder;
        if (!recorderBlob) {
            return;
        }

        if (isSafari) {
            if (recorderBlob && recorderBlob.getDataURL) {
                recorderBlob.getDataURL((dataURL) => {
                    RecordRTC.SaveToDisk(dataURL, getFileName('mp4'));
                });
                return;
            }
        }

        if (recorderBlob) {
            const blob = recorderBlob;
            const file = new File([blob], getFileName('mp4'), {
                type: 'video/mp4',
            });
            RecordRTC.invokeSaveAsDialog(file);
        }
    };

    // Get file name
    const getFileName = (fileExtension) => {
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth();
        const date = d.getDate();
        return `ScreenRecord-${year}${month}${date}-${getRandomString()}.${fileExtension}`;
    };

    // Get random string for file name
    const getRandomString = () => {
        if (window.crypto && window.crypto.getRandomValues && navigator.userAgent.indexOf('Safari') === -1) {
            const a = window.crypto.getRandomValues(new Uint32Array(3));
            let token = '';
            for (let i = 0, l = a.length; i < l; i++) {
                token += a[i].toString(36);
            }
            return token;
        } else {
            return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
        }
    };

    return (
        <div className={`modal ${props.isOpenVideoModal ? 'block' : 'hidden'}`}>
            <div className="modal__header video__modal__header">
                <button
                    className="lnr lnr-cross video__modal__clsBtn formModalCloseButton"
                    type="button"
                    onClick={props.videoModalClose}
                />
                <span className="bold-text">Preview Screen Record</span>
            </div>
            <div className="modal__body">
                <div className="downloadButtonAlign">
                    <button className="btn-primary-outline" onClick={downloadScreenRecordVideo}>
                        Download
                    </button>
                </div>
                <video
                    id="videorecord"
                    controls
                    autoPlay={isLoaded}
                    playsInline
                    width="100%"
                    height="100%"
                    src={props.recordedVideoUrl}
                />
            </div>
        </div>
    );
};

export default ScreenRecordPreviewModal;
