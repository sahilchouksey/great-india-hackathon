import Showcase from "../ui/showcase";

export default function Category({ categoryName, products, ...props }) {
  return (
    <>
      <Showcase
        containerClassName={"mt-5"}
        title={`${categoryName || ""} Products`}
        type="products"
        items={products}
        hideShowAll
      />
    </>
  );
}
