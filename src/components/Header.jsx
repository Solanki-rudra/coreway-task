import React from 'react'

function Header() {
    const navigation = [
        {name:'SHOP BY COLLECTIONS'},
        {name:'SHOP BY CATEGORY'},
        {name:'BEST SELLERS'},
        {name:"MEN'S JEWELLERY"},
        {name:'STORE LOCATION'},
    ]
  return (
    <div className='flex p-8 px-10 xl:px-14 justify-center gap-16 items-center'>
      <div className='cursor-pointer'>
        <img src="/assets/images/logo.png" alt="image" width="85" height="32"/> 
      </div>
      <ul className='flex gap-16'>
        {
            navigation.map((navItem,index)=>(
              <li key={index} className='cursor-pointer'>{navItem.name}</li>
            ))
        }
      </ul>
      <div className='flex gap-8'>
      <img className='cursor-pointer' src="/assets/svgs/search.svg" alt="Search Icon" width="21" height="20" />
      <img className='cursor-pointer' src="/assets/svgs/contact.svg" alt="contanct Icon" width="21" height="20" />
      <img className='cursor-pointer' src="/assets/svgs/bag.svg" alt="bag Icon" width="21" height="20" />
      </div>
    </div>
  )
}

export default Header
