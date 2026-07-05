import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import ProductCard from "./ProductCard";
import products from "../data/product";

const FeaturedProducts = () => {
  return (
    <section className="py-4 sm:py-16 wow animate__animated animate__fadeInUp">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-6 sm:mb-12 flex items-center justify-center gap-4">
          <div className="h-[2px] w-16 bg-orange-500"></div>

          <h2 className="text-xl text-nowrap sm:text-3xl font-bold text-slate-800">
            Featured Products
          </h2>

          <div className="h-[2px] w-16 bg-orange-500"></div>
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
            <SplideSlide key={item.id}>
              <ProductCard item={item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default FeaturedProducts;