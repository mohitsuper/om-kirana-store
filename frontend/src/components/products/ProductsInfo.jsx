import React from "react";
// import productImage from "../assets/products/fortune-oil.png"; // Replace later
import { useState } from "react";
const ProductInformation = ({ product }) => {
  const handleBuyNow = (product) => {
    const message = `Hello,

I want to place an order.
Image: ${product.image}
Product: ${product.name}
Quantity: ${product.weight}
Price: ₹${product.price}

Please share payment details.`;

    const whatsappUrl = `https://wa.me/916378494265?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };
  const [counter,setCounter] = useState(1);
  return (
    <section className="py-6 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-16">

          {/* Product Image */}
          <div>
            <div className="bg-gray-50 rounded-3xl sm:p-10 shadow-sm border overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:h-[450px] object-contain hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Product Information */}
          <div>

            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
              {product.category}
            </span>

            <h2 className=" mt-3 sm:mt-6 text-lg sm:text-xl font-bold text-dark">
              {product.name}
            </h2>

           

            <h3 className="text-4xl font-bold text-orange-500 mt-3 sm:mt-6">
              {product.price.toLocaleString()} &#8377;
            </h3>

            <p className="mt-3 sm:mt-6 text-sm text-gray-600 sm:text-lg leading-7 sm:leading-8 max-w-xl">
              {product.description}
            </p>

            <div className="border-t border-b py-4 sm:py-6 my-4 sm:my-8 space-y-4">

              <div className="flex justify-between">
                <span className="font-semibold">Brand</span>
                <span className="font-medium text-sm">{product.brand || "Not specified"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Category</span>
                <span className="font-medium text-sm">{product.category || "Not specified"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Packaging</span>
                <span className="font-medium text-sm">{product.packaging||"Not specified"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Minimum Order</span>
                <span className="font-medium text-sm">{product.minOrder || "Not specified"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Availability</span>

                <span className="text-green-600 font-semibold">
                  In Stock
                </span>
              </div>

            </div>

            {/* Quantity */}

            <div className="flex items-center gap-5">

              <div className="flex items-center border rounded-lg">

                <button  onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}  className="px-4 py-3">
                  -
                </button>

                <span className="px-5">
                  {counter}
                </span>

                <button onClick={() => setCounter(counter < 20 ? counter + 1 : 20)} className="px-4 py-3">
                  +
                </button>

              </div>

              <button onClick={() => handleBuyNow(product)} className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold duration-300">
                <i className="fa-solid fa-cart-shopping mr-2"></i>
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductInformation;