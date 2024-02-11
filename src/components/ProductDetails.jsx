import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const ProductDetails = () => {
  const { pid } = useParams();
  //   console.log(pid);
  const { state } = useLocation();
  const matchedItem = state.state.ProductApi;

  const foundItem = matchedItem.find((e) => e.id == pid);
  console.log("images", foundItem);
  if (foundItem) {
    return (
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <style>
          {`
          /* Custom styles for the Carousel arrows and timeline */
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            background-color: black;
          }

          .carousel-indicators {
            background-color: black;
          }
        `}
        </style>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0 order-2 lg:order-1">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {foundItem.title}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {foundItem.brand}
            </h1>
            <div className="flex mb-4">rating {foundItem.rating}</div>
            <p className="leading-relaxed">{foundItem.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              discount percentage {foundItem.discountPercentage}
            </div>
            <div className="flex lg:flex-row md:flex-row justify-center gap-3 sm:flex-row flex-col">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${foundItem.price}
              </span>

              <Link
                to="/cart"
                state={{ state: { foundItem: foundItem } }}
                className=" ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded">
                add to cart
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 order-1 lg:order-2">
            <Carousel slide={false}>
              {foundItem.images && foundItem.images.length > 0 ? (
                foundItem.images.map((e, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={e}
                      alt=""
                      className="lg:w-2/3 w-full object-cover object-center rounded border
        border-gray-200"
                    />
                  </Carousel.Item>
                ))
              ) : (
                <img
                  src={`https://cdn.dummyjson.com/product-images/${foundItem.id}/1.jpg`}
                  alt=""
                  className="lg:w-2/3 w-full object-cover object-center rounded border
    border-gray-200"
                />
              )}
            </Carousel>
          </div>
        </div>
      </section>
    );
  } else {
  }
  return <div></div>;
};

export default ProductDetails;
