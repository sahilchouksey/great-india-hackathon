import { useParams } from "react-router-dom";
import Category from "../../components/category";

import data from "../../assets/shared/data.json";
export default function CateogryContainer() {
  const { categoryId } = useParams();
  // this data will come from api but for now we will use data.jaon
  const products = data.products.filter(
    (prod) => prod.categoryId == categoryId
  );
  const title = data.categories.find((cat) => cat.id == categoryId)?.title;
  //

  return <Category categoryName={`${title || ""}`} products={products} />;
}
