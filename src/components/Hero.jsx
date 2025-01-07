const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src="/placerholder.jpg" alt="Angad Harish" className="hero-image" />
        <div className="hero-text">
          <h3>Angad Harish</h3>
          <p>effect that changes text every few seconds</p>
          <p>University of Toronto</p>
          <p>Bachelors of Computer Science</p>
          <p>A software engineer with experience in backend engineering and full-stack web development. </p>
          <button>Random Fact about myself</button>
          {/*TODO: give random fact button its own styling */}
        </div>
      </div>
    </>
  );
};

export default Hero;