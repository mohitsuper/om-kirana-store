import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import ProductCard from "./ProductCard";
import { useEffect, useState } from 'react';
import { GetProducts } from '../axois/axois';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await GetProducts({ page: 1, limit: 12 });
        setProducts(res.data || []);
      } catch (err) {
        console.error('Failed to load featured products', err);
      }
    };
    fetch();
  }, []);

  return (
    <section className="py-4 sm:py-16 wow animate__animated animate__fadeInUp">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-6 sm:mb-12 flex items-center justify-center gap-4">
          <div className="h-0.5 w-16 bg-orange-500"></div>

          <h2 className="text-xl text-nowrap sm:text-3xl font-bold text-slate-800">
            Featured Products
          </h2>

          <div className="h-0.5 w-16 bg-orange-500"></div>
        </div>

        <Splide
          options={{
            perPage: 6,
            gap: "18px",
            arrows: products.length > 6,
            pagination: false,
            autoplay: products.length > 6,

            breakpoints: {
              1280: {
                perPage: 5,
              },
              1024: {
                perPage: 4,
              },
              768: {
                perPage: 3,
              },
              640: {
                perPage: 2,
              },
            },
          }}
        >
          {products.map((item) => (
            <SplideSlide key={item._id || item.id}>
              <ProductCard item={{
                id: item._id || item.id,
                name: item.productName || item.name,
                image: item.imageUrl?.url || item.image,
                price: item.price,
                minOrder: item.minimumOrder || item.minOrder,
                badge: item.badge || ''
              }} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default FeaturedProducts;