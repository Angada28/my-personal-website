import NavBar from '../components/Navbar';
import '../styles/globals.css';

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.title = "Angad Harish"
  }, [])
  
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
