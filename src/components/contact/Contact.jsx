import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navBar/NavBar'
import './Contact.css'

function Contact() {
  return (
    <div className='gs-Contactcontainer'>
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
                Please feel free to call us to discuss your upcoming project! For inquiries about employment, subcontracting for us, or information about our current project, please use the form below so we can connect you to the best person to help you.
                </p>
        </div>
            <div className="gs-Contactflex">
                <div className='gs-Contactmap'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.599831452894!2d7.400188914059594!3d9.100169290377648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7571054e4a95%3A0x7564b4270a60fc82!2s37%20Obi%20Okosi%20St%2C%20Gwarinpa%20900108%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1675984871955!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className='gs-Contactform'>
                    <form action="submit">
                        <p>Name*</p><input type="text" className='gs-input' placeholder='Full Name*' required /><br />
                        <p>Email*</p><input type="text" className='gs-input' placeholder='Email Address*' required /><br />
                        <p>Subject*</p><input type="text" className='gs-input' placeholder='Subject*' required /><br />
                        <p>Message*</p><textarea name="text" id="text" cols="30" rows="10" placeholder='Message...' required></textarea>
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
