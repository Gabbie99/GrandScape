import React from 'react'
import './Hamburger.css' 
import { Link } from 'react-router-dom'

function Hamburger() {
  return (
    <div>
        <div className='ham-div'>
        <input type="checkbox" className='res-inp'/>
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                {/* <List size={50} /> */}
                <ul className='hamburger'>
                  <Link to='/' className='ham-li'><li>Home</li></Link> 
                  <Link to='/about' className='ham-li'><li>About</li></Link>                  
                  <Link to='/services' className='ham-li'><li>Services</li></Link>
                  <Link to='/projects' className='ham-li'><li>Projects</li></Link>
                  {/* <Link to='/testimonials' className='ham-li'><li>Testimonials</li></Link>   */}
                  <Link to='/contact' className='ham-li'><li>Contact</li></Link>  
                </ul>
        </div>
    </div>
  )
}

export default Hamburger