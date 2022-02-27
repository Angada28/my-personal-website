/* eslint-disable react/no-unescaped-entities */
import Button from '../components/Button';

import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <p>
        Hi there, my name is Angad Harish.
        <br />
        <br />
        Who Am I?
        <br />
        <br />
        I am a third year computer science students at the University of Toronto. I am someone who enjoys puzzles and solving problems. 
        But I enjoy making origami and computer science more specifically. 
        <br />
        <br />
        This website is here to provide an overview of the things I have done. New projects will be added. Please have a look around and let me know if ther is anything I can improve on.
        <br />
        <br />
        Hopefully you find my work.
      </p>
      <Button path="Projects">Projects</Button>
    </div>
  );
};

export default About;
