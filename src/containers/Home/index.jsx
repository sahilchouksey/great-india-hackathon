import { useDispatch, useSelector } from "react-redux";
import Home from "../../components/home";
import { useEffect, useState } from "react";
import {
  setCategoriesStore,
  setProductsStore,
} from "../../store/storeData/actions";

export default function HomeContainer() {
  const dispatch = useDispatch();
  const [isLoadingCategories, setCategoriesLoading] = useState(false);
  const [isLoadingProducts, setProductsLoading] = useState(false);

  const { categories, products } = useSelector((state) => state.storeData);

  useEffect(() => {
    dispatch(setCategoriesStore(setCategoriesLoading));
    dispatch(setProductsStore(setProductsLoading));
  }, []);

  return (
    <Home
      isLoadingCategories={isLoadingCategories}
      isLoadingProducts={isLoadingProducts}
      products={products}
      categories={categories}
    />
  );
}
