import img3 from '../assets/third-image.jpg'
import { Link } from "react-router-dom";
import '../App.css'

function About() {
  return (
    <div className="about-item" id="about">
      <div className="about-section1">
        <p className="about-text1">About Us</p><br/>
        <p className="service-text2">Nunc dictum rhoncus nunc et vehicula. Sed velit arcu, aliquet id rhoncus eu, pretium ac ante. Nulla ut urna a augue semper pellentesque. Nulla ullamcorper vel.</p>
        <p className="service-text2">Euismod eget, sollicitudin nec libero. Nulla euismod turpis a lacinia sagittis. Maecenas velit diam, vehicula vel tortor id, tristique euismod tortor. Cras ac.</p>
        <hr className='service-hr'/>
        <p className="service-text2">Quisque luctus feugiat dui eget malesuada. Donec rutrum, nibh vel lobortis placerat, leo enim feugiat arcu, ornare imperdiet urna sem vitae tellus.</p>
        <button className="btn-next"><Link className="link-decoration" to="#contact">Contact</Link></button>
      </div>

      <div className="about-section2">
        <img className="about-img1-style" src={img3} alt="" />
      </div>
    </div>
  )
}

export default About
