import {useRef, useState, useEffect } from 'react';
import img4 from '../assets/forth-image.jpg'
import '../App.css'


function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Function to handle button click and store data in localStorage
  const handleSave = () => {
    const user = { name, email, message };
    localStorage.setItem('user', JSON.stringify(user));
    alert('User data saved!');

    // Clear the input fields
    setName('');
    setEmail('');
    setMessage('');
  };

  // Load saved data from localStorage when the component mounts
  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      setName(user.name || '');
      setEmail(user.email || '');
      setMessage(user.message || '');
    }
  }, []);

  const contactRef = useRef(null);

  return (
    <div className="about-item" ref={contactRef}>
      <div className="about-section1">
        <p className="item-text1">Contact Us</p>
        <p className="service-text2">Pellentesque nec dui pellentesque, fermentum turpis eu, facilisis libero. Vestibulum fringilla nulla augue, at consequat metus facilisis condimentum.</p>
        <div className='form'>
          <form>
            <fieldset className='fieldset'>
              <div className='inputstyle'>
                <input className='inputtype' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
              </div>
              <div className='inputstyle'>
                <input className='inputtype' type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className='inputstyle'>
                <textarea className='inputtype' value={message} placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button className="btn-send" type="button" onClick={handleSave}>Send</button>
            </fieldset>
            </form>
        </div>
        <p className='copyright'>Copyright 2045 Vertex Company - Design: Tooplate</p>
      </div>

      <div className="about-section2 mapinimage">
        <img className="img1-style-contact" src={img4} alt="" />
        <div className="responsive-map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.6221882978507!2d-98.48650795000005!3d29.421653200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf08a9ad66f03e879!2sHenry+B.+Gonzalez+Convention+Center!5e0!3m2!1sen!2sus!4v1393884854786" className='iframe'></iframe>

        </div>
      </div>
    </div>
  )
}

export default Contact
