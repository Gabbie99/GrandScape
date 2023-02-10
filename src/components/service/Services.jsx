import React from 'react'
import './Services.css'
import NavBar from '../navBar/NavBar'
// import maintain from '../../assets/maintain.jpg'
// import sustain from '../../assets/Sustainable.jpg'
// import suplly from '../../assets/supllymethod.png'
// import safe from '../../assets/aboutconstruct.jpg'
// import preconstruct from '../../assets/sanschool.jpg'

function Services() {
  return (
    <div className='gs-Servicescontainer'>
      <div className="gs-Serviceswrap">
        <NavBar/>
        <div className="gs-Servicesheadwrap">
            <h1 className="gs-Serviceshead">Services For Your Satisfaction</h1>
        </div>
      </div>
      <div className="gs-Servicesbody">
        <div className="gs-Servicestext">
            <h1 className="gs-Servicestexthead">Our Services</h1>
            <p>
            <span className='gs-Servicesspan'>GRANDSCAPE RESIDENCE'S LIMITED </span> offers a variety of services to meet your project's needs, to take you from sealing a deal to collaboration meetings all the way to ribbon-cutting and beyond. We trust that every project is unique, and can adjust our approach to fit your project needs. While we lead and specialize in design-build, construction, maintenance among others, we are very acquainted with series of supply methods and are confident we can find a sure process that will best help you meet your goals.
            </p>
        </div>
        <div className="gs-Servicespix">
            <article className='gs-Servicesgallery'>
                <div className="gs-Servicesgallery-item">
                    
                </div>
            </article>
            <article className='gs-Servicesgallery'>
                <div className="gs-Servicesgallery-item">
                    
                </div>
            </article>
            <article className='gs-Servicesgallery'>
                <div className="gs-Servicesgallery-item">
                    
                </div>
            </article>
            <article className='gs-Servicesgallery'>
                <div className="gs-Servicesgallery-item">
                    
                </div>
            </article>
            <article className='gs-Servicesgallery'>
                <div className="gs-Servicesgallery-item">
                    
                </div>
            </article>
            {/* <img src={preconstruct} alt="" />
            <img src={suplly} alt="" />
            <img src={sustain} alt="" />
            <img src={maintain} alt="" />
            <img src={safe} alt="" /> */}
            <div className="gs-Servicespee">
                <p className='gs-pee'>Supply Methods</p>
            </div>
            <div className="gs-Servicespee">
                <p className='gs-pee'>Construction</p>
            </div>
            <div className="gs-Servicespee">
                <p className='gs-pee'>Safety</p>
            </div>
            <div className="gs-Servicespee">
                <p className='gs-pee'>Design Maintenance</p>
            </div>
            <div className="gs-Servicespee">
                <p className='gs-pee'>Sustainability</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
