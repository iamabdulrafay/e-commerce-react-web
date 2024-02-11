import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "./Search";

const ProductList = ({ ProductsList }) => {
  console.log(ProductsList);
  const [ProductApi, setProductApi] = useState([]);
  // const { id } = useParams();

  const product = async () => {
    const { data } = await api(`https://dummyjson.com/products/category/${id}`);
    setProductApi(data.products);
  };

  useEffect(() => {
    product();
  }, []);

  if (ProductsList && Array.isArray(ProductsList)) {
    return (
      <ul className="absolute text-black bg-white   w-[50vw] lg:w-[20vw] md:w-[30vw] sm:w-[40vw] z-[9] ">
        {" "}
        {ProductsList.map((product) => (
          <>
            <div className="d-flex items-center  justify-evenly gap-[1vw] mb-[2vw] mt-[5vw] px-[2vw] ">
              <img src={product.thumbnail} alt="" className="w-[5vw]" />
              <Link
                to={`/${product.category}`}
                className=" no-underline text-black  py-4 text-center mb-3 d-flex items-center  justify-center flex-col"
                key={product.id}>
                {product.title}
              </Link>
            </div>
          </>
        ))}
      </ul>
    );
  } else {
    return <h1 className="text-[3vw]">Not available</h1>;
  }
};

export default ProductList;
