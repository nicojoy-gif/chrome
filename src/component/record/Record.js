import React from 'react'
import cam from '../../Assets/AdobeStock_3624976.png'
import { RecordRTCPromisesHandler } from 'recordrtc';
function Record() {
  const startRecording = async () => {
    const mediaDevices = navigator.mediaDevices
    const stream = await mediaDevices.getUserMedia({video: true, audio: true});
    const recorder = new RecordRTCPromisesHandler(stream, {
    type: 'video'
});
await recorder.startRecording();
  }
    return (
    <div>
        <section className='bg-blue-800'>
            <div className='flex text-white font-bold'>
                <h1>Record video</h1>
                <div>
                    <img src={cam} />
                </div>
            </div>
            </section>
    </div>
  )
}

export default Record