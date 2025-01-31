import React from 'react'
import HeaderComponent from '../layouts/HeaderComponent'
import FooterComponent from '../layouts/FooterComponent'
import BannerComponent from './BannerComponent'
import HomeNewsComponent from './HomeNewsComponent'

function HomeComponent() {
  return (
    <div className='container'>
      <HeaderComponent />
      <BannerComponent />
      <HomeNewsComponent />
      

      <FooterComponent />
    </div>
  )
}

export default HomeComponent
