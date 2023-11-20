import styles from './card.module.css';

interface Props {
  title: string;
}

const Card = ({title}: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardFlag}>
        <img src="https://picsum.photos/id/237/300/300" alt="placeholder" />
      </div>
      <div className={styles.cardName}>
        {title}
      </div>
    </div>
  );
};

export default Card;