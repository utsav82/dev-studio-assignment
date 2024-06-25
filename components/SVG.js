import styles from './SVG.module.scss';

const SVG = ({ href, svg, text }) => {
  return (
    <div className={styles.container}>
      <img src={svg} alt={text} className={styles.icon} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default SVG;