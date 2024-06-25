import styles from './Input.module.scss';

const Input = ({ type, id, name, placeholder, className }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;