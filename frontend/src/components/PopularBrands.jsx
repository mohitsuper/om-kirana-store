import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { brands } from "../data/brands";
import BrandCard from "./BrandsCards";

const PopularBrands = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="flex items-center justify-center gap-4 mb-10">

          <div className="w-14 h-[2px] bg-orange-500 relative">
            <span className="absolute -right-2 -top-[4px] w-2 h-2 rounded-full bg-orange-500"></span>
          </div>

          <h2 className="text-3xl font-bold text-[#0B2242]">
            Our Popular Brands
          </h2>

          <div className="w-14 h-[2px] bg-orange-500 relative">
            <span className="absolute -left-2 -top-[4px] w-2 h-2 rounded-full bg-orange-500"></span>
          </div>

        </div>

        <Splide
          options={{
            type: "loop",
            perPage: 7,
            gap: "16px",
            arrows: brands.length > 7,
            pagination: true,
            autoplay: true,
            interval: 2500,

            breakpoints: {
              1280: {
                perPage: 6,
              },
              1024: {
                perPage: 5,
              },
              768: {
                perPage: 4,
              },
              640: {
                perPage: 3,
              },
              480: {
                perPage: 2,
              },
            },
          }}
        >
          {brands.map((brand) => (
            <SplideSlide key={brand.id}>
              <BrandCard item={brand} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default PopularBrands;