import React from 'react'
import a from '../../Assets/Video Repository.png'
import b from '../../Assets/Icon placeholder (1).png'
import b1 from '../../Assets/Icon placeholder (2).png'
import b3 from '../../Assets/Icon placeholder.png'
function Feature() {
  return (
    <div className='my-10 ' id='feature'>
        <section className='lg:h-screen h-full bg-white'>
<header className='text-center py-5'>
    <h1 className='text-6xl font-bold py-3'>Features</h1>
    <p className='text-xl text-gray-600'>Key Highlights of Our Extension</p>
</header>
<main className='grid container my-5 mx-auto lg:grid-cols-2 grid-cols-1'>
    <div>
        <div className='flex w-5/6 p-3'>
<img src={b3}  className='h-10 mt-1 w-10' alt='screen record'/>
<div className='text-start px-3'>
<h1 className='text-check font-semibold text-2xl'>Simple Screen Recording</h1>
<p className='text-xl text-textgray py-1 '>Effortless screen recording for everyone, Record with ease, no tech expertise required.</p>
</div>

        </div>
        <div className='flex w-5/6 p-3'>
<img src={b}  className='h-10 mt-1 w-10' alt='screen record'/>
<div className='text-start px-3'>
<h1 className='text-check font-semibold text-2xl'>Easy-to-Share URL</h1>
<p className='text-xl text-textgray py-1 '>Share your recordings instantly with a single link. No attachments, no downloads.</p>
</div>
</div> <div className='flex w-5/6 p-3'>
<img src={b1}  className='h-10 mt-1 w-10' alt='screen record'/>
<div className='text-start px-3'>
<h1 className='text-check font-semibold text-2xl'>Revisit Recordings</h1>
<p className='text-xl text-textgray py-1 '>Access and review your past content effortlessly, Your recordings, always at your fingertips.</p>
</div>
</div>
    </div>
    <div>
        <img src={a} alt='video-repo' className='h-5/6'/>
    </div>
</main>
        </section>
    </div>
  )
}

export default Feature