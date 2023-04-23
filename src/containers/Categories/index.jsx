import { useDispatch, useSelector } from "react-redux";
import Categories from "../../components/categories";
import { useEffect, useState } from "react";
import { setCategoriesStore } from "../../store/storeData/actions";
export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const [isLoadingCategories, setCategoriesLoading] = useState(false);

  const { categories } = useSelector((state) => state.storeData);

  useEffect(() => {
    dispatch(setCategoriesStore(setCategoriesLoading));
  }, []);

  return (
    <Categories
      isLoadingCategories={isLoadingCategories}
      categories={categories || []}
    />
  );
}
