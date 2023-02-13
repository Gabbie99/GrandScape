import React from 'react'
import './Services.css'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'
import maintain from '../../assets/maintain.jpg'
import sustain from '../../assets/suspan.jpg'
import suplly from '../../assets/supllymethod.png'
import safe from '../../assets/aboutconstruct.jpg'
import preconstruct from '../../assets/sanschool.jpg'

function Services() {
  return (
    <div className='gs-Servicescontainer'>
      <div className="gs-Serviceswrap" id='G'>
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
                    <div className="gs-Servicesgallery-item-inn">
                        <h2 className='gs-pee'>Sustainability</h2>
                        <span className='gs-galleryspan'></span>
                    </div>
                    <span className='gs-gallery' style={{overflow:"hidden"}} id='one'><img src={sustain} alt="gallery"  /></span>
                </div>            
                <div className="gs-Servicesgallery-item">
                    <div className="gs-Servicesgallery-item-inn">
                        <h2 className='gs-pee'>Supply Methods</h2>
                        <span className='gs-galleryspan'></span>
                    </div>
                    <span className='gs-gallery' style={{overflow:"hidden"}} id='two'><img src={suplly} alt="gallery" /></span>
                </div>
            </article>    
            <article className='gs-Servicesgallerys'>
                <div className="gs-Servicesgallery-item">
                    <div className="gs-Servicesgallery-item-inn">
                        <h2 className='gs-pee'>Construction</h2>
                        <span className='gs-galleryspan'></span>
                    </div>
                    <span className='gs-gallery' style={{overflow:"hidden"}} id='three'><img src={preconstruct} alt="gallery" /></span>
                </div>
            </article>
            <article className='gs-Servicesgallery'>
                <div className="gs-Servicesgallery-item">
                    <div className="gs-Servicesgallery-item-inn">
                        <h2 className='gs-pee'>Design Maintenance</h2>
                        <span className='gs-galleryspan'></span>
                    </div>
                    <span className='gs-gallery' style={{overflow:"hidden"}} id='four'><img src={maintain} alt="gallery" /></span>
                </div>
                <div className="gs-Servicesgallery-item">
                    <div className="gs-Servicesgallery-item-inn">
                        <h2 className='gs-pee'>Safety</h2>
                        <span className='gs-galleryspan'></span>
                    </div>
                    <span className='gs-gallery' style={{overflow:"hidden"}} id='five'><img src={safe} alt="gallery" /></span>
                </div>
            </article>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Services
