import { useState } from "react";
import { Link, animateScroll } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <nav className={`navbar ${isActive ? "active" : ""}`}>
        <button onClick={scrollToTop}>Angad Harish</button>
        <div className={`navMenu ${isActive ? "active" : ""}`}>
          <Link
            to={"hero"}
            smooth={true}
            duration={1000}
            offset={-50}
            className="navLink"
            onClick={removeActive}
          >
            About
          </Link>
          <Link
            to={"experience"}
            smooth={true}
            duration={1000}
            offset={-50}
            className="navLink"
            onClick={removeActive}
          >
            Experience
          </Link>
          <Link
            to={"projects"}
            smooth={true}
            duration={1000}
            offset={-50}
            className="navLink"
            onClick={removeActive}
          >
            Projects
          </Link>
          <Link
            to={"contact"}
            smooth={true}
            duration={1000}
            offset={-50}
            className="navLink"
            onClick={removeActive}
          >
            Contact
          </Link>
        </div>

        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleActiveClass}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
