import React from 'react'
import './AboutPage.css'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <div className='grand-AboutContainer'>
      <section className='grand-Aboutsection'>
        <div className="grand-Abouttext">
          <h1 className='grand-Abouthead'>About Our Company</h1>
          <article className='grand-Aboutarticle'>
            <p><span className='grand-Aboutspan'>GRANDSCAPE RESIDENCE'S LIMITED </span>is a real estate firm stationed to provide real estate solutions to our clients. The company engages in consultation, real estate development, building construction, civil engineering, management, interior design services, supplies and general contracts.</p>
            <p>The Company is a responsive and reputable indigenous company. We have a professionally recognized management team, a highly skilled workforce with innovative technological solutions, and a verifiable performance record that exceeds our clients needs, in tune with quality service delivery.</p>
            <p>With over a decade of well grounded and sound experience, our focus is centralized on building unrivalled properties in Nigeria as a whole. <span className='grand-Aboutspan'>GRANDSCAPE RESIDENCE'S LIMITED </span>is commited to set and keep to high standards that have preceeded past projects.</p>
          </article>
          <div className='grand-AboutRead'>
            <Link to='/about' id='read'>Read our story</Link>
          </div>
        </div> 
      </section>
     
    </div>
  )
}

export default AboutPage
