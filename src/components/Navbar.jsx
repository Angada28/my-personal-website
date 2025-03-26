import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="home" className="navbar-logo" smooth={true} duration={500} onClick={closeMenu}>
          <img
            src={isDarkMode ? "/favicon-dark.ico" : "/favicon.ico"}
            alt="Logo"
            className="navbar-logo-icon"
          />
          <span>AH</span>
        </Link>

        <div className="nav-actions">
          <ThemeToggle />

          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to} className="nav-item">
              <Link
                to={link.to}
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;