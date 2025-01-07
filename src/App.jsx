import { useState, useEffect } from "react";
import "./App.css";
import { Contact, Projects, Experience, Hero, Navbar, About } from "./components";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="main-content">
        <div id="hero" className="section">
          <Hero />
        </div>
        <div id="about" className="section">
          <About />
        </div>
        <div id="experience" className="section">
          <Experience />
        </div>
        <div id="projects" className="section">
          <Projects />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;