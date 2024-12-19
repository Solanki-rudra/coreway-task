import React from 'react'

function LandingPage() {
  return (
<div>
<div style={{
        backgroundImage: `url('/assets/images/caraousel-img-1.jpg')`,
      }} className='bg-cover bg-center h-[87vh] flex px-10 justify-between items-center'>
        <span className='text-6xl cursor-pointer text-gray-600'>&lt;</span>
        <div className='w-full p-10 px-16'>
            <h1 className='text-3xl ml-3'>Jewellery</h1>
            <h1 className='text-8xl font-serif my-5'>EARRING</h1>
            <h1 className='text-5xl mb-14'>COLLECTION</h1>
            <button className='border-2 text-3xl border-black p-6 '>Shop Now</button>
        </div>
        <span className='text-6xl cursor-pointer text-gray-600'>&gt;</span>
    </div>
    <div className='flex text-lg py-10 bg-yellow-50'>
        <div className='w-1/3 flex gap-5 justify-center items-center border-r-2 border-gray-200'>
        <img src="/assets/svgs/contact.svg" alt="contact Icon" width="21" height="20" />
          Free shipping
        </div >
        <div className='w-1/3 flex gap-5 justify-center items-center border-r-2 border-gray-200'>
        <img src="/assets/svgs/contact.svg" alt="contact Icon" width="21" height="20" />
        Sterling silver
        </div>
        <div className='w-1/3 flex gap-5 justify-center items-center'>
        <img src="/assets/svgs/contact.svg" alt="contact Icon" width="21" height="20" />
          Handcrafted
        </div>
    </div>
</div>
  )
}

export default LandingPage
