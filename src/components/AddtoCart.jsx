import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Modal } from "antd";
import ModalWindow from "./ModalWindow";
const AddtoCart = () => {
  const { state } = useLocation();
  const [cartItem, setCartItem] = useState({});

  const [cartCount, setCartCount] = useState(1);

  const [modalisvisible, setModalisvisible] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  useEffect(() => {
    if (state && state.state.foundItem) {
      setCartItem(state.state.foundItem);
    }
  }, [state]);
  const handleDecrease = () => {
    if (cartCount > 1) {
      const newCount = cartCount - 1;
      const newPrice = (cartItem.price / cartCount) * newCount;
      setCartCount(newCount);
      setCartItem({ ...cartItem, price: newPrice });
    }
  };

  const handleIncrease = () => {
    const newCount = cartCount + 1;
    const newPrice = (cartItem.price / cartCount) * newCount;
    setCartCount(newCount);
    setCartItem({ ...cartItem, price: newPrice });
  };
  const handleCheckout = () => {
    setModalisvisible(true);
  };

  const handlecloseModal = () => {
    setModalisvisible(false);
  };
  if (cartItem) {
    return (
      <div>
        <div className="container  mx-auto mt-10">
          <div className="lg:flex lg:flex-row  md:flex md:flex-row sm:flex sm:flex-row flex flex-col items-center justify-center shadow-md my-10">
            <div className="lg:w-3/4 md:w-4/5 sm:w-full bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cartCount} items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase lg:w-2/5 md:w-2/5 sm:w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase lg:w-1/5 md:w-1/5 sm:w-1/5">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase lg:w-1/5 md:w-1/5 sm:w-1/5">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase lg:w-1/5 md:w-1/5 sm:w-1/5">
                  Total
                </h3>
              </div>
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex lg:w-2/5 md:w-2/5 sm:w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src={`https://cdn.dummyjson.com/product-images/${cartItem.id}/1.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{cartItem.title}</span>
                    <span className="text-red-500 text-xs">
                      {cartItem.brand}
                    </span>
                    <a
                      href="#"
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs">
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex justify-center lg:w-1/5 md:w-1/5 sm:w-1/5">
                  <button
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                    onClick={handleDecrease}>
                    -
                  </button>
                  <input
                    className="mx-2 border text-center w-8 cursor-pointer"
                    type="text"
                    value={cartCount}
                  />
                  <button
                    className="fill-current text-gray-600 w-3"
                    onClick={handleIncrease}>
                    +
                  </button>
                </div>
                <span className="text-center lg:w-1/5 md:w-1/5 sm:w-1/5 sm:overflow-hidden font-semibold text-sm">
                  ${cartItem.price}
                </span>
                <span className="text-center lg:w-1/5 md:w-1/5 sm:w-1/5 sm:opacity-[1] md:opacity-[1] lg:opacity-[1] opacity-[0]    font-semibold text-sm">
                  ${cartItem.price}
                </span>
              </div>
              <Link
                to="/"
                className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" className="lg:w-1/4 md:w-1/5 sm:w-1/5 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  {cartCount}
                </span>
                <span className="font-semibold text-sm">${cartItem.price}</span>
              </div>

              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  for="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase">
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${cartItem.price}</span>
                </div>
                <div className="w-1/4 px-8 py-10 mx-auto">
                  <button
                    onClick={handleCheckout}
                    className="bg-red-500  hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                    checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <ModalWindow
          handleCheckout={handleCheckout}
          handlecloseModal={handlecloseModal}
          modalisvisible={modalisvisible}></ModalWindow>
      </div>
    );
  } else {
    return <h1>No item in cart</h1>;
  }
};

export default AddtoCart;
