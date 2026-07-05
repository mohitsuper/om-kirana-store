<<<<<<< HEAD
import React from "react";

const RelatedProducts = ({ categoryProducts = [] }) => {

  if (categoryProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[3px] text-orange-500 font-semibold text-sm">
            You May Also Like
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-3">
            Related Products
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Browse similar wholesale grocery products available at the best
            prices.
          </p>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Badge */}
              <div className="absolute mt-4 ml-4 z-10">
                <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  Bluk
                </span>
              </div>

              {/* Image */}
              <div className="bg-gray-50 p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 text-lg">
                  {product.name}
                </h3>

                <h4 className="text-orange-500 font-bold text-2xl mt-2">
                  ₹{product.price}
                </h4>

                <p className="text-sm text-gray-500 mt-2">
                  {product.moq}
                </p>

                <button className="mt-5 w-full bg-[#0E2A47] hover:bg-orange-500 text-white py-3 rounded-lg font-medium duration-300">
                  <i className="fa-solid fa-cart-plus mr-2"></i>
                  Add To Quote
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

=======
import React from "react";

const RelatedProducts = ({ categoryProducts = [] }) => {

  if (categoryProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[3px] text-orange-500 font-semibold text-sm">
            You May Also Like
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-3">
            Related Products
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Browse similar wholesale grocery products available at the best
            prices.
          </p>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Badge */}
              <div className="absolute mt-4 ml-4 z-10">
                <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  Bluk
                </span>
              </div>

              {/* Image */}
              <div className="bg-gray-50 p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 text-lg">
                  {product.name}
                </h3>

                <h4 className="text-orange-500 font-bold text-2xl mt-2">
                  ₹{product.price}
                </h4>

                <p className="text-sm text-gray-500 mt-2">
                  {product.moq}
                </p>

                <button className="mt-5 w-full bg-[#0E2A47] hover:bg-orange-500 text-white py-3 rounded-lg font-medium duration-300">
                  <i className="fa-solid fa-cart-plus mr-2"></i>
                  Add To Quote
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

>>>>>>> 8bb1ce80fe79c61fd926da9267d632ab125e0cda
export default RelatedProducts;