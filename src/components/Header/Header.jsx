import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.github}>
        LOGO
      </NavLink>
      <div className={styles.center}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.github : styles.content
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? styles.github : styles.content
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="https://github.com/Rudrag1410/cart"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.content}
        >
          Github Repo
        </NavLink>
      </div>
      <Link to="/cart" className={styles.cart}>
        <img src="/cart.svg" alt="cartIcon" />
        <p>{cartData.length}</p>
      </Link>
    </header>
  );
};

export default Header;
