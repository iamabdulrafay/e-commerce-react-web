import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
// import Product from "./components/Product.jsx";
import Login from "./components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCaterogary from "./components/ProductCaterogary.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ProductList from "./components/ProductList.jsx";
import AddtoCart from "./components/AddtoCart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/:id" element={<ProductCaterogary />} />
      <Route path="/:lid" element={<ProductList />} />
      <Route path="/:id/:pid" element={<ProductDetails />} />
      <Route path="/cart" element={<AddtoCart />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
