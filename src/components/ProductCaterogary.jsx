import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { api } from "../hook/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SaleCard from "./SaleCard";

const ProductCaterogary = () => {
  const [ProductApi, setProductApi] = useState([]);
  const { id } = useParams();

  const product = async () => {
    const { data } = await api(`https://dummyjson.com/products/category/${id}`);
    setProductApi(data.products);
  };
  console.log("data", ProductApi);

  useEffect(() => {
    product();
  }, [id]);

  return <SaleCard ProductApi={ProductApi} id={id} />;
};

export default ProductCaterogary;
