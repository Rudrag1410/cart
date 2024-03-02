import { Link } from "react-router-dom";
import styles from "./comingSoon.module.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
const ComingSoon = () => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Will be Coming Soon.</span>
      <div className={styles.icons}>
        <Link
          to="https://www.linkedin.com/in/rudra1410/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin />
        </Link>
        <Link
          to="https://github.com/rudrag1410"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.instagram.com/_rudra._14/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
