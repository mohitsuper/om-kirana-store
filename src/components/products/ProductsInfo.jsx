<<<<<<< HEAD
import React from "react";
// import productImage from "../assets/products/fortune-oil.png"; // Replace later

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


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Product Image */}
          <div>
            <div className="bg-gray-50 rounded-3xl p-10 shadow-sm border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[450px] object-contain hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Product Information */}
          <div>

            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
              Grocery Product
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-4">
              Fortune Refined Sunflower Oil
            </h2>

            <div className="flex items-center gap-2 mt-3">
              <div className="text-yellow-400">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>

              <span className="text-gray-500">(4.8 Reviews)</span>
            </div>

            <h3 className="text-4xl font-bold text-orange-500 mt-6">
              {product.price.toLocaleString()} &#8377;
            </h3>

            <p className="text-gray-600 leading-8 mt-6">
              Premium quality refined sunflower oil suitable for homes,
              restaurants, hotels and catering businesses. Healthy, light
              and perfect for daily cooking.
            </p>

            <div className="border-t border-b py-6 my-8 space-y-4">

              <div className="flex justify-between">
                <span className="font-semibold">Brand</span>
                <span>Fortune</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Category</span>
                <span>Cooking Oil</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Packaging</span>
                <span>15 Litre Jar</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Minimum Order</span>
                <span>5 Pieces</span>
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

                <button className="px-4 py-3">
                  -
                </button>

                <span className="px-5">
                  1
                </span>

                <button className="px-4 py-3">
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

=======
import React from "react";
// import productImage from "../assets/products/fortune-oil.png"; // Replace later

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


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Product Image */}
          <div>
            <div className="bg-gray-50 rounded-3xl p-10 shadow-sm border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[450px] object-contain hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Product Information */}
          <div>

            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
              Grocery Product
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-4">
              Fortune Refined Sunflower Oil
            </h2>

            <div className="flex items-center gap-2 mt-3">
              <div className="text-yellow-400">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>

              <span className="text-gray-500">(4.8 Reviews)</span>
            </div>

            <h3 className="text-4xl font-bold text-orange-500 mt-6">
              {product.price.toLocaleString()} &#8377;
            </h3>

            <p className="text-gray-600 leading-8 mt-6">
              Premium quality refined sunflower oil suitable for homes,
              restaurants, hotels and catering businesses. Healthy, light
              and perfect for daily cooking.
            </p>

            <div className="border-t border-b py-6 my-8 space-y-4">

              <div className="flex justify-between">
                <span className="font-semibold">Brand</span>
                <span>Fortune</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Category</span>
                <span>Cooking Oil</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Packaging</span>
                <span>15 Litre Jar</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Minimum Order</span>
                <span>5 Pieces</span>
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

                <button className="px-4 py-3">
                  -
                </button>

                <span className="px-5">
                  1
                </span>

                <button className="px-4 py-3">
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

>>>>>>> 8bb1ce80fe79c61fd926da9267d632ab125e0cda
export default ProductInformation;