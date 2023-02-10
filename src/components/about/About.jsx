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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis atque iste doloremque, velit obcaecati. Doloribus ullam quibusdam ad voluptatem facilis autem, voluptatum eaque cum qui reprehenderit consequatur, earum molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto voluptatem ab aut similique doloribus doloremque dolores fugit? Laboriosam, facilis mollitia quod, velit officiis ex aliquid asperiores aspernatur libero fuga labore.
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
