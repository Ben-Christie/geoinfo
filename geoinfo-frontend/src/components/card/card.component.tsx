import styles from './card.module.css';

interface Props {
  title: string;
  flag: string;
  description: string;
}

const Card = ({title, flag, description}: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardFlag}>
        <img src={flag} alt={description} />
      </div>
      <div className={styles.cardName}>
        {title}
      </div>
    </div>
  );
};

export default Card;