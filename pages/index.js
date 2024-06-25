import Image from "next/image";
import Link from "next/link";
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <main className={styles['home-main']}>
      <div className={styles['skip-button']}>
        Skip
      </div>

      <div className={styles.content}>
        <Image src={"hero.svg"} height={100} width={100} className={styles['hero-image']} />
        <div className={styles['text-container']}>
          <h1>Anywhere you are</h1>
          <div className={styles.description}>
            Sell houses easily with the help of Listenoryx and to make this line big
            <p>I am writing more.</p>
          </div>
        </div>
      </div>

      <div className={styles['progress-circle']}>
        <div className={styles.background}></div>
        <div className={styles.progress} />
        <div className={styles['inner-circle']}>
          <Link href={"/profile"} className={styles.link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}