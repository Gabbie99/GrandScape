import React from 'react'
import NavBar from '../navBar/NavBar'
import './About.css'
import construct from '../../assets/construction.jpg'
import man from '../../assets/ch1.png'
import Footer from '../footer/Footer'

function About() {
  return (
    <div className='gs-Aboutcontainer' id='G'>
      <div className="gs-Aboutwrap">
        <NavBar/>
        <div className="gs-Hometext">
        <h1 className='gs-Homehead'>A History Of Distinction </h1>
      </div>
      </div>
      <div className="gs-Aboutstory">
        <h1 className="gs-Aboutstory-head">Our Story</h1>
        <p className='gs-Aboutstory-para'>
          Grandscape Residence's Ltd is a real estate firm stationed to provide real estate solutions to our clients. The company engages in consultation, real estate development, management and interior design services. <br /> In 10+ years of the existence of Grandscape, the company has helped individuals realize their dreams of home ownership as well as office complexes. Our clientele comprises of private individuals, corporate bodies, corporate institutions and companies. 
        </p>
        <p>&nbsp;</p>
        </div>
        <div className="gs-Aboutpic-tell">
          <div className="gs-Aboutpic">
            <img src={construct} alt="construct" />
          </div>
          <div className="gs-Abouttell">
            <p className="gs-Aboutstory-para">
            With over a decade of well grounded and sound experience, our focus is centralized on building unrivalled properties in Nigeria as a whole. <br />A company driven by passion and guided by ethics and morality, Granscape is commited to set and keep to high standards that have preceeded past projects. The company is presently obtaining high end projects to add to our grand portfolio.
            </p>
            <p>&nbsp;</p>
          </div>
        </div><hr id='hr'/>
       
      <div className="gs-Aboutleaders-container">
          <h1 className='gs-Aboutstory-head'>LEADERSHIP</h1>
          <div className="gs-Aboutleaders">
              <div className="gs-Aboutleadpic">
              <img src={man} alt="manpix" />
                <h2>Omaki Mustapha</h2>
              <p><i>Founder/CEO</i></p>
              <p className="gs-Aboutstory-paras">
                Bldr. Mustapha Abdullahi Omaki is a visionary leader and seasoned CEO in the building and construction industry, known for blending innovation with integrity. With over 10 years of hands-on experience, he has transformed Grandscape Residence's Limited into a trusted name, delivering high-impact projects that stand as a testament to quality, sustainability, and craftsmanship.

What sets Bldr. Mustapha Abdullahi Omaki apart is not just a deep understanding of construction, but a passion for building teams, communities, and legacies. Under his leadership, the company has not only grown in scale but in purpose, championing ethical practices, client-focused solutions, and a culture of excellence across every level.

Whether navigating complex developments or mentoring the next generation of industry talent, Bldr. Mustapha Abdullahi Omaki leads with purpose, precision, and a commitment to raising the standard of what’s possible in the built environment. 
              </p>
            </div>
          </div> 
      </div>
      <Footer/>   
    </div>
  )
}

export default About
