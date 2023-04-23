import Products from "../../components/products";
import data from "../../assets/shared/data.json";
import { useDispatch, useSelector } from "react-redux";
import { setProductsStore } from "../../store/storeData/actions";
import { useEffect, useState } from "react";
export default function ProductsContainer() {
  const dispatch = useDispatch();
  const [isLoadingProducts, setProductsLoading] = useState(false);

  const { products } = useSelector((state) => state.storeData);

  useEffect(() => {
    dispatch(setProductsStore(setProductsLoading));
  }, []);

  return (
    <Products isLoadingProducts={isLoadingProducts} products={products || []} />
  );
}
