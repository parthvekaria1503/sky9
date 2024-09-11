import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="stickey">
      <nav>
        <ul className="flexible">
          <li>
            <Link
              to="/"
              className="main-logo"
              onClick={() => scrollToSection(homeRef)}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              className="link-decoration"
              to="/"
              onClick={() => scrollToSection(servicesRef)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link className="link-decoration" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link
              className="link-decoration"
              to="/"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="link-decoration"
              to="/"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
