import ImageSection from "./components/ImageSection";
import ProductDetails from "./Product";
import data from "../../assets/shared/data.json";
import styles from "./styles.module.scss";
import Showcase from "../../components/ui/showcase";

export default function Product() {
  const productData = data.product;
  return (
    <div className="d-flex justify-content-center align-items-start flex-column">
      <div className={styles.Product_Container}>
        <ImageSection images={productData.images} />
        <ProductDetails product={productData} />
      </div>
      <div className={`w-100 ${styles.Product_similar_container}`}>
        <Showcase
          containerClassName="mt-5 w-100"
          title="Similar Products"
          type="products"
          items={data.products}
          hideShowAll
        />
      </div>
    </div>
  );
}
