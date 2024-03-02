/* eslint-disable react/prop-types */

import styles from "./productList.module.css";
import { Link } from "react-router-dom";
import { Button } from "../index";

import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div key={product.id} className={styles.productItem}>
      <Link to={`/products/${product.id}`}>
        <div className={styles.productImage}>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className={styles.bottom}>
          <span className={styles.title}>{product.title}</span>
          <span className={styles.price}>₹{product.price}</span>
        </div>
      </Link>
      <div className={styles.buttonContainer}>
        <Button title="ADD TO CART" onClick={() => handleAddToCart(product)} />
      </div>
    </div>
  );
};
export default ProductItem;
