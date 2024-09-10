import React,{ useRef} from 'react'
import img2 from '../assets/secound-image.jpg'
import '../App.css'

function Service() {
  const servicesRef = useRef(null);
  return (
    <div className="main-item" ref={servicesRef}>
      <div className="service-section1">
        <p className="item-text1">Our Services</p>
        <p className="service-text2">Credit goes to Pexels website for background images and Unsplash website for gallery images used in this Vertex HTML template. Vestibulum quis ultrices ipsum, tempor cursus odio. Donec et nisl sit amet mauris consequat sodales.</p>
        <p className="service-text2">Morbi a sapien vitae nunc mollis efficitur quis eu purus. Donec nec orci pharetra, ullamcorper orci eu, gravida dolor. Morbi at rutrum nibh. Sed a erat vitae ipsum mollis tincidunt sed nec orci.</p>
        <button className="btn-next">Next Page</button>
        <div className='service-feature-main'>
            <div className='service-feature'>
            <i className="fa fa-street-view icons" aria-hidden="true"></i>
            <p className='i-icon-text'>Fusce mi sapien, faucibus ut tortor a, tempus laoreet magna. Nulla felis ipsum, lobortis eu efficitur eget, malesuada id lacus.</p>
            </div>
            <div className='service-feature'>
            <i className="fa fa-bullseye icons" aria-hidden="true"></i><p className='i-icon-text'>
            Nullam pellentesque accumsan hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
        </div>
      </div>

      <div className="item-section2">
        <img className="img1-style-service" src={img2} alt="" />
      </div>
    </div>
  )
}

export default Service
