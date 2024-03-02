import { Link } from "react-router-dom";
import { Button } from "../components";
import style from "./cart.module.css";

const EmptyCart = () => {
  return (
    <div className={style.empty}>
      <img src={"/shopping.png"} alt="Empty Cart" />
      <Link to="/">
        <Button title="Explore Products"></Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
