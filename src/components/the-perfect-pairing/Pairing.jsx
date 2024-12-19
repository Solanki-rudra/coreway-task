import React from 'react'

function Pairing() {
return(
<div>
<div className='flex justify-center items-center flex-col pb-10'>
    <h1 className='text-center p-14 text-5xl font-serif  '>The Perfect Pairing</h1>
    <h1 className='text-center uppercase text-xl pb-14'>Pair up our statement pieces to create a unique look</h1>
    <div className='w-fit flex gap-3 py-4 '>
    <div className='w-[704px]'>
    <div className='h-[680px] overflow-hidden'>
            <img className=' object-top' src="/assets/images/pairing-img-1.png" alt="pairing image" width="704" height="521" />
        </div>
            <h1 className='p-4 cursor-pointer bg-gray-100'>Necklaces →</h1>
    </div>
    <div className='h-[520px]'>
        <div className='mb-3'>
            <div className='h-[48%]'>
            <img className=' object-top' src="/assets/images/pairing-img-2.png" alt="pairing image" width="307" height="100%" />
            </div>
            <h1 className='p-4 cursor-pointer bg-gray-100'>Rings →</h1>
        </div>
        <div>
            <div className='h-[48%]'>
            <img className=' object-top' src="/assets/images/pairing-img-2.png" alt="pairing image" width="307" height="201" />
            </div>
            <h1 className='p-4 cursor-pointer bg-gray-100'>Rings →</h1>
        </div>
    </div>

    </div>
    </div>
    <div style={{
        backgroundImage: `url('/assets/images/background-hand.jpg')`,
      }} className='bg-cover bg-center h-[450px] '>
        
    </div>
</div>

)
}

export default Pairing
