import { useState, useEffect } from "react";
import "./App.css";
import { Contact, Projects, Experience, Hero, Navbar } from "./components";

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
      <Navbar />
      <div className="card">
        <button onClick={toggleTheme}>
          Toggle to {theme === "dark" ? "light" : "dark"} mode
        </button>
      </div>
      <div className="main-content">
        <div id="hero" className="section">
          <Hero />
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
