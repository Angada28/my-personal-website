import React from 'react';
import { Navbar, Hero, About, Experience, Projects, Contact, Footer } from './components';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about" className="section">
            <div className="container">
              <About />
            </div>
          </section>
          <section id="experience" className="section">
            <div className="container">
              <Experience />
            </div>
          </section>
          <section id="projects" className="section">
            <div className="container">
              <Projects />
            </div>
          </section>
          <section id="contact" className="section">
            <div className="container">
              <Contact />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;