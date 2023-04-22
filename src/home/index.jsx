import Showcase from "../ui/showcase";
import data from "../assets/shared/data.json";
function Home() {
  return (
    <>
      <div>
        <Showcase
          containerClassName={"mt-5"}
          title="Categories"
          type="categories"
          items={data.categories}
        />
      </div>
      <div>
        <Showcase
          containerClassName={"mt-8"}
          title="Products"
          type="products"
          items={data.products}
        />
      </div>
    </>
  );
}

export default Home;
