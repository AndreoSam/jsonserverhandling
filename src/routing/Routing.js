import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "../layout/header/Header";
import ViewProduct from "../components/Product/ViewProduct";
import AddProduct from "../components/Product/AddProduct";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<ViewProduct />} />
        <Route path="add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default Routing;
