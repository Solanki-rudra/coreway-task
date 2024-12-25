import React from 'react'
import Header from '../components/Header'
import LandingPage from '../components/landing-page/LandingPage'
import Jewellery from '../components/jewellery-page/Jewellery'
import Bracelates from '../components/jewellery-page/Bracelates'
import { bracelets, earrings, necklaces } from '../constant/productsData'
import Explore from '../components/explore-page/Explore'
import Pairing from '../components/the-perfect-pairing/Pairing'
import ProductOfMonth from '../components/product-of-the-month/ProductOfMonth'
import Testimonials from '../components/testimonials/Testimonials'
import Slider from '../components/landing-page/Slider'

function HomePage() {
  return (
    <>
      <Header />
      <Slider />
      <Jewellery jewelleryData={necklaces} title='Necklaces'/>
      <Bracelates bracelets={bracelets} />
      <Jewellery jewelleryData={earrings} title='Earrings'/>
      <Explore />
      <Pairing />
      <ProductOfMonth />
    <Testimonials />
    </>
  )
}

export default HomePage
