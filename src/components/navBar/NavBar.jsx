import React from 'react'
import './NavBar.css'
import Hamburger from '.././hamBurger/Hamburger'

function NavBar() {
  return (
    <div className='grand-NavContainer'>
      <div className="grand-Logo">
        <h1 className='grand-Navhead'>GrandScape</h1>
      </div>
      <div className="grand-Linklist">
        <ul className='grand-ul'>
          <div className="grand-li">Home</div>
          <div className="grand-li">About</div>
          <div className="grand-li">Services</div>
          <div className="grand-li">Projects</div>
          <div className="grand-li">Testimonials</div>
          <div className="grand-li">Contact</div>
        </ul>
      </div>
      <div className="grand-hamburger">
        <Hamburger/>
      </div>
    </div>
  )
}

export default NavBar
