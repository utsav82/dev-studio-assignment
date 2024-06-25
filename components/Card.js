import styles from './Card.module.scss';

const Card = ({ amount, text, className }) => {
  return (
    <button className={`${styles.card} ${className}`}>
      <div className={styles.amount}>{amount}</div>
      <div className={styles.text}>{text}</div>
    </button>
  );
};

export default Card;