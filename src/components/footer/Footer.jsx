import React from 'react'
import './Footer.css'
import {LinkedinLogo, FacebookLogo, InstagramLogo, TwitterLogo, CaretUp} from 'phosphor-react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='grand-footercontainer'>
      <div className='grand-footer'>
        <div className="grand-footericon">
          <div className='grand-icon'>
            <a href="www.linkedin.com"><LinkedinLogo size={25} weight="regular" /></a>
          </div>
          <div className='grand-icon'>
            <a href="www.facebook.com"><FacebookLogo size={25} weight="regular" /></a>
          </div>
          <div className='grand-icon'>
            <a href="www.instagram.com"><InstagramLogo size={25} weight="regular" /></a>
          </div>
          <div className='grand-icon'>
            <a href="www.twitter.com"><TwitterLogo size={25} weight="regular" /></a>
          </div>
        </div>
        <div className="grand-footerlink">
          <p><Link to='/contact'>CONTACT</Link></p>
          <p><Link to='/service-terms'>TERMS OF SERVICE</Link></p>
          <p><Link to='/privacy-policy'>PRIVACY POLICY</Link></p>
        </div>
        <div className="grand-footercopy">
            <p>&copy; 2023 Grandcsape Residence's Limited. All Rights Reserved</p>
            <a href="#home">
              <CaretUp size={32} weight="thin" />
            <p>Scroll up</p>
            </a>
            
        </div>
      </div>
    </div>
  )
}

export default Footer
