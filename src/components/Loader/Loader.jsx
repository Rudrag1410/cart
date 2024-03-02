import styles from "./loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
