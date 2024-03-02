/* eslint-disable react/prop-types */
import styles from "./button.module.css";

const Button = ({ title, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
