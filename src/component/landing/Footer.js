import React from 'react'
import logo from '../../Assets/footer.png'
function Footer() {
  return (
    <div>
<section className='bg-bluetwo h-full px-2 lg:h-1/2 py-10'>
    <div className='grid lg:grid-cols-4 text-white container mx-auto py-5 text-start md:grid-cols-3 grid-cols-2'>
<div className=''>
    <img src={logo} alt='logo' />
</div>
<div>
    <ul>
        <li className='font-semibold py-2'>
Menu
        </li>
        <li className='py-2'>
            Home
        </li>
        <li className='py-2'>
            Converter
        </li>
        <li className='py-2'>
            How it Works
        </li>
    </ul>
</div>
<div>
<ul>
        <li className='font-semibold py-2'>
About us
        </li>
        <li className='py-2'>
            About
        </li>
        <li className='py-2'>
            Contact Us
        </li>
        <li className='py-2'>
            Privacy Policy
        </li>
    </ul>
    
</div>
<div>
<ul>
        <li className='font-semibold py-2'>
Screen Record
        </li>
        <li className='py-2'>
        Browser Window
        </li>
        <li className='py-2'>
            Desktop
        </li>
        <li className='py-2'>
            Application
        </li>
    </ul>
</div>
    </div>
</section>
    </div>
  )
}

export default Footer