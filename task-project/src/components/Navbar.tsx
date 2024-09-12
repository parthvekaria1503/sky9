// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

  return (
    <div className="stickey">
      <nav>
        <ul className="flexible">
          <li>
            <Link to="/" className="main-logo">Introduction</Link>
          </li>
          <li>
            <a className="link-decoration" href="#service">Services</a>
          </li>
          <li>
            <Link className="link-decoration" to="/products">Products</Link>
          </li>
          <li>
            <a className="link-decoration" href="#about">About</a>
          </li>
          <li>
            <Link className="link-decoration" to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;