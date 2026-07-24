import React from "react";
import { Link } from "react-router-dom";
// import bannerImg from "../assets/product-details-banner.png";

const ProductDetailsHero = () => {
  return (
    <section className="relative h-[260px] md:h-[300px] lg:h-[360px] overflow-hidden bg-gradient-to-r from-white via-orange-50 to-orange-100 flex items-center">
      {/* Background Circle */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-200/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center">

          {/* Left Content */}
          <div className="z-10">
            <div className="flex items-center gap-3 mb-2 sm:mb-4">
              <span className="w-10 h-[2px] bg-orange-500"></span>

              <span className="uppercase tracking-[3px] text-sm font-semibold text-orange-500">
                Product Details
              </span>

              <span className="w-10 h-[2px] bg-orange-500"></span>
            </div>

            <h1 className="text-2xl xl:text-4xl font-extrabold leading-tight text-primary-dark">
              Premium Grocery Products
            </h1>

            <p className="mt-3 sm:mt-6 text-sm text-gray-600 sm:text-lg leading-7 sm:leading-8 max-w-xl">
              Explore detailed information about our premium wholesale grocery
              products including specifications, pricing, packaging, and
              minimum order quantity.
            </p>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-3 sm:mt-8 text-sm">
              <Link to="/" className="text-gray-500 hover:text-orange-500 cursor-pointer">
                Home
              </Link>

              <i className="fa-solid fa-angle-right text-xs text-gray-400"></i>

              <Link to="/products" className="font-semibold text-orange-500">
                Products
              </Link>

              <i className="fa-solid fa-angle-right text-xs text-gray-400"></i>

              <span to="/products" className="font-semibold text-orange-500">
                Product Details
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative  lg:flex justify-end">
            {/* Decorative Circle */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-orange-200/50"></div>

            {/* Replace with your grocery banner image */}
            {/* <img
              src={bannerImg}
              alt="Wholesale Grocery"
              className="relative z-10 w-[520px] object-contain"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsHero;