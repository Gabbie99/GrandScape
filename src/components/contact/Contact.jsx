import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navBar/NavBar'
import { MapPin, WhatsappLogo, Phone, Envelope } from 'phosphor-react'
import './Contact.css'

function Contact() {
  return (
    <div className='gs-Contactcontainer' id='G'>
      <div className="gs-Contactwrap">
        <NavBar/>
        <div className="gs-Contactwrap-head">
           <h1 className='gs-Contacthead'>How Can We Help?</h1> 
           
        </div>  
      </div>
      <div className="gs-Contactbody">
        <div className="gs-Contact-text">
            <h1 className='gs-Contact-texthead'>Contact Us</h1>
                <p className='gs-Contact-text-p'>
                Please feel free to call us to discuss your upcoming project! For inquiries about employment, contracting with us, or information about our current project, please use the form below so we can connect with you and give you quality work and service.
                </p>
        </div>
            <div className="gs-Contactflex">
                <div className='gs-Contactmap'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.599831452894!2d7.400188914059594!3d9.100169290377648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7571054e4a95%3A0x7564b4270a60fc82!2s37%20Obi%20Okosi%20St%2C%20Gwarinpa%20900108%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1676021236481!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                <div className="gs-Contactaddress">
                  <h3>
                    Grandscape Residence's Limited, Company
                  </h3>
                  <div className="gs-Contactadress-icon">
                    <MapPin size={25} weight="thin" />
                    <p>No 37 Obi Okosi Street, Federal Housing Estate Gwarimpa Abuja.</p>
                  </div>
                  <div className="gs-Contactadress-icon">
                    <WhatsappLogo size={25} weight="thin" />
                    <p>  
                    <a href="https://wa.me/+2348035867102">08035867102</a>
                    </p>
                  </div>
                  <div className="gs-Contactadress-icon">
                    <Phone size={25} weight="thin" />
                    <p>  
                    <a href="tel:+2348035867102">+234 803-586-7102</a>
                    </p>
                  </div>
                  <div className="gs-Contactadress-icon">
                    <Envelope size={25} weight="thin" />
                    <p>  
                    <a href="mailto:grandscapegroup@gmail.com">grandscapegroup@gmail.com</a>
                    </p>
                  </div>
                </div>
                </div>
                <div className='gs-Contactform'>
                    <form action="https://formsubmit.co/grandscapegroup@gmail.com" method="POST" >
                        <p>Name*</p><input type="text" name='name' className='gs-input' placeholder='Full Name*' required /><br />
                        <p>Email*</p><input type="text" name='email' className='gs-input' placeholder='Email Address*' required /><br />
                        <p>Subject*</p><input type="text" name='_subject' className='gs-input' placeholder='Subject*' required /><input type="hidden" name="_subject" value="New Client's Message!"/><br />
                        <p>Message*</p><textarea name="message" type="name" id="text" cols="30" rows="10" placeholder='Message...' required></textarea>
                        <p>&nbsp;</p>
                        <button className='gs-button' type='submit'>Submit</button>
                    </form>
                </div>             
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact
