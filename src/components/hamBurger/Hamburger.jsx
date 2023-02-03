import React from 'react'
import './Hamburger.css' 

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
                  <a href='#'><li>Home</li></a> 
                  <a href='#about'><li>About</li></a>                  
                  <a href='#product'><li>Services</li></a>
                  <a href='#news'><li>Projects</li></a>
                  <a href='#contact'><li>Testimonials</li></a>  
                  <a href='#contact'><li>Contact</li></a>  
                </ul>
        </div>
    </div>
  )
}

export default Hamburger