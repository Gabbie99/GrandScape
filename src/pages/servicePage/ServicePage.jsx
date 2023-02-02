import React from 'react'
import './ServicePage.css'

function ServicePage() {
  return (
    <div className='grand-Servicecontainer'>
      <div className="grand-Servicebody">
        <div className="grand-Servicetext">
            <h1 className='grand-Servicehead'>We Offer A Wide Range Of Services</h1>
            <p className='grand-Servicepara'>
            From conception to completion, our entire team management and experienced executives at <span className='grand-Servicespan'>GRANDSCAPE RESIDENCE'S LIMITED</span>  make our clients' needs and satisfaction a priority. We have experience in a wide variety of projects and delivery methods, and use both time-proven practices and cutting-edge techniques to make sure our customers projects meet their maximum potential.
            </p>
            
        </div>
        <div className="grand-Servicecardswrap">
                <div className="grand-Servicecards">
                    <img src="" alt="" />
                </div>
                <div className="grand-Servicecards">
                    <img src="" alt="" />
                </div>
                <div className="grand-Servicecards">
                    <img src="" alt="" />
                </div>
            </div>
            <p className='grand-Servicelearn'>
                <a href="#">Learn More</a>
            </p>
      </div>
    </div>
  )
}

export default ServicePage
