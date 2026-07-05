import React from "react";

const ProductsHero = () => {
  return (
    <section className="relative h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden bg-gradient-to-r from-white via-gray-50 to-orange-50 flex items-center">
      {/* Background Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-orange-100 rounded-full blur-3xl opacity-70 -translate-y-20 translate-x-20"></div>

      <div className="relative max-w-7xl mx-auto w-full px-5">
        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-10">
          {/* Left Content */}
          <div>
            {/* Small Heading */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 md:w-10 h-[2px] bg-orange-500"></span>

              <span className="uppercase text-orange-500 text-xs md:text-sm tracking-[3px] font-semibold">
                Shop
              </span>

              <span className="w-8 md:w-10 h-[2px] bg-orange-500"></span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#183153] leading-tight">
              Our Products
            </h1>

            {/* Description */}
            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-lg leading-6 md:leading-7">
              Quality grocery products in bulk at the best wholesale prices.
              We offer a wide variety of trusted brands for retailers,
              restaurants and businesses.
            </p>

            {/* Button */}
            
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:flex justify-end">
            {/* Decorative Circle */}
            <div className="absolute w-[340px] h-[340px] bg-orange-100 rounded-full"></div>

            {/* Product Image */}
            
            <img
              src="/images/products/product-hero.png"
              alt="Wholesale Grocery Products"
              className="relative z-10 w-[500px] object-contain"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;