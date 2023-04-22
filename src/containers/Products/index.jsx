import Products from "../../components/products";
import data from "../../assets/shared/data.json";
export default function ProductsContainer() {
  // const { isLoading, error, data } = useHttp("/get/products", "GET");
  return <Products products={data.products || []} />;
}
