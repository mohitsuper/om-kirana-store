import React from "react";

const features = [
  {
    icon: "fa-boxes-stacked",
    title: "Bulk Supply",
    subtitle: "Available",
  },
  {
    icon: "fa-shield-halved",
    title: "Best Quality",
    subtitle: "Products",
  },
  {
    icon: "fa-truck-fast",
    title: "Timely Delivery",
    subtitle: "Safe & Fast",
  },
  {
    icon: "fa-tags",
    title: "Affordable",
    subtitle: "Prices",
  },
  {
    icon: "fa-store",
    title: "Wide Range",
    subtitle: "Of Products",
  },
  {
    icon: "fa-headset",
    title: "Dedicated",
    subtitle: "Customer Support",
  },
];

const WhoWeAre = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-12 items-center ">
          {/* Left Image */}
          <div className="flex basis-[50%]">
            <img
              src="/images/about/about-hero.jpg"
              alt="OM Kirana Store"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Heading */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-orange-500"></div>

              <span className="uppercase tracking-[3px] text-sm font-semibold text-orange-500">
                WHO WE ARE
              </span>

              <div className="w-10 h-[2px] bg-orange-500"></div>
            </div>

            {/* Title */}
            <h2 className="text-lg lg:text-4xl font-bold text-slate-800 leading-tight mb-3 sm:mb-6">
              Your Trusted Wholesale Grocery Partner
            </h2>

            {/* Description */}
            <p className="mt-3 sm:mt-6 text-sm text-gray-600 sm:text-lg leading-7 sm:leading-8 max-w-xl">
              OM Kirana Store is a leading wholesale grocery supplier committed
              to delivering quality products at the best prices. With years of
              experience in the industry, we proudly serve retailers, hotels,
              restaurants, caterers, and distributors with reliable products,
              affordable pricing, and timely delivery.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 mt-4">
              {features.map((item, index) => (
                <div key={index} className="flex sm:items-start items-center flex-col sm:flex-row  gap-4">
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <i
                      className={`fa-solid ${item.icon} text-orange-500 text-xl`}
                    ></i>
                  </div>

                  <div className="flex flex-col items-center sm:items-start">
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;