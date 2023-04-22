import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Products from "../containers/Products";
import Product from "../containers/Product";
import Categories from "../containers/Categories";
import Category from "../containers/Category";
import Search from "../containers/Search";
import Login from "../containers/Login";

import Layout from "../components/layout";
import { ROUTES } from "./data";


export default function Routing() {
  return (
    <Layout>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route exact path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.products} element={<Products />} />
        <Route path={ROUTES.categories} element={<Categories />} />
        <Route path={ROUTES.product} element={<Product />} />
        <Route path={ROUTES.category} element={<Category />} />
        <Route path={ROUTES.search} element={<Search />} />

        {/* AUTHENTICATION PAGES */}
        <Route path={ROUTES.login} element={<Login />} />
      </Routes>
    </Layout>
  );
}
