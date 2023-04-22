import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";

import Layout from "../components/layout";
import { ROUTES } from "./data";
export default function Routing() {
  return (
    <Layout>
      <Routes>
        <Route exact path={ROUTES.home} element={<Home />} />
      </Routes>
    </Layout>
  );
}
