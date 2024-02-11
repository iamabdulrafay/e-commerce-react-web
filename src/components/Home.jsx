import React, { useEffect, useState } from "react";

import SalePage from "./SalePage";
import ProductCaterogary from "./ProductCaterogary";
import SaleCard from "./SaleCard";
import { api } from "../hook/api";
import { delay, motion, stagger } from "framer-motion";

const Home = () => {
  const [ProductApi, setProductApi] = useState([]);
  // const { lid } = useParams();
  // const [Off, setOff] = useState(1200);
  const product = async () => {
    const { data } = await api(
      "https://dummyjson.com/products?limit=12&skip=2&select=title,price,rating"
    );
    setProductApi(data.products);
  };

  useEffect(() => {
    product();
  }, []);
  // console.log("home", ProductApi);
  return (
    <>
      <div className="main   w-screen h-[80vh] lg:h-screen md:h-[80vh] ">
        <div className="flex lg:flex-row md:flex-row  flex-col items-center justify-between w-screen">
          {/* left side  */}
          <div className="left lg:w-1/3  md:w-1/3   w-[100vw] flex flex-col items-center justify-center lg:h-screen  md:h-screen h-[50vh] sm:h-[30vh]">
            <div className="contentc flex flex-col  items-start justify-center  px-[3vw]">
              <h1 className="text-black ">
                Welcome to{" "}
                <span className="text-orange-800  ">Shopping Wala</span>!
                Discover Your Perfect Find Today!{" "}
              </h1>
              <p className="text-2xl">
                referesh your style ,try new trends,its time to cozy your
                closest sustainablity and on a budget of course
              </p>
              {/* <Link className="bg-orange-700 inline-block py-[0.6vw] px-[1.3vw] text-2xl   text-white">
                {" "}
                shop now →
              </Link> */}
            </div>
          </div>
          {/* right side  */}
          <div className="right w-auto lg:h-[86vh] sm:h-[36vh] md:h-[50vh] h-[10vh] flex lg:flex-row sm:flex-row md:flex-row flex-col items-end px-4">
            {/* right flex column */}
            {/* first */}
            <div className="w-auto lg:h-[32vw] md:h-[32vh] sm:h-[32vw] h-[10vh] flex lg:flex-col sm:flex sm:flex-col md:flex md:flex-col items-center justify-center">
              <div className="lg:w-[19vw] border-3 sm:w-[19vw]  md:w-[19vw] lg:h-[17vw]">
                <motion.img
                  initial={{ width: 0 }}
                  animate={{ width: "19vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 2,
                  }}
                  src="https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg"
                  alt=""
                  className="w-full h-auto" // Adjusted class
                />
              </div>

              <div className="w-[19vw] border-3 h-[17vw] overflow-hidden">
                <motion.img
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 2,
                  }}
                  src="https://shopgroove.pk/cdn/shop/products/S01e7c5c3f5bf4632b8e94d2d73cd6f6e5_jpg_640x640Q90_jpg.jpg?v=1664899580"
                  alt=""
                  className="w-full h-auto" // Adjusted class
                />
              </div>
            </div>
            {/* second */}
            <div className="w-auto lg:h-screen md:h-[50vh] sm:h-[30vw]  flex lg:flex-col sm:flex sm:flex-col   md:flex md:flex-col items-center justify-center">
              <div className="w-[19vw] border-3 h-[17vw]">
                <motion.img
                  initial={{ width: 0 }}
                  animate={{ width: "19vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 2,
                  }}
                  src="https://www.91-img.com/gallery_images_uploads/d/e/de8d66ea3666bd222e40da58623e02b8457adac6.JPG?tr=h-630,c-at_max,q-80"
                  alt=""
                  className="w-full h-auto" // Adjusted class
                />
              </div>
              <div className="w-[19vw] border-3 h-[17vw] overflow-hidden ">
                <motion.img
                  initial={{ width: 0 }}
                  animate={{ width: "19vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 2,
                  }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="w-[19vw] h-[17vw]"
                />
              </div>
            </div>
            {/* third  */}
            <div className="w-auto  flex lg:flex-col sm:flex sm:flex-col md:flex md:flex-col  items-center justify-center ">
              <div className="w-[19vw]  border-3 h-[17vw] ">
                <motion.img
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 2,
                  }}
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1678399272-filmfinal-45_704x1056.jpg?crop=1.00xw:1xh;center,top&resize=980:*"
                  alt=""
                  className="w-[19vw] h-[17vw]"
                />
              </div>
              <div className="w-[19vw] border-3 h-[17vw]  overflow-hidden ">
                <motion.img
                  initial={{ width: 0 }}
                  animate={{ width: "19vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 2,
                  }}
                  src="https://media.gq.com/photos/636ac1edd436f6d234f8986c/1:1/w_1550,h_1550,c_limit/GQB_Fragrance_Digital_16x9.jpg"
                  alt=""
                  className="w-[20vw] h-[17vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SalePage></SalePage>
      <ProductCaterogary></ProductCaterogary>
      <SaleCard ProductApi={ProductApi}></SaleCard>
    </>
  );
};

export default Home;
