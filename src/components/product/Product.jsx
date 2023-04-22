import styles from "./styles.module.scss";
import ProductHeader from "./components/ProductHeader";
import ProductReviews from "./components/ProductReviews";

export default function ProductDetails({ product }) {
  return (
    <div className={`${styles.Product} d-flex flex-column`}>
      <ProductHeader product={product} />
      <ProductReviews product={product} />
    </div>
  );
}
