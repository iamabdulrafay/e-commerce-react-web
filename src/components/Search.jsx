import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../hook/api";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

const Search = () => {
  const [search, setSearch] = useState("");

  const [ProductsList, setProductsList] = useState([]);
  const handleSearch = async () => {
    const { data } = await api(
      `https://dummyjson.com/products/search?q=${search}`
    );

    setProductsList(data.products);
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <div>
      {/* <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search Product"
          className="me-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />
      </Form>
      {/* {search.length > 0 && <ProductList ProductsList={ProductsList} />}
       */}
      {search.length > 0 ? (
        ProductsList.length > 0 ? (
          <ProductList ProductsList={ProductsList} />
        ) : (
          <h1>No matching products found</h1>
        )
      ) : null}
    </div>
  );
};

export default Search;
