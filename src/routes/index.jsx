import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Products from "../containers/Products";
import Categories from "../containers/Categories";

import Layout from "../components/layout";
import { ROUTES as ROUTES_ } from "./data";
export default function Routing() {
  return (
    <Layout>
      <Routes>
        <Route exact path={ROUTES_.home} element={<Home />} />
        <Route path={ROUTES_.products} element={<Products />} />
        <Route path={ROUTES_.categories} element={<Categories />} />
      </Routes>
    </Layout>
  );
}
