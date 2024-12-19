import React from 'react'

function Bracelates({bracelets}) {

  return (
<div className='bg-yellow-50'>
<div className='flex justify-center gap-3 p-16'>
        {
            bracelets.map((bracelet,index)=>(

        <div key={index} className=''>
            <div>
            <img src={bracelet.imageSrc} alt="necklace image" width="350" height="396"/>
            </div>
            <h1>{bracelet.name}</h1>
            <h1>{bracelet.stocks}</h1>
        </div>
            ))
        }
    </div>
</div>
  )
}

export default Bracelates
