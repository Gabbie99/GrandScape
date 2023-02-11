import React from 'react'
import NavBar from '../navBar/NavBar'
import pic1 from '../../assets/groundview (1).jpg'
import pic2 from '../../assets/view1 (1).jpg'
import pic3 from '../../assets/twoyears.jpg'
import './Project.css'
import Footer from '../footer/Footer'


function Project() {
  return (
    <div className='gs-Projectcontainer' id='G'>
      <div className="gs-Projectwrap">
        <NavBar/>
        <div className="gs-Projecthead">
            <h1 className='gs-Projectheading'>We Take Pride In Our Projects</h1>
        </div>
      </div>
      <div className="gs-Projectbody">
        <div className="gs-Projecttext">
            <h1 className='gs-Projecttext-head'>Projects</h1>
            <p>
            Presenting projects that satisfy and exceed the owners expectations is a process that begins at the conceptual stage with a collaborative and hardworking team from design through construction. This  dedicated team approach puts the focus of all team members specifically towards the culmination of the completed project. Check out our projects below.
            </p>
        </div>
        <div className="gs-Projectgallerywrap">
            <div className="gs-Projectgallery">
                <img src={pic1} alt="gallery" />
            </div>
            <div className="gs-Projectgallery">
                <img src={pic2} alt="gallery" />
            </div>
            <div className="gs-Projectgallery">
                <img src={pic3} alt="gallery" />
            </div>
            {/* <div className="gs-Projectgallery">
                <img src={} alt="" />
            </div>
            <div className="gs-Projectgallery">
                <img src={} alt="" />
            </div> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Project
