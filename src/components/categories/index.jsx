import data from "../../assets/shared/data.json";
import Showcase from "../ui/showcase";

export default function Categories({ isLoadingCategories, categories }) {
  return (
    <>
      <Showcase
        containerClassName={"mt-5"}
        title="Product Categories"
        type="categories"
        isLoading={isLoadingCategories}
        items={categories}
        hideShowAll
      />
    </>
  );
}
