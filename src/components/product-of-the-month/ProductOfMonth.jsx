import React from 'react'
import Jewellery from '../jewellery-page/Jewellery'
import { earrings } from '../../constant/productsData'

function ProductOfMonth() {
  return (
    <div>
      <h1 className='text-center p-16 text-5xl font-serif  '>Product Of the Month</h1>
      <Jewellery jewelleryData={earrings}/>
    </div>
  )
}

export default ProductOfMonth
