import React from 'react'
import AboutPage from '../aboutPage/AboutPage'
import HomePage from '../homePage/HomePage'
import ServicePage from '../servicePage/ServicePage'

function GeneralHomePage() {
  return (
    <div>
      <HomePage/>
      <AboutPage/>
      <ServicePage/>
    </div>
  )
}

export default GeneralHomePage
