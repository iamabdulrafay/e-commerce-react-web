import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { api } from "../hook/api";

export default function SwiperSlider() {
  const [ProductApi, setProductApi] = useState([]);
  const product = async () => {
    const { data } = await api("https://dummyjson.com/products/categories");
    setProductApi(data);
  };

  useEffect(() => {
    product();
  }, []);
  console.log(ProductApi);
  return <></>;
}
