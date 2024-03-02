import { ProductList } from "./components";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <ProductList />
    </div>
  );
};

export default App;
