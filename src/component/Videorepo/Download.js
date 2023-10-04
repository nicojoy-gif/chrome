import React, { useState } from 'react';
import Footer from '../landing/Footer';
import Nav from '../landing/Nav';
import b from '../../Assets/edit.png';
import a from '../../Assets/Button (2).png';
import a1 from '../../Assets/Button (3).png';
import a2 from '../../Assets/Frame 201.png';
import a3 from '../../Assets/Frame 201 (1).png';
import a4 from '../../Assets/Frame 201 (2).png';
import a5 from '../../Assets/Frame 15.png';
import a6 from '../../Assets/close-circle.png';
import a7 from '../../Assets/success-kite 1.png';

function Download() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can use the 'email' state for your email submission logic
    console.log('Email submitted:', email);

    // Show the modal when the email is submitted
    openModal();
  };
  return (
    <div>
      <Nav />
      <section className=" py-10">
        <div className="grid mx-10 lg:grid-cols-2 grid-cols-1 h-full container pt-10 ">
          <div className="border-r-2 border-gray-200">
            <h1 className="text-herotext font-bold pb-5 text-4xl py-10">Your video is ready</h1>
            <div>
              <h3 className="font-medium text-lg text-gray-400">Name</h3>
              <div className="flex content-center items-center">
                <h3 className="font-semibold text-gray-600 text-2xl">Untitled video</h3>
                <div className="ml-1">
                  <img src={b} alt="edit icon" className="h-4 ml-3 w-4" />
                </div>
              </div>
              <form onSubmit={handleSubmit}>
              <div className="relative flex mb-5">
                
                <input
                  className="bg-gray-300 border-search border w-4/6 rounded-lg p-3 "
                  placeholder="enter email of receiver"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="absolute  right-1/3">
                  <a href="#" id="sendEmail">
                    <img src={a} alt="send button" />
                  </a>
                </div>
              </div>
</form>
              <h3 className="text-xl font-semibold text-herotext py-2 text-start">Video Url</h3>
              <div className="relative flex mb-5">
                <input
                  id="emailInput"
                  className="bg-gray-300 border-search border w-4/6 rounded-lg p-3"
                  placeholder="Video Url"
                />
                <div className="flex absolute right-1/3 justify-end items-center">
                  <a href="#" id="sendEmail">
                    <img src={a1} alt="send button" />
                  </a>
                </div>
              </div>

              <div className="my-5">
                <h3 className="font-semibold text-herotext text-lg py-2 text-start">Share your video</h3>
                <div className="flex">
                  <a href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL_HERE" target="_blank" rel="noopener noreferrer">
                    <div className="mr-2">
                      <img src={a2} alt="facebook" />
                    </div>
                  </a>
                  <a href="whatsapp://send?text=Check%20out%20this%20video:%20YOUR_URL_HERE">
                    <div className="mx-2">
                      <img src={a3} alt="whatsapp" />
                    </div>
                  </a>
                  <a href="https://twitter.com/intent/tweet?url=YOUR_URL_HERE&text=Check%20out%20this%20video" target="_blank" rel="noopener noreferrer">
                    <div className="mx-2">
                      <img src={a4} alt="twitter" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center mx-10">
            <video controls width="540" height="400" className="border border-gray-300">
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="bg-searchborder w-full h-64">
        <div className="flex items-center justify-center text-center">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-semibold text-herotext py-5">
              To ensure the availability and privacy of your video, we recommend saving it to your account.
            </h2>
            <div className="my-5 flex justify-center">
              <img src={a5} alt="save video" />
            </div>
            <h3 className="text-gray-500 font-semibold text-2xl">
              Don't have an account? <span className="text-bluetwo">Create account</span>
            </h3>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div id="myModal" className="modal fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-content bg-modal w-96 h-64 p-4 rounded-lg shadow-lg relative">
            <button className="modal-close absolute cursor-pointer top-2 right-2 p-1 text-gray-600 flex my-5 justify-end hover:text-gray-800 focus:outline-none" onClick={closeModal}>
              <img src={a6} alt="close circle" />
            </button>
            <div className="m-5">
              <div className="flex justify-center items-center my-5">
                <img src={a7} alt="success kite" />
              </div>
              <div className="my-5">
                <h3 className="font-medium text-lg text-bluetwo text-center">Your video link has been sent to {email} </h3>
              </div>
              <div className="my-5 text-center">
                <h3 className="text-lg pb-5 text-herotext text-center">Would you need to view this video later?</h3>
                <h3>Save to your account now!</h3>
              </div>
              <div className="flex justify-center items-center">
                <img src={a5} alt="save video" />
              </div>
              <h3 className="text-gray-500 mt-5 text-center font-medium text-lg py-5">
                Don't have an account? <span className="text-bluetwo">Create account</span>
              </h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Download;
