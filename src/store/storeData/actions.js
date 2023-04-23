import axios from "../../axios";
import { setCategories, setProducts } from "./slice";
export function setProductsStore(setLoading) {
  return async function (dispatch) {
    try {
      setLoading(true);
      const { data: response } = await axios("/get/products");
      dispatch(setProducts(response.products));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      dispatch(setProducts([]));
    }
  };
}

export function setCategoriesStore(setLoading) {
  return async function (dispatch) {
    try {
      setLoading(true);
      const { data: response } = await axios("/get/categories");
      dispatch(setCategories(response.categories));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      dispatch(setCategories([]));
    }
  };
}
