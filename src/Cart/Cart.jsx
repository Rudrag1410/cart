import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { Button } from "../components";
import style from "./cart.module.css";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  console.log(cartData);
  return (
    <div className={style.root}>
      <h2 className={style.title}>
        Your Cart{" "}
        {cartData.length === 0 ? "is Empty" : `has ${cartData.length} Product`}
      </h2>
      {cartData.length === 0 && <EmptyCart />}
      {cartData.map((cartItems) => (
        <div key={cartItems.id} className={style.cart}>
          <img src={cartItems.thumbnail} alt={cartItems.title} />
          <span className={style.name}>
            <span>Name </span>
            <span> {cartItems.title}</span>
          </span>
          <span className={style.name}>
            <span>Price </span>
            <span>₹ {cartItems.price}</span>
          </span>
          <div className={style.buttonWrapper}>
            <Button
              onClick={() => handleRemove(cartItems.id)}
              title="Remove Product"
            />
            <Link to="/">
              <Button title="Buy Now" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
