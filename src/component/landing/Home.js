import React from 'react';
import Nav from './Nav';
import a from '../../Assets/AdobeStock_362497671 1.png';
import a2 from '../../Assets/AdobeStock_400053098 1.png';
import a3 from '../../Assets/woman-using-smartphone-technology 2.png';
import b from '../../Assets/grid.136a9256d16888900db0.svg.png';
import b2 from '../../Assets/grid.136a9256d16888900db0.svg (1).png';
import Feature from './Feature';
import Works from './Works';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='bg-gray-200'>
      <div className='bg-white fixed z-20'>
      <Nav />
</div>
      <section className='lg:h-screen h-full bg-white flex items-center mb-5 justify-center'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-7 container m-auto'>
          <div className='flex flex-col content-center items-center justify-center mx-5'>
            <div className='text-start w-5/6'>
              <h1 className='py-2 text-herotext font-bold text-6xl'>Show Them <br/> Don't Just Tell</h1>
              <p className='py-2 text-xl opacity-75'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
              <div className='py-5'>
                <Link to='/login'>
                <button className='bg-bluetwo rounded-lg py-2 px-5 text-center text-white text-lg font-medium'>Install HelpMeOut &rarr; </button>
              </Link>
              </div>
            </div>
          </div>
          <div  className='mx-5 my-7'>
          <div className='absolute  top-10 hidden lg:block right-5'>
              <img src={b2} className='w-full' alt='grid 1' />
            </div>
            <div className='absolute hidden lg:block bottom-5 right-1/3'>
              <img src={b} alt='grid 2' className='h-1/2' />
            </div>
          <div className='relative flex justify-center items-center'>
            
            <section>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col '>
                  <div className='h-1/2 '>
                    <img src={a} className='rounded-lg w-full' alt='hero-photography' />
                  </div>
                  <div className='h-1/2 '>
                    <img src={a2} className='rounded-lg w-full h-full' alt='hero-photography' />
                  </div>
                </div>
                <div className='  '>
                  <img src={a3} alt='woman using smartphone technology' className='rounded-lg w-full'/>
                </div>
              </div>
            </section>
          </div>
        </div>
        </div>
      </section>
      <Feature />
      <Works />
      <Footer />
    </div>
  );
}

export default Home;
