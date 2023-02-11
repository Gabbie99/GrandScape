import React from 'react'
import NavBar from '../navBar/NavBar'
import './Project.css'


function Project() {
  return (
    <div className='gs-Projectcontainer'>
      <div className="gs-Projectwrap">
        <NavBar/>
        <div className="gs-Projecthead">
            <h1 className='gs-Projectheading'>We Are Confident About Our Projects</h1>
        </div>
      </div>
      <div className="gs-Projectbody">
        <div className="gs-Projecttext">
            <h1>Projects</h1>
            <p>
            Presenting projects that satisfy and exceed the owners expectations is a process that begins at the conceptual stage with a collaborative team from design through construction. This integrated team approach puts the focus of all team members specifically towards the culmination of the completed project. Check out our projects by clicking on the categories below.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Project
