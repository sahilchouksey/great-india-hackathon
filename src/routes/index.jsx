import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Products from "../containers/Products";
import Categories from "../containers/Categories";

import Layout from "../components/layout";
import { ROUTES } from "./data";
export default function Routing() {
  return (
    <Layout>
      <Routes>
        <Route exact path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.products} element={<Products />} />
        <Route path={ROUTES.categories} element={<Categories />} />
      </Routes>
    </Layout>
  );
}
