import data from "../../assets/shared/data.json";
import Showcase from "../ui/showcase";

export default function Products({ products, isLoadingProducts }) {
  return (
    <>
      <Showcase
        isLoading={isLoadingProducts}
        containerClassName={"mt-5"}
        title="Products"
        type="products"
        items={products}
        hideShowAll
      />
    </>
  );
}
