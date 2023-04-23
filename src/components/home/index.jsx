import Showcase from "../ui/showcase";
import data from "../../assets/shared/data.json";

function Home({
  isLoadingCategories,
  isLoadingProducts,
  products,
  categories,
}) {
  return (
    <>
      <div>
        <Showcase
          isLoading={isLoadingCategories}
          containerClassName={"mt-5"}
          title="Categories"
          type="categories"
          items={categories}
        />
      </div>
      <div>
        <Showcase
          isLoading={isLoadingProducts}
          containerClassName={"mt-8"}
          title="Products"
          type="products"
          items={products}
        />
      </div>
    </>
  );
}

export default Home;
