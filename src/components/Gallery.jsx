import React from "react";

const galleryImages = [
  "/images/gallery/2.jpeg",
  "/images/gallery/3.jpeg",
  "/images/gallery/4.png",
  "/images/gallery/5.jpeg",
  "/images/gallery/6.jpeg",
  "/images/gallery/7.jpeg",
  "/images/gallery/8.jpeg",
  "/images/gallery/9.jpeg",
  "/images/gallery/10.jpeg",
    "/images/gallery/11.jpeg"
];

const Gallery = () => {
  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-7 sm:mb-14">
          <span className="text-orange-500 text-xs sm:text-sm uppercase font-semibold tracking-[3px]">
            Our Gallery
          </span>

          <h2 className="text-lg sm:text-4xl font-bold text-gray-800 mt-3">
            Explore Our Store
          </h2>

          <p className="text-sm text-gray-500 sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto">
            Take a look inside OM Kirana Store. We offer a wide range of
            wholesale grocery products with organized storage, quality products,
            and a customer-friendly shopping experience.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl group shadow-md"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;