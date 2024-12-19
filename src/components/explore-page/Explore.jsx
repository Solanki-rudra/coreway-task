import React from 'react';

function Explore() {
  return (
    <div className='bg-[#864B48] h-[450px] flex items-center'>
      <div className='w-[60%] pl-16'>
        <h1 className='text-2xl text-white'>THE NEW</h1>
        <h1 className='text-7xl text-white font-serif my-6'>THE UNIQUE THAT FITS YOUR STYLES</h1>
        <h1 className='text-lg text-white mb-7'>Always look for in a world-class diamond!</h1>
        <button className="bg-white p-8 text-xl py-5 text-['#864B48']">EXPLORE NOW</button>
      </div>
      <div className='w-[40%] h-full overflow-hidden'>
        <img className='object-cover scale-120 w-full h-full' src="/assets/images/explore-model.jpg" alt="explore model" />
      </div>
    </div>
  );
}

export default Explore;
