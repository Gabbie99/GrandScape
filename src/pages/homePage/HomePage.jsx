import React from 'react'
import './HomePage.css'
import NavBar from '../../components/navBar/NavBar'

function HomePage() {
  return (
    <div className='grand-HomeContainer' id='home'>
        <NavBar/>
      <div className="grand-Hometext">
        <h1 className='grand-Homehead'>Making Your Vision Become A Reality </h1>
      </div>
    </div>
  )
}

export default HomePage
