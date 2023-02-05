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
            <p><span className='grand-Aboutspan'>GRANDSCAPE RESIDENCE'S LIMITED </span>is a limited liability company, incorporatd under the companies act of 1990 by the Federal Republic of Nigeria.</p>
            <p>The nature of business is Real estate Development, building, construction, civil engineering, supplies and general contracts. The Company is a responsive and reputable indigenous company. We have a professionally recognized management team, a highly skilled workforce with innovative technological solutions, and a verifiable performance record that exceeds our clients needs, in tune with quality service delivery.</p>
            <p>With reputable years of experience, <span className='grand-Aboutspan'>GRANDSCAPE RESIDENCE'S LIMITED </span>came into being with response to the yarning of our reasonable minds pursuing a robust and self-sustaining economic environment.</p>
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
