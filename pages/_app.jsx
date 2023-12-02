/*import NavBar from '../components/Navbar';
import '../styles/globals.css';

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.title = "Angad Harish"
  }, [])
  
  return (
    <div>
      /<NavBar />
      <Component {...pageProps} />
    </div>
    <div><Test></Test></div>
  );
}

export default MyApp;
*/

// pages/_app.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import '../styles/App.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.title = 'Angad Harish';
  }, []);

  return (
    <div className="app">
     (
        <nav className="floating-navbar">
          <ul >
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#duality-of-free-services">Duality of Free Services</a></li>
            <li><a href="#privacy-violation">How Your Privacy Is Violated</a></li>
            <li><a href="#protect-yourself">How To Protect Yourself</a></li>
            <li><a href="#concluding-remarks">Concluding Remarks</a></li>
          </ul>
        </nav>
      )

      <Home/>
    </div>
  );
}

export default MyApp;
