import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { GetProducts, GetCategories } from "../../axois/axois";


const AllProducts = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const fetchPage = async (p = 1) => {
    try {
      const res = await GetProducts({ page: p, limit });
      setProducts(res.data || []);
      setTotal(res.total || 0);
    } catch (err) {
      console.error('Failed to fetch products', err);
    }
  };

  useEffect(() => {
    fetchPage(page);
    const fetch = async () => {
      try {
        const c = await GetCategories();
        setCategories(c.data || []);
      } catch (err) {
        console.error('Failed to fetch categories', err);
      }
    };
    fetch();
  }, [page]);

  const filteredProducts = (products || []).filter((item) => {
    const name = (item.productName || item.name || '').toString();
    const matchSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || !category || (item.category === category) || (item.categoryName === category);
    return matchSearch && matchCategory;
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
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id || product.id}
              item={{
                id: product._id || product.id,
                name: product.productName || product.name,
                image: product.imageUrl?.url || product.image,
                price: product.price,
                minOrder: product.minimumOrder || product.minOrder,
                badge: product.badge || ''
              }}
            />
          ))}

        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1 rounded border">Previous</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button key={p} onClick={() => setPage(p)} className={`px-3 py-1 rounded ${p === page ? 'bg-[#0f2245] text-white' : 'border'}`}>{p}</button>
          ))}
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-3 py-1 rounded border">Next</button>
        </div>

      </div>

    </section>
  );
};

export default AllProducts;