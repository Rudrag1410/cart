import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./productList.module.css";
import ProductItem from "./ProductItem";
import { Error, Loader } from "../index";

const fetchProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response?.data?.products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

const ProductList = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.root}>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
