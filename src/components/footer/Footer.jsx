import React from 'react'
import './Footer.css'
import {LinkedinLogo, FacebookLogo, InstagramLogo, TwitterLogo, CaretUp} from 'phosphor-react'

function Footer() {
  return (
    <div className='grand-footercontainer'>
      <div className='grand-footer'>
        <div className="grand-footericon">
          <div className='grand-icon'>
            <a href="#"><LinkedinLogo size={25} weight="regular" /></a>
          </div>
          <div className='grand-icon'>
            <a href="#"><FacebookLogo size={25} weight="regular" /></a>
          </div>
          <div className='grand-icon'>
            <a href="#"><InstagramLogo size={25} weight="regular" /></a>
          </div>
          <div className='grand-icon'>
            <a href="#"><TwitterLogo size={25} weight="regular" /></a>
          </div>
        </div>
        <div className="grand-footerlink">
          <p><a href='#'>CONTACT</a></p>
          <p><a href='#'>TERMS OF SERVICE</a></p>
          <p><a href='#'>PRIVACY POLICY</a></p>
        </div>
        <div className="grand-footercopy">
            <p>&copy; 2023 Grandcsape Residence's Limited. All Rights Reserved</p>
            <CaretUp size={32} weight="thin" />
        </div>
      </div>
    </div>
  )
}

export default Footer
