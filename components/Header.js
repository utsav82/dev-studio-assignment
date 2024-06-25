import styles from './Header.module.scss';
import Link from "next/link";

const Header = ({ backLink, title }) => {
  return (
    <div className={styles.header}>
      <Link href={backLink} className={styles.backLink}>
        {"< Back"}
      </Link>
      {title && <div className={styles.title}>{title}</div>}
    </div>
  );
};

export default Header;