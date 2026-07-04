import React, { useState } from "react";
import products from "../../data/product";

const categories = ["All", "Oil", "Rice", "Spices", "Tea", "Atta"];

const AllProducts = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) => {
    const matchCategory =
      category === "All" || item.category === category;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="py-16 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mb-10">

          <div>
            <h2 className="text-4xl font-bold text-slate-800">
              All Products
            </h2>

            <p className="text-slate-500 mt-2">
              Premium grocery products for wholesale & retail.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-80 px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Category */}

        <div className="flex flex-wrap gap-3 mb-10">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full font-medium transition

              ${
                category === item
                  ? "bg-orange-500 text-white"
                  : "bg-white border hover:bg-orange-50"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Grid */}

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
            >

              <div className="relative">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain p-5 group-hover:scale-105 transition duration-300"
                />

                <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  {product.discount}
                </span>

              </div>

              <div className="p-5">

                <p className="text-sm text-orange-500 font-semibold">
                  {product.category}
                </p>

                <h3 className="font-bold text-lg mt-1">
                  {product.name}
                </h3>

                <p className="text-slate-500 mt-2 text-sm">
                  {product.weight}
                </p>

                <div className="flex items-center gap-3 mt-5">

                  <h4 className="text-2xl font-bold text-slate-800">
                    ₹{product.price}
                  </h4>

                  <del className="text-slate-400">
                    ₹{product.oldPrice}
                  </del>

                </div>

                <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AllProducts;