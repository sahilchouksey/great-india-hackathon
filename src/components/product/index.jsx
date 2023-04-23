import ImageSection from "./components/ImageSection";
import ProductDetails from "./Product";
import styles from "./styles.module.scss";
import Showcase from "../../components/ui/showcase";

import data from "../../assets/shared/data.json";

export default function Product({
  productData,
  isSimilarProductsLoading,
  similarProducts,
}) {
  // productData = data.product
  return (
    <div className="d-flex justify-content-center align-items-start flex-column">
      <div className={styles.Product_Container}>
        <ImageSection images={productData?.images} />
        <ProductDetails product={productData} />
      </div>
      <div className={`w-100 ${styles.Product_similar_container}`}>
        {similarProducts && similarProducts.length > 0 && (
          <Showcase
            isLoading={isSimilarProductsLoading}
            containerClassName="mt-5 w-100"
            title="Similar Products"
            type="products"
            items={similarProducts || []}
            hideShowAll
          />
        )}
      </div>
    </div>
  );
}
