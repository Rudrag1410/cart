/* eslint-disable react/prop-types */
import styles from "./error.module.css";
const Error = () => {
  return (
    <div className={styles.root}>
      <img src={"/error.png"} alt="Error Page" />
      <p>Error occur while Fetching the Products .</p>
    </div>
  );
};

export default Error;
