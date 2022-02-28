import Image from 'next/image';

import styles from '../styles/card.module.css';

const Card = ({ title, imgSrc, content, link }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <Image src={imgSrc} alt="project image" width={400} height={200} />
      <p className={styles.content}>{content}</p>
      <a className={styles.link} href={link} rel="noopener noreferrer" target="_blank">View Repository</a>

    </div>
  );
};

export default Card;
