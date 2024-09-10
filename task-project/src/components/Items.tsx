import React, {useRef} from "react";
import img1 from "../assets/first-image.jpg";
import item1 from "../assets/item1.jpg"
import item2 from "../assets/item2.jpg"
import item3 from "../assets/item3.jpg"
import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";

function Items() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const Home = () => <h2></h2>;
  return (
    <div className="main-item">
      <div className="header">
        <Router>
          <div className="stickey">
            <nav>
              <ul className="flexible">
                <li>
                  <Link to="/" className="main-logo" onClick={() => scrollToSection(homeRef)}>
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link className="link-decoration" to="/" onClick={() => scrollToSection(servicesRef)}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="link-decoration" to="/Products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="link-decoration" to="/" onClick={() => scrollToSection(aboutRef)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="link-decoration" to="/" onClick={() => scrollToSection(contactRef)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
        <div >
          <div className="item-box">
              <div className="item-card">
                  <img src={item1} alt="" />
              </div>
              <div className="item-card">
                  <p className="item-text1">Vertex is the Free CSS Template</p>
                  <p className="item-text2">This is a Responsive HTML5 Template brought to you by Tooplate for 100% free of charge. You can feel free to download, modify, and use this layout for your websites.</p>
                  <p className="item-text3">Friday . 25 June 2045</p><br/><br/>
                  <hr className="hr-line"/>
              </div>
          </div>
          <div className="item-box">
              <div className="item-card">
                  <img src={item2} alt="" />
              </div>
              <div className="item-card">
                  <p className="item-text1">Vertex is the Free CSS Template</p>
                  <p className="item-text2">This is a Responsive HTML5 Template brought to you by Tooplate for 100% free of charge. You can feel free to download, modify, and use this layout for your websites.</p>
                  <p className="item-text3">Friday . 25 June 2045</p><br/><br/>
                  <hr className="hr-line"/>
              </div>
          </div>
          <div className="item-box" ref={homeRef}>
              <div className="item-card">
                  <img src={item3} alt="" />
              </div>
              <div className="item-card">
                  <p className="item-text1">Vertex is the Free CSS Template</p>
                  <p className="item-text2">This is a Responsive HTML5 Template brought to you by Tooplate for 100% free of charge. You can feel free to download, modify, and use this layout for your websites.</p>
                  <p className="item-text3">Friday . 25 June 2045</p><br/><br/>
                  <hr className="hr-line"/>
              </div>
          </div>
        </div>
        <button className="btn-next">Next Page</button>
      </div>
      <div className="item-section2">
        <img className="img1-style" src={img1} alt="" />
      </div>
    </div>
  );
}

export default Items;
