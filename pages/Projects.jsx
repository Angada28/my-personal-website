import Card from '../components/Card';
import styles from '../styles/projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'Connect 4',
      imgSrc: '/connect4.png',
      content:
        'The classic connect 4 game.',
      link:
        'https://github.com/Angada28/connect4',
      
    },
    {
      title: 'Tic-tac-toe',
      imgSrc: '/tictactoe.png',
      content:
        'The classic game Tic-tac-toe',
      link:
        'https://github.com/Angada28/tic-tac-toe',
    },
    {
      title: 'Linear Algebra Calculator',
      imgSrc: '/matrix.png',
      content:
        'A python program that can calculate several linear algebra algorithms.',
      link:
        'https://github.com/Angada28/pyjac',
    },
    {
      title: 'My Personal Website',
      imgSrc: '/current_background.jpeg',
      content:
        'This repository contains the code used to build this very website.',
      link:
        'https://github.com/Angada28/my-personal-website',
      
    },
    
  ];

  return (
    <div className={styles.projects}>
      {projects.map((project, index) => (
        <Card key={index} title={project.title} imgSrc={project.imgSrc} content={project.content} link={project.link} />
      ))}
    </div>
  );
};

export default Projects;
