import React from 'react'
import './ServicePage.css'
import Footer from '../../components/footer/Footer'
import build from '../../assets/building-construction.png'
import road from '../../assets/road-construction.jpg'
import maintain from '../../assets/maintenance.png'
import supply from '../../assets/supply.png'
import home from '../../assets/haverschool.jpg'
import truck1 from '../../assets/truck.png'
import truck2 from '../../assets/jcb.png'
import {Link} from 'react-router-dom'


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
                    <img src={build} alt="building" />
                    <p>
                        Building Construction
                    </p>
                </div>
                <div className="grand-Servicecards">
                    <img src={road} alt="civil" />
                    <p>
                        Civil Engineering
                    </p>
                </div>
                <div className="grand-Servicecards">
                    <img src={maintain} alt="maintainance" />
                    <p>
                     Maintenance
                    </p>
                </div>
                <div className="grand-Servicecards">
                    <img src={supply} alt="supplies" />
                    <p>
                        Supplies & Services
                    </p>
                </div>
            </div>
            <p className='grand-Servicelearn'>
                <Link to='/services'>Learn More</Link>
            </p> 
      </div>
      <div className="grand-Servicetext">
        <div className="grand-Workspic">
            <img src={home} alt="home" />
        </div>
        <h1 className='grand-Servicehead'>We Take Pride <br/>In Projects We've Built</h1>
        <article>
            <div>
                <p className='grand-Servicepara'>
                While our clients' satisfaction is our primary metric for excellence, we have also been recognized with awards over the years for safety, business practices, and design excellence. We are proud to be at the forefront of profound building practices. We understand that projects represent not only buildings, but the plans for the future of our clients
                </p>
                <p className='grand-Servicesee'>
                <Link to='/projects'>See Our Latest Projects</Link>
            </p>
            </div>
        </article>
      </div><hr id='grand-hr'/>
      <div className="grand-Servicetext">
        <h1 className="grands-callhead">Contact Us</h1>
        <p id='pee'>
            We'd be glad to discuss your upcoming Projects and help you fulfill your dreams!
        </p>
        <p className='grand-Servicetouch'>
            <Link to='/contact'>Get in touch</Link>
        </p>
      </div>
      <div className="grand-Servicetruck-wrap">
        <div className="grand-Servicetrucks">
            <div className="grand-truck">
                <img src={truck1} alt="truck1" />
            </div>
        </div>
        <div className="grand-Servicetrucks">
            <div className="grand-truck">
                <img src={truck2} alt="truck2" />
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ServicePage
