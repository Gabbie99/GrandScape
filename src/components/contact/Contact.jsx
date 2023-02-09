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
           <p>
           Please feel free to call us to discuss your upcoming project! For inquiries about employment, subcontracting for us, or information about our current project, please use the form below so we can connect you to the best person to help you.
           </p>
        </div>  
      </div>
      <div className="gs-Contactbody">
        <div className="gs-Contact-text">
            <h1 className='gs-Contact-texthead'>Contact Us</h1>
            <div className="gs-Contactflex">
                <div className='gs-Contactform'>
                    <form action="submit">
                        <input type="text" className='gs-input' placeholder='Full Name*' required /><br />
                        <input type="text" className='gs-input' placeholder='Email Address*' required /><br />
                        <input type="text" className='gs-input' placeholder='Phone No*' required /><br />
                        <textarea name="text" id="text" cols="30" rows="10" placeholder='Message...' required></textarea>
                        <p>&nbsp;</p>
                        <button className='gs-button' type='submit'>Submit</button>
                    </form>
                </div>
                <div className='gs-Contactmap'>

                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
