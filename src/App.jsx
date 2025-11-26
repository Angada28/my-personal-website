import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Certificates,
  RandomFacts,
  Projects,
  Contact,
  Footer,
  NotFound,
} from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function HomePage() {
  return (
    <>
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
        <section id="certificates" className="section">
          <div className="container">
            <Certificates />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <RandomFacts />
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
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Redirect old URLs to homepage */}
            <Route path="/about" element={<HomePage />} />
            {/* 404 route - must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
