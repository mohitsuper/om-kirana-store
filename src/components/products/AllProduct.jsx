import React, { useState } from "react";
import products from "../../data/product";
import ProductCard from "../ProductCard";
import { categories } from "../../data/categories";


const AllProducts = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) => {
    

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return  matchSearch;
  });

  return (
    <section className="py-10 bg-slate-50">

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

      

        {/* Grid */}

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredProducts.map((item) => (
            <ProductCard
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default AllProducts;