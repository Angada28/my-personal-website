import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;