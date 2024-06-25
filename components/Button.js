import Link from "next/link";
import styles from './Button.module.scss';

const Button = ({ href, text, className }) => {
  return (
    <Link 
      href={href} 
      className={`${styles.button} ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;