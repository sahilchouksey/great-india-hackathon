import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";

import Layout from "../components/layout";
import { ROUTES as ROUTES_ } from "./data";
export default function Routing() {
  return (
    <Layout>
      <Routes>
        <Route exact path={ROUTES_.home} element={<Home />} />
      </Routes>
    </Layout>
  );
}
