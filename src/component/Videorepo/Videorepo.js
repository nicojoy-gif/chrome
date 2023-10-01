import React from 'react'
import logo from '../../Assets/logo.png'
import user from '../../Assets/profile-circle.png'
import vid1 from '../../Assets/WEB CARD.png'
import vid2 from '../../Assets/WEB CARD (1).png'
import vid3 from '../../Assets/WEB CARD (2).png'
import vid4 from '../../Assets/WEB CARD (3).png'
import search from '../../Assets/search-normal.png'
import arrow from '../../Assets/arrow-downs.png'

function Videorepo({ userName }) {
    console.log(userName)
  return (
    <div>
        <section className=''>
            <h1>{userName}</h1>
            <nav className='flex justify-between container mx-auto h-20 items-center'>
                <div>
                    <img src={logo} alt='logo'/>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={user} alt='user-profile' className='h-8 w-8' />
                        <p className='px-2 text-herotext '>John Mark</p>
                        <img src={arrow} alt='arrow-down' className='h-6 w-6'/>
                    </div>
                </div>
            </nav>
            <div className='flex justify-between container mx-auto h-24 my-4 items-center'>
                <div>
                    <h1 className='text-3xl font-bold text-herotext'>Hello, John Mark</h1>
              <p className='text-lg text-gray-600 py-1'>Here are your recorded videos</p>
                </div>
<div>
<div className="relative">
  <input
    className="bg-gray-100 border border-searchborder rounded-lg w-96 h-16 px-12  text-searchtext"
    placeholder="Search for a particular video"
  />
  <img src={search} alt='search-icon'  className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-5"/>
 
</div>

</div>
            </div>
            <div>
                <div className='border border-gray-100'></div>
            </div>
            <div className='container mx-auto overflow-y-auto h-96'>
<h3 className='py-5 text-lg text-start text-herotext font-medium'>Recent files</h3>
<div className='my-5 grid lg:grid-cols-2 gap-5 grid-cols-1'>
<div>
    <img src={vid1} alt='web-card'/>
</div>
<div>
    <img src={vid2} alt='web-card'/>
</div>

</div>
<h3 className='py-5 text-lg text-start text-herotext font-medium'>Files from Last week</h3>
<div className='my-5 grid lg:grid-cols-2 gap-5 grid-cols-1'>
<div>
    <img src={vid3} alt='web-card'/>
</div>
<div>
    <img src={vid4} alt='web-card'/>
</div>

</div>
            </div>
        </section>
    </div>
  )
}

export default Videorepo