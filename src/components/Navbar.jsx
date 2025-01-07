import { useState } from "react";
import { Link, animateScroll } from "react-scroll";
import "./Navbar.css";

function Navbar({ toggleTheme, theme }) {
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

  const handleToggleTheme = () => {
    toggleTheme();
    removeActive();
  };

  return (
    <>
      <nav className={`navbar ${isActive ? "active" : ""} ${theme}`}>
        <a
          className="navLink"
          onClick={() => {
            removeActive();
            scrollToTop();
          }}
        >
          Angad Harish
        </a>
        <div className={`navMenu ${isActive ? "active" : ""} ${theme}`}>
          <Link
            to={"about"}
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
          <button className="theme-toggle" onClick={handleToggleTheme}>
            Toggle to {theme === "dark" ? "light" : "dark"} mode
          </button>
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