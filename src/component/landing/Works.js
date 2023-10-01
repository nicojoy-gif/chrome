import React from 'react'
import a from '../../Assets/Icon (2).png'
import a1 from '../../Assets/Icon (1).png'
import a2 from '../../Assets/Icon.png';
import a3 from '../../Assets/rec-1.cb7888a47e24214aeb105805426a8300.svg.png'
function Works() {
  return (
    <div className='bg-white h-full ' id='work'>
        <header className='py-10'>  
<h1 className='py-5 text-herotext font-bold text-4xl text-center'>How it works</h1>
<div className='container mx-auto'>
<section className='grid lg:grid-cols-3 grid-cols-1 gap-4'> 
<div className='text-center'>
    <div className='my-4 flex justify-center'>
<img src={a} alt='numberone'/>
    </div>
<h1 className='text-2xl font-semibold text-check'> Record Screen</h1>
<p className='py-3 text-xl text-textgray px-7'>Click the "Start Recording" button in our extension. choose which part of your screen to capture ad who you want to send it to.</p>
<div className='flex items-center mx-auto justify-center'>
    <img src={a3} alt='record'/>
</div>
</div>
<div className='text-center'>
    <div className='my-4 flex justify-center'>
<img src={a1} alt='numberone'/>
    </div>
<h1 className='text-2xl font-semibold text-check'>Share Your Recording</h1>
<p className='py-3 text-xl text-textgray px-7'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
<div className='flex items-center mx-auto justify-center'>
    <img src={a3} alt='record'/>
</div>
</div>
<div className='text-center'>
    <div className='my-4 flex justify-center'>
<img src={a2} alt='numberone'/>
    </div>
<h1 className='text-2xl font-semibold text-check'>Learn Effortlessly</h1>
<p className='py-3 text-xl text-textgray px-7'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
<div className='flex items-center mx-auto justify-center'>
    <img src={a3} alt='record'/>
</div>
</div>
</section>
</div>
        </header>
        </div>
  )
}

export default Works