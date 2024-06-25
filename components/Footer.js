import styles from './Footer.module.scss';
import SVG from "./SVG";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.nav}>
        <SVG svg="/house.svg" text="Home" />
        <SVG svg="/heart.svg" text="Favourite" />
        <div className={styles.walletContainer}>
          <div className={styles.walletIcon}>
            <img src="/wallet.svg" alt="Home" />
          </div>
          <div className={styles.walletText}>Wallet</div>
        </div>
        <SVG svg="/discount.svg" text="Offer" />
        <SVG svg="/user.svg" text="Profile" />
      </div>
    </div>
  );
};

export default Footer;