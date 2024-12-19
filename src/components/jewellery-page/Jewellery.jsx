import React from 'react'

function Jewellery({jewelleryData,title}) {
  return (
<div >
        {title && <h1 className='text-center p-16 text-5xl font-serif  '>{title}</h1>}
        <div className='flex items-center mx-auto max-w-fit w-[80%] pb-16'>
            <span className='text-3xl cursor-pointer'>&lt;</span>
            <div className='flex overflow-x-hidden gap-3 mx-12'>
                {
                    jewelleryData.map((necklace,index)=>(

                <div key={index} className='flex-shrink-0'>
                    <div>
                        <img src={necklace.imgSrc} alt="necklace image" width="260" height="272"/>
                    </div>
                    <h1>{necklace.name}</h1>
                    <h1 className='font-semibold'>{necklace.price}</h1>
                </div>
                    ))
                }
            </div>
            <span className='text-3xl cursor-pointer'>&gt;</span>
        </div>
    </div>

  )
}

export default Jewellery
