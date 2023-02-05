import React from 'react'
import './NavBar.css'
import Hamburger from '.././hamBurger/Hamburger'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='grand-NavContainer'>
      <div className="grand-Logo">
        <h1 className='grand-Navhead'>GrandScape</h1>
      </div>
      <div className="grand-Linklist">
        <ul className='grand-ul'>
          <Link to='/' className="grand-li"><div>Home</div></Link>
          <Link to='/about' className="grand-li"><div>About</div></Link>
          <Link to='/services' className="grand-li"><div>Services</div></Link>
          <Link to='/projects' className="grand-li"><div>Projects</div></Link>
          <Link to='/testimonials' className="grand-li"><div>Testimonials</div></Link>
          <Link to='/contact' className="grand-li"><div>Contact</div></Link>
        </ul>
      </div>
      <div className="grand-hamburger">
        <Hamburger/>
      </div>
    </div>
  )
}

export default NavBar
