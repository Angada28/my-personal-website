import React, { useState, useEffect } from "react";
import { FaRandom, FaLightbulb } from "react-icons/fa";
import "./RandomFacts.css";

const RandomFacts = () => {
  const facts = [
    "I've made over 300 origami models.",
    "I am not a dark mode purist.",
    "I have a nationaldex in pokemon.",
    "I can play trumpet and violin.",
    "I enjoy cooking new meals.",
    "I don't trust hard drives.",
    "I enjoy the cold.",
    "I'm a vegetarian.",
    "I love pizza.",
    "C# was the first language I learned.",
    "I listen to almost any type of music.",
    "I enjoy messing around with linux.",
    "I have built my own Desktop.",
    "I have had a laptop die on me.",
    "My go to show is Futurama.",
    "I recommend the 2 minute rule to overcome procrastination",
  ];

  const [currentFact, setCurrentFact] = useState("");
  const [animation, setAnimation] = useState(false);

  // Set initial random fact
  useEffect(() => {
    getRandomFact();
  }, []);

  const getRandomFact = () => {
    setAnimation(true);
    setTimeout(() => {
      let newFact;
      do {
        newFact = facts[Math.floor(Math.random() * facts.length)];
      } while (newFact === currentFact && facts.length > 1);

      setCurrentFact(newFact);
      setAnimation(false);
    }, 500);
  };

  return (
    <div className="random-facts">
      <h2 className="section-title">Random Facts About Me</h2>

      <div className="facts-container">
        <div className="fact-icon">
          <FaLightbulb />
        </div>

        <div className={`fact-content ${animation ? "fade-out" : "fade-in"}`}>
          <p>{currentFact}</p>
        </div>

        <button className="fact-button" onClick={getRandomFact}>
          <FaRandom />
          <span>New Fact</span>
        </button>
      </div>
    </div>
  );
};

export default RandomFacts;
