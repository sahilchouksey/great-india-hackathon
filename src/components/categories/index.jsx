import data from "../../assets/shared/data.json";
import Showcase from "../ui/showcase";

export default function Categories(props) {
  return (
    <>
      <Showcase
        containerClassName={"mt-5"}
        title="Product Categories"
        type="categories"
        items={data.categories}
        hideShowAll
      />
    </>
  );
}
