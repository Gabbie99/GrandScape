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
          Grandscape Residence's Ltd is a real estate firm stationed to provide real estate solutions to our clients. The company engages in consultation, real estate deveopment, management and interior desin services. <br /> In 10+ years of the existence of Grandscape, the company has helped individuals relaize their dreams of home ownership as well as office complexes. Our clientele comprises of private individuals, corporate bodies, corporate institutions and companies. With over a dcade of well grounded and sound experience, or focus is centralized on building unrivalled properties in Nigeria as a whole. 
        </p>
        <p>&nbsp;</p>
        </div>
        <div className="gs-Aboutpic-tell">
          <div className="gs-Aboutpic">
            <img src={construct} alt="construct" />
          </div>
          <div className="gs-Abouttell">
            <p className="gs-Aboutstory-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis tempore repellat incidunt et sed aspernatur, sit iusto ipsa beatae! Ipsam asperiores possimus, expedita vero nemo tenetur optio odio impedit. Architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis facere natus ipsam at illo doloremque quibusdam quas! Delectus possimus explicabo voluptatum nostrum, maiores accusamus enim tenetur non ipsum nihil rem.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quae, est ut obcaecati illo quis a explicabo sed voluptate, culpa delectus sequi quod iusto adipisci praesentium aut? Distinctio, minus amet. 
              </p>
            </div>
            <div className="gs-Aboutleadpic">
              <img src={man} alt="manpix" />
              <h2>Omaki Mustapha</h2>
              <p><i>Engineer</i></p>
              <p className="gs-Aboutstory-paras">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quae, est ut obcaecati illo quis a explicabo sed voluptate, culpa delectus sequi quod iusto adipisci praesentium aut? Distinctio, minus amet. 
              </p>
            </div>
            <div className="gs-Aboutleadpic">
              <img src={man} alt="manpix" />
              <h2>Omaki Mustapha</h2>
              <p><i>Engineer</i></p>
              <p className="gs-Aboutstory-paras">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quae, est ut obcaecati illo quis a explicabo sed voluptate, culpa delectus sequi quod iusto adipisci praesentium aut? Distinctio, minus amet. 
              </p>
            </div>
            <div className="gs-Aboutleadpic">
              <img src={man} alt="manpix" />
              <h2>Omaki Mustapha</h2>
              <p><i>Engineer</i></p>
              <p className="gs-Aboutstory-paras">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quae, est ut obcaecati illo quis a explicabo sed voluptate, culpa delectus sequi quod iusto adipisci praesentium aut? Distinctio, minus amet. 
              </p>
            </div>
          </div> 
      </div>
      <Footer/>   
    </div>
  )
}

export default About
